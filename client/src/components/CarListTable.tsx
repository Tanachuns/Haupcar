import { Table, TableColumnsType } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getDateFormat } from '../services/utils'

type Props = {
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

export default function CarListTable({ setSelectedRow }: Props) {
  const [dataSource, setDataSource] = useState([])

  const rowSelectedHandler = (_: React.Key[], selectedRow: Car[]) => {
    setSelectedRow(selectedRow[0])
  }
  const getAllCar = () => {
    axios.get('http://localhost:8080/api/car').then((res: any) => {
      setDataSource(res.data)
    })
  }
  useEffect(getAllCar, [])

  return (
    <>
      <Table
        rowSelection={{
          type: 'radio',
          onChange: rowSelectedHandler,
        }}
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
      />
    </>
  )
}
