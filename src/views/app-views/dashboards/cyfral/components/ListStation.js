import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from 'antd';

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

          let ListadousuarioHTML = ''

           for (const dato of resp.data.station) {
            
            let usuarioHTML = `<div>
                                    <p>${dato.station}<p>
                                    <p>${dato.uid}<p>
                                </div> `;
      
            ListadousuarioHTML += usuarioHTML;                  
           }
      
           document.getElementById('mostrar').outerHTML = ListadousuarioHTML;

          
          setStation(...station, await resp.data.station)
          console.log(station);
        
        } catch (error) {
         console.log(error);     
        }
    }

    useEffect(() => {
        GetStations();
    }, [])
  return (
    <div>
        
        <Card title="Estacion" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p id='mostrar'>
                {
                    console.log(station)
                }
            </p>
        </Card>
    </div>
  )
}

export default ListStation