import { Button, Space, Table, TableColumnsType } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getDateFormat } from '../services/utils'
import { Key } from 'antd/es/table/interface'

type Props = {
  currenetRow: Car
  setSelectedRow: Function
}

const columns: TableColumnsType<Car> = [
  {
    title: 'เลขทะเบียน',
    dataIndex: 'registerNo',
    key: 'registerNo',
    responsive: ['xs', 'sm', 'md'],
  },
  {
    title: 'ยี่ห้อรถ',
    dataIndex: 'brand',
    key: 'brand',
    responsive: ['sm'],
  },
  {
    title: 'รุ่นรถ',
    dataIndex: 'model',
    key: 'model',
    responsive: ['sm'],
  },
  {
    title: 'หมายเหตุ',
    dataIndex: 'notes',
    key: 'notes',
    responsive: ['md'],
  },
  {
    title: 'วันที่บันทึก',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date: string) => getDateFormat(date),
    responsive: ['lg'],
  },
  {
    title: 'วันที่แก้ไข',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (date: string) => getDateFormat(date),
    responsive: ['lg'],
  },
]

export default function CarListTable({ currenetRow, setSelectedRow }: Props) {
  const [dataSource, setDataSource] = useState([])

  const rowSelectedHandler = (record: Car) => {
    setSelectedRow(record)
  }
  const rowResetHandler = () => {
    setSelectedRow({})
  }

  const getAllCar = () => {
    axios.get(import.meta.env.VITE_API_URL + '/api/car').then((res: any) => {
      setDataSource(res.data)
    })
  }
  useEffect(getAllCar, [])

  return (
    <>
      <Space style={{ margin: '1em 0' }}>
        <Button onClick={() => rowResetHandler()}>Reset</Button>
      </Space>
      <Table
        rowSelection={{
          selectedRowKeys: [currenetRow.id] as Key[],
          type: 'radio',
          onSelect: rowSelectedHandler,
        }}
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        loading={dataSource.length == 0}
      />
    </>
  )
}
