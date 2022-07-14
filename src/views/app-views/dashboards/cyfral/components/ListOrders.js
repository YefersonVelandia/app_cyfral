import React, { useEffect, useState } from 'react'
import { Card, Modal, Row } from "antd";
import axios from 'axios';
import Loading from 'components/shared-components/Loading';

const ListOrders = () => {

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orders, setOrders] = useState([])
  const [data, setData] = useState(false);

  const getOrdenes = async () => {

    const url = 'https://cyfral.herokuapp.com/api/orders';
    try {
        const resp = await axios.get(url,{      
          headers: {
            'x-token': localStorage.getItem('x-token')
          }
        })
        setOrders(resp.data.order);
        setData(true)
    } catch (error) {
      console.log(error);     
    }
  }

  useEffect(() => {
    getOrdenes()
  },[])


  return (
    <>
      <h2 className='text-center'>Ordenes de Producción</h2>
      {
        data ?
          <Row>
            {
              orders.map( order => (
                <Row id={order.uid} className='m-1' onClick={showModal}>
                  <Card>
                    <Row>
                      <p>Número de orden: {order.Nro_Orden}</p>
                      <p className='ml-2'>Número de pedido: {order.NroPedido}</p>
                    </Row>
                    <Row>
                      <p>Cliente: {order.cliente}</p>
                      <p className='ml-2'>OF: {order.OF}</p>
                    </Row>
                    <Row>
                      <p>Codigo: {order.codigo}</p>
                    </Row>
                      <p>Referencia: {order.referencia}</p>
                    <Row>
                      <p>Cantidad: {order.cantidad}</p>
                      <p className='ml-2'>Numero de filas: {order.NF}</p>
                    </Row>
                    <Row>
                      <p>Paso: {order.paso}</p>
                      <p className='ml-2'>Ancho Tubo: {order.anchoTubo}</p>
                    </Row>
                    <Row>
                      <p>Cantidad tubo: {order.cantidadTubo}</p>
                      <p className='ml-2'>Longitud tubo: {order.longitudTubo}</p>
                    </Row>
                    <Row>
                      <p>Ancho aleta: {order.anchoAleta}</p>
                      <p className='ml-2'>Cantidad aleta: {order.longitudAleta}</p>
                    </Row>
                  </Card>
                </Row>
              ))
            }
          </Row>
        : <Loading />

      }

      <Modal title="Orden de producción" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>

  )
}

export default ListOrders
