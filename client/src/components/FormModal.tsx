import { Button, Modal } from 'antd'
import React from 'react'
import AddForm from './AddForm'

export default function FormModal({ title, mode, open, setOpen }: ModalProp) {
  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e)
    setOpen(false)
  }

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e)
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
        <AddForm />
      </Modal>
    </>
  )
}
