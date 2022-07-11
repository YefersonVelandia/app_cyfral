import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Spin, Table} from 'antd';
import { DeleteOutlined, EditFilled} from '@ant-design/icons';

const ListUsers = () => {

  const [dataUsers, setDataUsers] = useState([]);

  const tableColumns = [
    {
      key: '1',
      title: 'Nombre',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
            b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      key: '2',
      title: 'Apellido',
      dataIndex: 'lastname',
      sorter: {
        compare: (a, b) => a.lastname.length - b.lastname.length,
      },
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email',
      sorter: {
        compare: (a, b) => a.email.length - b.email.length,
      },
    },
    {
      key: '4',
      title: 'Documento',
      dataIndex: 'document',
      sorter: {
        compare: (a, b) => a.document - b.document,
      },
    },
    {
      key: '5',
      title: 'Rol',
      dataIndex: 'role',
      sorter: {
        compare: (a, b) => a.role.length - b.role.length,
      },
    },
    {
      key: "6",
      title: 'Acciones ',
      dataIndex: 'acciones',
      render: (record) => {
        return (
          <>
            <EditFilled
            />
            <DeleteOutlined
              onClick={() => {
                DeleteUser(dataUsers[0].uid);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      }
    }
  ]

  useEffect(() => {
    GetUSers();
  }, [])
  

  const DeleteUser = (fila) => {
    console.log('mi id : ', fila);
  }

  const EditUser = async () => {

  }

  const GetUSers = async () =>{
    const url = 'https://cyfral.herokuapp.com/api/users/operator';
    try {
      const resp = await axios.get(url,{      
        headers: {
          'x-token': localStorage.getItem('x-token')
        }
      })
     setDataUsers(resp.data.operator);
    } catch (error) {
     console.log(error);     
    }
  }
  
  return (
    <>
      {
        dataUsers 
          ? 
            <Table key={dataUsers.uid} columns={tableColumns} dataSource={dataUsers} />
          : <Spin />
      }
    </>
  )
}

export default ListUsers