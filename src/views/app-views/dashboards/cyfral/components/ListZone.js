import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Row, Table} from 'antd';
import { DeleteOutlined, EditFilled} from '@ant-design/icons';
import Loading from 'components/shared-components/Loading';

const ListZone = () => {

  const [station, setStation] = useState([]);
  const [data, setData] = useState(false);

  const GetZone = async () =>{
      const url = 'https://cyfral.herokuapp.com/api/zones';
      try {
        const resp = await axios.get(url,{      
          headers: {
              'x-token': localStorage.getItem('x-token')
          }
        })

        setStation(resp.data.zone)
        setData(true)
      } catch (error) {
        console.log(error);     
      }
  }

  useEffect(() => {
      GetZone();
  }, [])

  return (
    <>
      <Card className='shadow-lg align-items-center'>
        <h2 className='text-center'>Listado de Zonas</h2>
        {
        data ?
          <Row>
            {
              station.map( s => (
                <Card key={s.uid} className='m-1 border' style={{ width: 320 }} >
                    <p>{s.zone} </p>
                </Card>
              ))
            }
          </Row>
        : <Loading /> 
        }
      </Card>
    </>
  )
}

export default ListZone