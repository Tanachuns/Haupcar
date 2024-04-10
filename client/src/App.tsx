import { Layout } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import CarListTable from './components/CarListTable'
import { useState } from 'react'
import FloatingAction from './components/FloatingAction'
import FormModal from './components/FormModal'

function App() {
  const [selectedRow, setSelectedRow] = useState({} as Car)
  const [openModal, setOpenModal] = useState({} as ModalProp)
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
      <FormModal
        title={openModal.title}
        mode={openModal.mode}
        open={openModal.open}
        setOpen={setOpenModal}
      />
      <FloatingAction selectedRow={selectedRow} setOpenModal={setOpenModal} />
    </>
  )
}

export default App
