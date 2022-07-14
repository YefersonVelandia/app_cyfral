import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Row, Spin } from 'antd';
import Loading from 'components/shared-components/Loading'

const ListStation = () => {

    const [station, setStation] = useState([])
    const [data, setData] = useState(false);

    const GetStations = async () =>{
      const url = 'https://cyfral.herokuapp.com/api/stations';
      try {
        const resp = await axios.get(url,{      
          headers: {
              'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjRhODU1M2Q5YmViOTQzYmIxNjc3YjMiLCJpYXQiOjE2NTA1Nzc5NDIsImV4cCI6MTY4MjExMzk0Mn0.qs9QudrrUC-Q0Nrxd88g4b6aVIl6W4PpVxKal7ToHsk'
          }
        })
        setStation(resp.data.station)
        setData(true)
      } catch (error) {
        console.log(error);     
      }
    }

    useEffect(() => {
        GetStations();
    }, [])
  return (
    <>
      <Card className='shadow-sm'>
        <h2 className='text-center'>Listado de estaciones</h2>
        {
          data ?
            <Row>
              {
                station.map( s => (
                  <Card key={s.uid} style={{ width: 320 }}
                   className='m-1 shadow-sm  border-bottom'
                  >
                      <p className='text-center'><strong>{s.station}</strong></p>
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

export default ListStation