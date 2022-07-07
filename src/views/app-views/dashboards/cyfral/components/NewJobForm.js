import React from 'react'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert, TreeSelect, InputNumber, message, Card } from "antd";
import { motion } from "framer-motion";
import axios from 'axios';

const rules = {
   name: [
      {
         required: true,
         message: 'Por favor complete el campo'
      },
      { 
         whitespace: true,
         message: 'Nombre del operarion no puede ser un caracter en blanco'
      },
      {
         min: 3,
         message: 'EL nombre minimo debe tener 3 caracteres'
      }
   ],
   lastName: [
      {
         required: true,
         message: 'Por favor complete el campo'
      }
   ],
   rol: [
      {
         required: true,
         message: 'Seleccione un rol'
      }
   ],
   document: [
      { 
			required: true,
			message: 'Por favor digita un numero de identificación'
		},
		{ 
			type: 'number',
			message: 'Ingresa un numero de identificación valido!'
		}
   ],
   email: [
		{ 
			required: true,
			message: 'Por favor ingrese un correo electronico'
		},
		{ 
			type: 'email',
			message: 'Ingresa un correo electronico valido!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Por favor ingrese su contraseña'
		},
      {
         min: 6,
         message: 'La contraseña minimo debe tener 6 caracteres'
      }
	],
	confirm: [
		{ 
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

const formSuccess = async (datos) => {
   try {
      const url = 'https://cyfral.herokuapp.com/api/users';
      const resp = await axios.post(url, datos ,{      
         headers: {
            'x-token': localStorage.getItem('x-token')
         }
      })
         message.success({ content: 'Usuario creado correctamente!', duration: 2 });
         document.getElementById("miformulario").reset();
   } catch (error) {
      console.error("Error: ", {error});
      message.error('Error al crear usuario', 4);
   }
}

const formFailed = (error) => {
   console.log(error);
}

const NewJobForm = (props) => {

   const {
           loading,
           message,
           showMessage,
         } = props
  return (
   <Card>
      <motion.div 
         initial={{ opacity: 0, marginBottom: 0 }} 
         animate={{ 
            opacity: showMessage ? 1 : 0,
            marginBottom: showMessage ? 20 : 0 
         }}> 
         <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form 
         id='miformulario'
         layout="vertical" 
         name="register-form" 
         onFinish={formSuccess}
         onFinishFailed={formFailed}
      >
         <Form.Item 
            name='name' 
            label='Nombre del operario' 
            rules={rules.name}
            hasFeedback
         >
            <Input size='small' />
         </Form.Item>

         <Form.Item
            label="Apellido del operario"
            name='lastname'
            rules={rules.lastName}
            hasFeedback
         >
            <Input />

         </Form.Item>

         <Form.Item 
            name='email' 
            label='Correo Electronico' 
            rules={rules.email}
            hasFeedback
         >
            <Input prefix={<MailOutlined className="text-primary" />}/>
         </Form.Item>

         <Form.Item
            name='role'
            label='Seleccione un rol'
            rules={rules.rol}
         >
            <TreeSelect
               treeData={[
                  {
                     title: 'Operario',
                     value: 'operario_role' 
                  },
                  {
                     title: 'Estación',
                     value: 'estacion_role'
                  },
                  {
                     title: 'Reporte',
                     value: 'reporte_role'
                  },
                  {
                     title: 'Admin',
                     value: 'admin_role'
                  }
               ]}
            />

         </Form.Item>
         <Form.Item 
            name="password" 
            label="Password" 
            rules={rules.password}
            hasFeedback
         >
            <Input.Password prefix={<LockOutlined className="text-primary" />}/>
         </Form.Item>
         <Form.Item 
            name='document'
            label='Ingrese el numero de documento del operario'
            rules={rules.document}
            hasFeedback
         >
            <InputNumber size="small" style={{ width: '100%'}} />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
               Registrar
            </Button>
         </Form.Item>
      </Form>
   </Card>
  )
}

export default NewJobForm


