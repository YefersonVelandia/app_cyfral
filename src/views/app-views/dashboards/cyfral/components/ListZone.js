import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Row, Table} from 'antd';
import { DeleteOutlined, EditFilled} from '@ant-design/icons';

const ListZone = () => {

    const [station, setStation] = useState([]);
    const GetZone = async () =>{
        const url = 'https://cyfral.herokuapp.com/api/zones';
        try {
          const resp = await axios.get(url,{      
            headers: {
                'x-token': localStorage.getItem('x-token')
            }
          })

          setStation(resp.data.zone)
        
        } catch (error) {
         console.log(error);     
        }
    }

    useEffect(() => {
        GetZone();
    }, [])

    const tableColumns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: '_id',
            sorter: {
              compare: (a, b) => a._id - b._id,
            }
        },
        {
          key: '2',
          title: 'zone',
          dataIndex: 'zone',
          sorter: {
            compare: (a, b) => a.zone.length - b.zone.length,
          },
        },
        {
          key: "3",
          title: 'Acciones ',
          dataIndex: 'acciones',
          render: (record) => {
            return (
              <>
                <EditFilled 
                  onClick = { () =>{
                    
                  }}
                />
                <DeleteOutlined
                  onClick={() => {
                  }}
                  style={{ color: "red", marginLeft: 12 }}
                />
              </>
            );
          }
        }
    ]
  return (
    <>
      <Row>
        {
          station.map( s => (
            <Card key={s.uid} className='m-1' >
                <p>{s.zone} </p>
            </Card>
          ))
        }
      </Row>
    </>
  )
}

export default ListZone