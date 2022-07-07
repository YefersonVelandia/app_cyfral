import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Table} from 'antd';
import { DeleteOutlined, EditFilled} from '@ant-design/icons';
import Loading from 'views/app-views/components/data-display/card/Loading';

const ListUsers = () => {

  const [dataUsers, setDataUsers] = useState([]);

  const tableColumns = [
    {
      key: '1',
      title: 'Nombre',
      dataIndex: 'name',
      // render: (_, record) => (
      //   <div className="d-flex">
      //     <AvatarStatus  name={record.name} subTitle={record.email}/>
      //   </div>
      // ),
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
    const url = 'https://cyfral.herokuapp.com/api/users';
    try {
      const resp = await axios.get(url,{      
        headers: {
          'x-token': localStorage.getItem('x-token')
        }
      })
    //  console.log(await resp.data.users);
     setDataUsers(resp.data.users);
    //  dataUsers.map( (user)=> {
    //   console.log(user);
    // })

    // let ListadousuarioHTML = ''

    //  for (const dato of resp.data.users) {
    //    console.log(dato);

    //   let usuarioHTML = `<tr>
    //                         <td>${dato.name}</td>
    //                         <td>${dato.lastname}</td>
    //                         <td>${dato.email}</td>
    //                         <td>${dato.document}</td>
    //                         <td>${dato.role}</td>
                            
    //                       </tr>`;

    //   ListadousuarioHTML += usuarioHTML;                  
    //  }

    //  document.querySelector('tbody').outerHTML = ListadousuarioHTML;


    } catch (error) {
     console.log(error);     
    }
  }
  
  return (
    <>
      {
        dataUsers 
          ? 
            <Card bodyStyle={{'padding': '0px'}}>
              <div className="table-responsive">
                <Table key={dataUsers.uid} columns={tableColumns} dataSource={dataUsers} />
              </div>
            </Card>
          : Loading
      }

      {
        console.log(typeof dataUsers)
      }

      {/* <Table dataSource={dataSource} columns={tableColumns} /> */}
      {/* <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>correo</th>
            <th>Documento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            dataUsers.map( (user)=>(
              <tr>
                <td> {user.name + ' ' + user.lastname }</td>
                <td> {user.email }</td>
                <td> {user.document } </td>
                <td>
                  <button onClick={DeleteUser(user.uid)}>Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
{/*         
      <Button type="primary" icon={<SearchOutlined />} onClick={GetUSers}>Consultar usuarios</Button>
      <Button type='danger' onClick={abrirModal} >Eliminar</Button> */}
    </>
  )
}

export default ListUsers