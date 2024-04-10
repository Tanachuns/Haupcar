import { Form, Input, Button, FormProps, message } from 'antd'
import axios from 'axios'
import TextArea from 'antd/es/input/TextArea'
import { useEffect } from 'react'

type Props = {
  refCar: Car
}

export default function EditForm({ refCar }: Props) {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const success = () => {
    messageApi
      .open({
        type: 'success',
        content: 'แก้ไขข้อมูลสำเร็จ!',
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
        content: 'กำลังแก้ไขฐานข้อมูล...',
      })
      .then(() => {
        axios
          .put(import.meta.env.VITE_API_URL + '/api/car/' + refCar.id, values)
          .then((res) => {
            if (res.status == 204) {
              success()
            }
          })
          .catch((ex) => {
            if (ex.response.status == 404) {
              error('ไม่พบข้อมูลที่ต้องการแก้ไขในระบบ')
            } else {
              error('เกิดข้อผิดพลาด')
            }
          })
      })
  }

  const onLoad = () => {
    form.setFieldValue('registerNo', refCar.registerNo)
    form.setFieldValue('brand', refCar.brand)
    form.setFieldValue('model', refCar.model)
    form.setFieldValue('notes', refCar.notes)
  }

  useEffect(onLoad, [refCar])

  return (
    <>
      {contextHolder}
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item<Car>
          name="registerNo"
          label="เลขทะเบียน"
          rules={[{ required: true }]}
        >
          <Input placeholder="Register No." />
        </Form.Item>
        <Form.Item<Car>
          name="brand"
          label="ยี่ห้อรถยนต์"
          rules={[{ required: true }]}
        >
          <Input placeholder="Brands" />
        </Form.Item>
        <Form.Item<Car>
          name="model"
          label="รุ่นรถยนต์"
          rules={[{ required: true }]}
        >
          <Input placeholder="Model" />
        </Form.Item>
        <Form.Item<Car> name="notes" label="หมายเหตุ">
          <TextArea
            placeholder="Notes"
            autoSize={{ minRows: 3, maxRows: 5 }}
            value={refCar.notes}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
