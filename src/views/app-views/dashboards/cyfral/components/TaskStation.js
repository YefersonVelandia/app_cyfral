import { Card, Modal, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TaskStation = () => {

  const [Taskorders, setTaskOrders] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getProcesos = async () => {
    const url = '  http://localhost:9000/api/taskstation/stations/627c2f2939feb76a02fbac01';
    try {
        const resp = await axios.get(url,{      
          headers: {
            'x-token': localStorage.getItem('x-token')
          }
        })
        setTaskOrders(resp.data);
        console.log(resp.data);
    } catch (error) {
      console.log(error);     
    }
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getProcesos()
  },[])

  return (
    <>
      <Row >
        {
          Taskorders.map( s => (

            <Card key={s.uid} className='m-1' onClick={showModal}>
                <p>{s.name} </p>
            </Card>
          ))
        }
      </Row>

      <Modal title="Orden de producción" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {/* <Row>
          <p> <strong className='text-info'>NroPedido: </strong> <strong>{Taskorders[28].NroPedido} </strong></p>
          <p className='ml-2'>  <strong className='text-info'>Nro de Orden: </strong> <strong>{Taskorders[28].Nro_Orden} </strong></p>
        </Row>
        <Row>
          <p> <strong className='text-info'>Cliente:</strong> <strong>{Taskorders[28].cliente ? Taskorders[28].cliente : ''}</strong></p>
          <p className='ml-2'> 
            <strong className='text-info'>Fecha de entrega: </strong>
            <strong>{Taskorders[28].fechaDeEntrega} </strong></p>
        </Row>
        <Row>
          <p> <strong className='text-info'>Numero de filas: </strong> <strong>{Taskorders[28].NF }</strong></p>
          <p className='ml-2'> <strong className='text-info'>Oficina: </strong> <strong>{Taskorders[28].OF}</strong></p>
        </Row>
        <Row>
          <p> <strong className='text-info'> Codigo: </strong> <strong>{Taskorders[28].codigo } </strong></p>
          <p className='ml-2 text-info'> <strong> Referencia: </strong> {Taskorders[28].referencia}</p>
        </Row> */}
        
      </Modal>
    </>
  )
}

export default TaskStation