import { Card, DatePicker, InputNumber, message, Form, Input, Button, Row, TreeSelect, Select, Col } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const { Option } = Select;
const rules = {
  cliente: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'Nombre del cliente no puede ser un caracter en blanco'
    },
  ],
  fechaDeEntrega: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'date',
      whitespace: true,
      message: 'Fecha de entrega no puede ser un caracter en blanco'
    },
  ],
  OF: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      message: 'es necesario conocer el orden de facturación'
    },
  ],
  NroPedido: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      message: 'N° de pedido no puede ser un caracter en blanco'
    },
  ],
  codigo: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'El codigo no puede ser un caracter en blanco'
    },
  ],
  prefijo: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'El prefijo del producto no puede ser un caracter en blanco'
    },
  ],
  referencia: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'La referencia no puede ser un caracter en blanco'
    },
  ],
  cantidad: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'La cantidad no puede ser un caracter en blanco'
    },
  ],
  NF: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'Numero de filas no puede ser un caracter en blanco'
    },
  ],
  paso: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'El Paso no puede ser un caracter en blanco'
    },
  ],
  anchoTubo: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'El ancho de tubo no puede ser un caracter en blanco'
    },
  ],
  cantidadTubo: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'Cantidad de tubo no puede ser un caracter en blanco'
    },
  ],
  longitudTubo: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'La longitud de tubo no puede ser un caracter en blanco'
    },
  ],
  anchoAleta: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'El ancho de aleta no puede ser un caracter en blanco'
    },
  ],
  cantidadAleta: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'La cantidad de aleta no puede ser un caracter en blanco'
    },
  ],
  longitudAleta: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      whitespace: true,
      message: 'La longitud de aleta no puede ser un caracter en blanco'
    },
  ],
  PC: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'boolean',
      message: 'Nombre del operarion no puede ser un caracter en blanco'
    },
  ],
  UES_Colectores: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'UES Colectores no puede ser un caracter en blanco'
    },
  ],
  observaciones: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'Las observaciones no puede ser un caracter en blanco'
    },
  ]
}

const formSuccess = async (datos) => {
  try {
    const url = 'https://cyfral.herokuapp.com/api/orders';
    const resp = await axios.post(url, datos ,{      
      headers: {
          'x-token': localStorage.getItem('x-token')
      }
    })
 
    message.success({ content: 'Orden Creada Correctamente!', duration: 5 });
    document.getElementById("miformulario").reset();
  } catch (error) {
    console.error("Error: ", {error});
    // console.error("Error: ", error.response.data.errors);
    message.error('Error al crear Orden', 4);
  }
}

const formFailed = (error) => {
  console.log(error);
}

