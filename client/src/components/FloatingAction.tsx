import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { FloatButton, Tooltip } from 'antd'

type Props = {
  selectedRow: Car
  setOpenModal: Function
}

export default function FloatingAction({ selectedRow, setOpenModal }: Props) {
  const clickAddHanlder = () => {
    setOpenModal({
      open: true,
      title: 'Add Car',
      mode: 'ADD',
    })
  }
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
          <FloatButton onClick={clickAddHanlder} icon={<PlusOutlined />} />
        </Tooltip>
      </FloatButton.Group>
    </>
  )
}
