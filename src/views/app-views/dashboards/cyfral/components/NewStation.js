import React, {useState} from 'react';
import { Button, Card, Form, Input,  message} from "antd";
import axios from 'axios';
 
const rules = {
    name: [
      {
         required: true,
         message: 'Por favor digite el nombre de la estacion'
      },
      { 
         whitespace: true,
         message: 'Nombre de la estacion no puede ser un caracter en blanco'
      },
      {
         min: 3,
         message: 'EL nombre minimo debe tener 3 caracteres'
      }
   ]
}
const NewStation = () => {
    const [submitLoading, setSubmitLoading] = useState(false)


    const formSuccess = async( datos) => {
        setSubmitLoading(true)
      try {
         const url = 'https://cyfral.herokuapp.com/api/stations';
         const resp = await axios.post(url, datos ,{      
            headers: {
              'x-token': localStorage.getItem('x-token')
            }
         })
         console.log(resp);
         setSubmitLoading(false)
         message.success({ content: 'Estacion creada correctamente!', duration: 2 })
         document.getElementById("miformulario").reset();
      }catch (error) {
         console.error("Error: ", {error});
         message.error('Error al estacion', 4);
         setSubmitLoading(false)
      }
   }
    const formFailed = (datos) => { console.log(datos);}
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
                name='station' 
                label='Nombre de la estacion' 
                rules={rules.name}
                hasFeedback
                >
                <Input size='small' />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" block loading={submitLoading}>
                    Crear estacion
                </Button>
                </Form.Item>
            
            </Form>
        </Card>
    )
}

export default NewStation