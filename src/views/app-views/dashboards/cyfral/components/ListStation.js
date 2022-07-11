import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Row, Spin } from 'antd';

const ListStation = () => {

    const [station, setStation] = useState([])
    const GetStations = async () =>{
        const url = 'https://cyfral.herokuapp.com/api/stations';
        try {
          const resp = await axios.get(url,{      
            headers: {
               'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjRhODU1M2Q5YmViOTQzYmIxNjc3YjMiLCJpYXQiOjE2NTA1Nzc5NDIsImV4cCI6MTY4MjExMzk0Mn0.qs9QudrrUC-Q0Nrxd88g4b6aVIl6W4PpVxKal7ToHsk'
            }
          })

          setStation(resp.data.station)
          console.log(station);
        
        } catch (error) {
         console.log(error);     
        }
    }

    useEffect(() => {
        GetStations();
    }, [])
  return (
    <>
      {
        station ?
          <Row>
            {
              station.map( s => (
                <Card key={s.uid} style={{ width: 300 }} className='m-1'>
                    <p>{s.station} </p>
                </Card>
              ))
            }
          </Row>
        : <Spin />

      }
    </>
  )
}

export default ListStation