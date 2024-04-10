import { Modal } from 'antd'
import AddForm from './AddForm'
import EditForm from './EditForm'

export default function FormModal({
  title,
  mode,
  open,
  setOpen,
  refCar,
}: ModalProp) {
  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <>
      <Modal
        open={open}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, {}) => <></>}
      >
        {mode == 'ADD' ? <AddForm /> : <EditForm refCar={refCar} />}
      </Modal>
    </>
  )
}
