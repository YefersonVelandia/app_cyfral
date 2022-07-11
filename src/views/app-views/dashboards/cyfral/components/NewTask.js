import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, message, Card } from "antd";
import axios from 'axios';
const { Option } = Select;

const rules = {
    name: [
       {
          required: true,
          message: 'Por favor digite el nombre de la tarea'
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
    estacion: [
       {
          required: true,
          message: 'Selecciona una estación'
       }
    ],
    zona: [
       {
          required: true,
          message: 'Seleccione una zona'
       }
    ],
    operarios: [
        {
            required: true,
            message: 'Seleccione los operarios que pueden realizar esa tarea'
        }
    ]
 }

const NewTask = () => {
   const [submitLoading, setSubmitLoading] = useState(false)
   const [estaciones, setEstaciones] = useState([]);
   const [zone, setZone] = useState([]);
   const [usuarios, setUsuarios] = useState([]);

   const getEstaciones = async () => {
      const url = 'https://cyfral.herokuapp.com/api/stations';
      try {
         const resp = await axios.get(url,{      
            headers: {
               'x-token': localStorage.getItem('x-token') 
            }
         })
        setEstaciones(...estaciones, await resp.data.station)
        console.log(estaciones);
      } catch (error) {
       console.log(error);     
      }
   }

   const getZone = async () => {
      const url = 'https://cyfral.herokuapp.com/api/zones';
      try{
         const resp = await axios.get(url,{      
            headers: {
                'x-token': localStorage.getItem('x-token')
            }
         })
         setZone(...zone, await resp.data.zone)
      }catch (error) {
         console.log(error);     
      }
   }

   const getUsers = async () =>{
      const url = 'https://cyfral.herokuapp.com/api/users/operator';
      try {
         const resp = await axios.get(url,{      
            headers: {
               'x-token': localStorage.getItem('x-token')    
            }
         })
         console.log(resp);
         setUsuarios(...usuarios, await resp.data.operator);
         // users.push(await resp.data.users)
      } catch (error) {
      console.log(error);     
      }
   }

   const formSuccess = async (datos) => {
      setSubmitLoading(true)
      try {
         const url = 'https://cyfral.herokuapp.com/api/tasks';
         const resp = await axios.post(url, datos ,{      
            headers: {
              'x-token': localStorage.getItem('x-token')
            }
         })
            console.log(resp);
            setSubmitLoading(false)
            message.success({ content: 'Tarea creada correctamente!', duration: 3 })
            document.getElementById("miformulario").reset();
      }catch (error) {
         console.error("Error: ", {error});
         message.error('Error al crear usuario', 4);
         setSubmitLoading(false)
      }
   }
     
   const formFailed = (error) => {
        console.log(error);
   }

   useEffect(() => {
     getEstaciones();
     getZone();
     getUsers();
   }, [])
   
    return (
    <Card>
        <Form
            id='miformulario'
            layout="vertical" 
            name="register-form" 
            onFinish={formSuccess}
				onFinishFailed={formFailed}
         >
            <Form.Item 
               name='name' 
               label='Nombre de la tarea' 
               rules={rules.name}
               hasFeedback
            >
               <Input size='small' />
            </Form.Item>

            <Form.Item 
               name='station' 
               label='Seleccione una estacion' 
               rules={rules.estacion}
               hasFeedback
            >
               <Select
                 showSearch
                 placeholder="Selecciona una estación"
               >
               { estaciones.map((estacion) => (
                     <Option key={estacion.uid} value={estacion.uid}>
                        {estacion.station}
                     </Option>
                  ))
               }
            </Select>

            </Form.Item>

            <Form.Item 
               name='zone' 
               label='Seleccione una zona' 
               rules={rules.zona}
               hasFeedback
            >
               <Select
                    showSearch
                    placeholder="Selecciona una zona"
               >
                  {zone.map((zon) => {
                     return(
                        <Option key={zon.uid} value={zon.uid}>
                           {zon.zone}
                        </Option>
                     );
                   })
                  }
                </Select>
            </Form.Item>

            <Form.Item 
               name='operarios' 
               label='Seleccione los operarios que pueden realizar esa tarea' 
               rules={rules.operarios}
               hasFeedback
            >

                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Seleccione"
               >
                        { usuarios.map((usuario) => {
                           return(
                                 <Option key={usuario.uid} value={usuario.uid}>
                                    {usuario.name}
                                 </Option>
                              );
                           })
                        }
                    {}
                </Select>
            </Form.Item>

            <Form.Item>
               <Button type="primary" htmlType="submit" block loading={submitLoading}>
                  Crear tarea
               </Button>
            </Form.Item>
        
         </Form>
    </Card>
   )
}

export default  NewTask