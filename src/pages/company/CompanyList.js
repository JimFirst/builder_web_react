import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import realname from '../../api/realname'

function CompanyList() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  })
  const [total, setTotal] = useState(0)
  const [projects, setProjects] = useState([])
  const paginationInfo = {
    ...pagination,
    total
  }
  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name'
    },
    {
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  useEffect(getProjectList, [pagination])

  function getProjectList() {
    const data = {
      page: pagination.current,
      page_size: pagination.pageSize
    }
    realname.getProjectList(data).then(res => {
      setProjects(res.results)
      setTotal(res.count)
    })
  }
  function handleTableChange(pagination, filters, sorter) {
    console.log(pagination, filters, sorter)
    setPagination({
      ...pagination
    })
  }

  return (
    <div>
      <div>
        <Button type="primary">添加公司</Button>
      </div>
      <div>
        <Table onChange={handleTableChange} dataSource={projects} pagination={paginationInfo} columns={columns} />
      </div>
    </div>
  )
}
export default CompanyList