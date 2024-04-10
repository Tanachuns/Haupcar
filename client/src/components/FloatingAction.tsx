import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { FloatButton, Tooltip } from 'antd'

type Props = {
  selectedRow: Car
}

export default function FloatingAction({ selectedRow }: Props) {
  return (
    <>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        {Object.keys(selectedRow).length != 0 && (
          <>
            <Tooltip placement="left" title={'Delete'}>
              <FloatButton icon={<DeleteOutlined />} />
            </Tooltip>
            <Tooltip placement="left" title={'Edit'}>
              <FloatButton icon={<EditOutlined />} />
            </Tooltip>
          </>
        )}
        <Tooltip placement="left" title={'Add'}>
          <FloatButton icon={<PlusOutlined />} />
        </Tooltip>
      </FloatButton.Group>
    </>
  )
}
