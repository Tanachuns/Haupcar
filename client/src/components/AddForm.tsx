import { Form, Input, Button, FormProps, message, Modal } from 'antd'
import axios from 'axios'
import TextArea from 'antd/es/input/TextArea'

type Props = {
  open: boolean
  setOpen: Function
}

export default function AddForm({ open, setOpen }: Props) {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    form.resetFields()
    setOpen(false)
  }
  const success = () => {
    messageApi
      .open({
        type: 'success',
        content: 'เพิ่มลงฐานข้อมูลสำเร็จ!',
        duration: 2,
      })
      .then(() => {
        window.location.reload()
      })
  }

  const error = (msg: string) => {
    messageApi.open({
      type: 'error',
      content: msg,
    })
  }
  const onFinish: FormProps<Car>['onFinish'] = (values) => {
    messageApi
      .open({
        type: 'loading',
        content: 'กำลังเพิ่มลงฐานข้อมูล...',
      })
      .then(() => {
        axios
          .post(import.meta.env.VITE_API_URL + '/api/car', values)
          .then((res) => {
            if (res.status == 201) {
              success()
            }
          })
          .catch((ex) => {
            if (ex.response.status == 409) {
              error('ในระบบมีเลขทะเบียนนี้แล้ว')
            } else {
              error('เกิดข้อผิดพลาด')
            }
          })
      })
  }

  return (
    <>
      <Modal
        open={open}
        title={'เพิ่มข้อมูลรถยนต์'}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, {}) => <></>}
      >
        {contextHolder}
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item<Car>
            name="registerNo"
            label="เลขทะเบียน"
            rules={[{ required: true, message: 'กรุณาระบุ เลขทะเบียน' }]}
          >
            <Input placeholder="Register No." />
          </Form.Item>
          <Form.Item<Car>
            name="brand"
            label="ยี่ห้อรถยนต์"
            rules={[{ required: true, message: 'กรุณาระบุ ยี่ห้อรถยนต์' }]}
          >
            <Input placeholder="Brands" />
          </Form.Item>
          <Form.Item<Car>
            name="model"
            label="รุ่นรถยนต์"
            rules={[{ required: true, message: 'กรุณาระบุ รุ่นรถยนต์' }]}
          >
            <Input placeholder="Model" />
          </Form.Item>
          <Form.Item<Car> name="notes" label="หมายเหตุ">
            <TextArea
              placeholder="Notes"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
