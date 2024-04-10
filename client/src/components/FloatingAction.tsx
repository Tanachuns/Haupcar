import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { FloatButton, Tooltip } from 'antd'

type Props = {
  selectedRow: Car
  setOpenAddModal: Function
  setOpenEditModal: Function
  setOpenDeleteModal: Function
}

export default function FloatingAction({
  selectedRow,
  setOpenAddModal,
  setOpenEditModal,
  setOpenDeleteModal,
}: Props) {
  const clickAddHanlder = () => {
    setOpenAddModal(true)
  }
  const clickEditHanlder = () => {
    setOpenEditModal(true)
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
