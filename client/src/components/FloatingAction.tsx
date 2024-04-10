import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { FloatButton, Tooltip } from 'antd'

type Props = {
  selectedRow: Car
  setOpenModal: Function
  setOpenDeleteModal: Function
}

export default function FloatingAction({
  selectedRow,
  setOpenModal,
  setOpenDeleteModal,
}: Props) {
  const clickAddHanlder = () => {
    setOpenModal({
      open: true,
      title: 'เพิ่มข้อมูล',
      mode: 'ADD',
    })
  }
  const clickEditHanlder = () => {
    setOpenModal({
      open: true,
      title: 'แก้ไขข้อมูล',
      mode: 'EDIT',
    })
  }
  return (
    <>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        {Object.keys(selectedRow).length != 0 && (
          <>
            <Tooltip placement="left" title={'Delete'}>
              <FloatButton
                onClick={() => setOpenDeleteModal(true)}
                icon={<DeleteOutlined />}
              />
            </Tooltip>
            <Tooltip placement="left" title={'Edit'}>
              <FloatButton onClick={clickEditHanlder} icon={<EditOutlined />} />
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