const NewOrder = (props) => {
  
  const [products, setProducts] = useState([])
  const getProducts = async () =>{
    const url = 'https://cyfral.herokuapp.com/api/products';
    const resp = await axios.get(url, {      
      headers: {
          'x-token': localStorage.getItem('x-token')
      }
    })
    setProducts(resp.data.product)
    console.log("STATE",products);
  }

  useEffect(() => {
    getProducts()
  }, [])
  const {loading } = props

  return (
    <Card className='shadow-lg'>
      <h3 className='text-center mb-4'>Crear Orden de Producción</h3>
      <Form 
         id='miformulario'
         layout="vertical" 
         name="register-form" 
         onFinish={formSuccess}
         onFinishFailed={formFailed}
      >
        <Row gutter={[8,8]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
              name='cliente' 
              label='Nombre del Cliente' 
              rules={rules.cliente}
              hasFeedback
            >
              <Input size='small' />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}> 
            <Form.Item
                label="fechaDeEntrega"
                name='fechaDeEntrega'
                rules={rules.fechaDeEntrega}
                hasFeedback
            >
              <DatePicker style={{ width: '100%' }}/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8,8]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
              name='OF' 
              label='Orden de facturación' 
              rules={rules.OF}
              hasFeedback
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
                name='NroPedido' 
                label='Nro Pedido' 
                rules={rules.NroPedido}
                hasFeedback
            >
                <InputNumber style={{ width: '100%' }}/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8,8]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name="codigo" 
            label="codigo" 
            rules={rules.codigo}
            hasFeedback
         >
            <Input />
         </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name='prefijo'
            label='Seleccione el producto'
            rules={rules.prefijo}
            hasFeedback
         >
          <Select
          showSearch
          placeholder="Seleccione el producto"
          optionFilterProp="children"
          >
            {
              products.map( (produc)=>(
                <Option key={produc.uid} value={produc.prefijo}> 
                  {produc.name} - ({produc.prefijo}) 
                </Option>
              ))
            }
          </Select>
         </Form.Item>
        </Col>

        </Row>
        <Row gutter={[8,8]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name='referencia'
            label='Ingrese la referencia del producto'
            rules={rules.referencia}
            hasFeedback
         >
            <Input size="small"  />
         </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name='cantidad'
            label='Ingrese la cantidad del producto'
            rules={rules.cantidad}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '100%' }} min={0}/>
         </Form.Item>
        </Col>
        </Row>

        <Row gutter={[8,8]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
                name='NF'
                label='Numero de filas'
                rules={rules.NF}
                hasFeedback
            >
                <InputNumber size="small" style={{ width: '100%' }} min={0}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
                name='paso'
                label='paso'
                rules={rules.paso}
                hasFeedback
            >
              <TreeSelect
                treeData={[
                  {
                    title: '7.8',
                    value: 7.8 
                  },
                  {
                    title: '10.0',
                    value: 10.0
                  },
                  {
                    title: '11.1',
                    value: 10.0
                  },
                  {
                    title: '14.0',
                    value: 14.0
                  },
                  {
                    title: '18.0',
                    value: 18.0
                  },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8,8]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name='anchoTubo'
            label='anchoTubo'
            rules={rules.anchoTubo}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '100%' }} min={0} />
         </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name='cantidadTubo'
            label='cantidadTubo'
            rules={rules.cantidadTubo}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '100%' }} min={0} />
         </Form.Item>
        </Col>
        </Row>

        <Row gutter={[8,8]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name='longitudTubo'
            label='longitudTubo'
            rules={rules.longitudTubo}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '100%' }} min={0} />
         </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
         <Form.Item 
            name='anchoAleta'
            label='anchoAleta'
            rules={rules.anchoAleta}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '100%' }} min={0}/>
         </Form.Item>
        </Col>
        </Row>

        <Row gutter={[8,8]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
                name='cantidadAleta'
                label='cantidadAleta'
                rules={rules.cantidadAleta}
                hasFeedback
            >
                <InputNumber size="small" style={{ width: '100%' }} min={0} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
                name='longitudAleta'
                label='longitudAleta'
                rules={rules.longitudAleta}
                hasFeedback
            >
                <InputNumber size="small" style={{ width: '100%' }} min={0} />
            </Form.Item>
          </Col>
        </Row>
        
        <Row gutter={[8,8]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
                name='PC'
                label='Partes Clientes'
                rules={rules.PC}
                hasFeedback
            >
              <TreeSelect
                treeData={[
                  {
                    title: 'Si',
                    value: true 
                  },
                  {
                    title: 'No',
                    value: false
                  }
                ]}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item 
                name='UES_Colectores'
                label='UES_Colectores'
                rules={rules.UES_Colectores}
                hasFeedback
            >
                <Input size="small" />
            </Form.Item>
          </Col>
        </Row>
         <Form.Item 
            name='observaciones'
            label='Observaciones'
            rules={rules.observaciones} 
            hasFeedback
         >
          <Input.TextArea ></Input.TextArea>
         </Form.Item>


         <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Crear Orden
            </Button>
         </Form.Item>
      </Form>
    </Card>
  )
}

export default NewOrder