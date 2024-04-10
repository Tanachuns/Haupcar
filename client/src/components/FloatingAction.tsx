import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { FloatButton } from 'antd'
import React from 'react'

type Props = {}

export default function FloatingAction({}: Props) {
  return (
    <>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton icon={<DeleteOutlined />} />
        <FloatButton icon={<EditOutlined />} />
        <FloatButton icon={<PlusOutlined />} />
      </FloatButton.Group>
    </>
  )
}
