import { Layout } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import CarListTable from './components/CarListTable'
import { useState } from 'react'
import FloatingAction from './components/FloatingAction'
import DeleteModal from './components/DeleteModal'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'

function App() {
  const [selectedRow, setSelectedRow] = useState({} as Car)
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  console.log(selectedRow)
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        ></Header>
        <Content
          style={{
            padding: '0 48px',
          }}
        >
          <Layout
            style={{
              padding: '24px 0',
            }}
          >
            <Content
              style={{
                padding: '0 24px',
              }}
            >
              <CarListTable
                currenetRow={selectedRow}
                setSelectedRow={setSelectedRow}
              />
            </Content>
          </Layout>
        </Content>
      </Layout>
      <AddForm open={openAddModal} setOpen={setOpenAddModal} />
      <EditForm
        open={openEditModal}
        setOpen={setOpenEditModal}
        refCar={selectedRow}
      />
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        refCar={selectedRow}
      />
      <FloatingAction
        selectedRow={selectedRow}
        setOpenAddModal={setOpenAddModal}
        setOpenEditModal={setOpenEditModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </>
  )
}

export default App
