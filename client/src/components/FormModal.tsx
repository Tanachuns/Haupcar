import { Button, Modal } from 'antd'
import React from 'react'
import AddForm from './AddForm'
import EditForm from './EditForm'

export default function FormModal({
  title,
  mode,
  open,
  setOpen,
  refCar,
}: ModalProp) {
  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e)
    setOpen(false)
  }

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e)
    setOpen(false)
  }
  console.log(refCar)
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
