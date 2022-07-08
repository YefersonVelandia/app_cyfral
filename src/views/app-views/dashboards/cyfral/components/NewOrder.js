import { Card, DatePicker, InputNumber, message, Form, Input, Button, Row, TreeSelect, Alert } from 'antd'
import axios from 'axios';
import React from 'react'

const rules = {
  cliente: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
    },
  ],
  OF: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      message: 'Nombre del operarion no puede ser un caracter en blanco'
    },
  ],
  NroPedido: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      type: 'number',
      message: 'Nombre del operarion no puede ser un caracter en blanco'
    },
  ],
  codigo: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'Nombre del operarion no puede ser un caracter en blanco'
    },
  ],
  prefijo: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'Nombre del operarion no puede ser un caracter en blanco'
    },
  ],
  referencia: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
      message: 'Nombre del operarion no puede ser un caracter en blanco'
    },
  ],
  observaciones: [
    {
      required: true,
      message: 'Por favor complete el campo'
    },
    { 
      whitespace: true,
      message: 'Nombre del operarion no puede ser un caracter en blanco'
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
    message.error('Error al crear usuario', 4);
  }
}

const formFailed = (error) => {
  console.log(error);
}

const NewOrder = (props) => {

  const {loading } = props

  return (
    <Card>
      <h3 className='text-center mb-4'>Crear Orden de Producción</h3>
      <Form 
         id='miformulario'
         layout="vertical" 
         name="register-form" 
         onFinish={formSuccess}
         onFinishFailed={formFailed}
      >
        <Row>
         <Form.Item 
            name='cliente' 
            label='Nombre del Cliente' 
            rules={rules.cliente}
            hasFeedback
         >
            <Input size='small' style={{ width: '450px' }}/>
         </Form.Item>

         <Form.Item
            label="fechaDeEntrega"
            name='fechaDeEntrega'
            rules={rules.fechaDeEntrega}
            className='ml-4'
            hasFeedback
         >
           <DatePicker style={{ width: '450px' }} className='ml-4'/>

         </Form.Item>
        </Row>

        <Row>
         <Form.Item 
            name='OF' 
            label='Oficina' 
            rules={rules.OF}
            hasFeedback
         >
            <InputNumber style={{ width: '450px' }}/>
         </Form.Item>
         <Form.Item 
            name='NroPedido' 
            label='Nro Pedido' 
            rules={rules.NroPedido}
            hasFeedback
            className='ml-4'
         >
            <InputNumber style={{ width: '450px' }} className='ml-4'/>
         </Form.Item>
        </Row>

        <Row>
         <Form.Item 
            name="codigo" 
            label="codigo" 
            rules={rules.codigo}
            hasFeedback
         >
            <Input style={{ width: '450px' }}/>
         </Form.Item>
         <Form.Item 
            name='prefijo'
            label='Ingrese el prefijo del producto'
            rules={rules.prefijo}
            className='ml-4'
            hasFeedback
         >
            <Input size="small" style={{ width: '450px' }} className='ml-4' />
         </Form.Item>

        </Row>
        <Row  >
         <Form.Item 
            name='referencia'
            label='Ingrese la referencia del producto'
            rules={rules.referencia}
            hasFeedback
         >
            <Input size="small" style={{ width: '450px' }}/>
         </Form.Item>
         <Form.Item 
            name='cantidad'
            label='Ingrese la cantidad del producto'
            rules={rules.cantidad}
            className='ml-4'
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} className='ml-4'/>
         </Form.Item>
        </Row>

        <Row>
         <Form.Item 
            name='NF'
            label='Numero de filas'
            rules={rules.NF}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} />
         </Form.Item>
         <Form.Item 
            name='paso'
            label='paso'
            rules={rules.paso}
            className='ml-4'
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} className='ml-4'/>
         </Form.Item>
        </Row>

        <Row>
         <Form.Item 
            name='anchoTubo'
            label='anchoTubo'
            rules={rules.anchoTubo}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} />
         </Form.Item>
         <Form.Item 
            name='cantidadTubo'
            label='cantidadTubo'
            rules={rules.cantidadTubo}
            className='ml-4'
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} className='ml-4'/>
         </Form.Item>
        </Row>

        <Row>
         <Form.Item 
            name='longitudTubo'
            label='longitudTubo'
            rules={rules.longitudTubo}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }}/>
         </Form.Item>
         <Form.Item 
            name='anchoAleta'
            label='anchoAleta'
            rules={rules.anchoAleta}
            className='ml-4'
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} className='ml-4'/>
         </Form.Item>
        </Row>

        <Row>
         <Form.Item 
            name='cantidadAleta'
            label='cantidadAleta'
            rules={rules.cantidadAleta}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} />
         </Form.Item>
         <Form.Item 
            name='longitudAleta'
            label='longitudAleta'
            rules={rules.longitudAleta}
            className='ml-4'
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '450px' }} className='ml-4'/>
         </Form.Item>
        </Row>
        
        <Row>
         <Form.Item 
            name='PC'
            label='PC'
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
            style={{ width: '450px' }}
          />
         </Form.Item>
         <Form.Item 
            name='UES_Colectores'
            label='UES_Colectores'
            rules={rules.UES_Colectores}
            hasFeedback
         >
            <Input size="small" style={{ width: '450px' }} className='ml-2'/>
         </Form.Item>
        </Row>
         <Form.Item 
            name='observaciones'
            label='observaciones'
            rules={rules.observaciones}
            hasFeedback
         >
            <Input size="small" />
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