import { Modal, message } from 'antd'
import axios from 'axios'

type Props = {
  open: boolean
  setOpen: Function
  refCar: Car
}

export default function DeleteModal({ open, setOpen, refCar }: Props) {
  const [messageApi, contextHolder] = message.useMessage()

  const success = () => {
    setTimeout(() => {
      messageApi.open({
        type: 'success',
        content: 'ลบข้อมูลสำเร็จ!',
        duration: 2,
      })
    }, 1000)
    window.location.reload()
  }

  const error = (msg: string) => {
    messageApi.open({
      type: 'error',
      content: msg,
    })
  }

  const onDelete = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'กำลังลบข้อมูล...',
      })
      .then(() => {
        axios
          .delete(import.meta.env.VITE_API_URL + '/api/car/' + refCar.id)
          .then((res) => {
            if (res.status == 204) {
              success()
            }
          })
          .catch((ex) => {
            if (ex.response.status == 404) {
              error('ไม่พบข้อมูลที่ต้องการลบในระบบ')
            } else {
              error('เกิดข้อผิดพลาด')
            }
          })
      })
  }
  return (
    <>
      {contextHolder}
      <Modal
        title="ยืนยันการลบข้อมูล"
        open={open}
        onOk={() => onDelete()}
        onCancel={() => setOpen(false)}
      >
        <p>ต้องการลบข้อมูลรถ หมายเลขทะเบียน: {refCar.registerNo} ใช่หรือไม่</p>
      </Modal>
    </>
  )
}
