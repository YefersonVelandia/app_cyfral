import React, { useEffect, useState } from 'react';
import { Button, Form, Select, message, Card } from "antd";
import axios from 'axios';
const { Option } = Select;

const rules = {
   producto: [
      {
         required: true,
         message: 'Selecciona una producto'
      }
   ],
   task: [
      {
         required: true,
         message: 'Selecciona una tarea'
      }
   ],
}
const NewProcese = () => {
   const [submitLoading, setSubmitLoading] = useState(false)
   const [task, setTask] = useState([]);
   const [listProduct, setListProduct] = useState([]);
   const tasks = [];

   const getTasks = async () => {
      const url = 'https://cyfral.herokuapp.com/api/tasks';
      try {
         const resp = await axios.get(url,{      
            headers: {
               'x-token': localStorage.getItem('x-token')
            }
         })
         setTask(...task, resp.data.tasks)
      } catch (error) {
       console.log(error);     
      }
   } 

   const getProducts = async () => {
      const url = 'https://cyfral.herokuapp.com/api/products';
      try {
         const resp = await axios.get(url,{      
            headers: {
               'x-token': localStorage.getItem('x-token')
            }
         })
         setListProduct(...listProduct, resp.data.product)
         console.log(resp.data.product);
      } catch (error) {
       console.log(error);     
      }
   } 

   useEffect(() => {
         getTasks();
         getProducts();
   }, [])

   const formSuccess = async ({product, task}) => {
      setSubmitLoading(true)
      try {
         const url = 'https://cyfral.herokuapp.com/api/processes';
         const resp = await axios.post(url, {
            product: product,
            tasks: [{task}]
          },{      
            headers: {
              'x-token': localStorage.getItem('x-token')
            }
         })
            console.log(resp);
            setSubmitLoading(false)
            message.success({ content: '¡Proceso creado correctamente!', duration: 3 })
            document.getElementById("miformulario").reset();
      }catch (error) {
         console.error("Error: ", error);
         message.error('Error al crear proceso', 4);
         setSubmitLoading(false)
      }
   }
     
   const formFailed = (error) => {
        console.log(error);
   }

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
               name='product' 
               label='Seleccione un producto' 
               rules={rules.producto}
               hasFeedback
            >
               <Select
                 showSearch
                 placeholder="Seleccione un producto"
               >
               { listProduct.map((producto) => {
                    return(
                        <Option key={producto.uid} value={producto.uid}>
                           {producto.name} ( {producto.prefijo} )
                        </Option>
                     );
                  })
               }
            </Select>

            </Form.Item>

            <Form.Item 
               name='task' 
               label='Seleccione las tareas que componen el proceso' 
               rules={rules.task}
               hasFeedback
            >

                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Seleccione tareas"
               >
                        {  task.map((task) => {
                              return(
                                 <Option key={task.uid} value={task.uid}>
                                    {task.name}
                                 </Option>
                              );
                           })
                        }
                    {}
                </Select>
            </Form.Item>

            <Form.Item>
               <Button type="primary" htmlType="submit" block loading={submitLoading}>
                  Crear Proceso
               </Button>
            </Form.Item>
        
         </Form>
      </Card>
   )
}

export default NewProcese