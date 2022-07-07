import React, {useState} from 'react';
import axios from 'axios';
import { Button, Card, Form, Input,  message} from "antd";
import Loading from 'views/app-views/components/data-display/card/Loading';

const rules = {
    name: [
        {
            required: true,
            message: 'Por favor digite el nombre del producto'
        },
        { 
            whitespace: true,
            message: 'Nombre del producto no puede ser un caracter en blanco'
        },
        {
            min: 3,
            message: 'EL nombre minimo debe tener 3 caracteres'
        }
    ],
    prefijo: [
        {
            required: true,
            message: 'Por favor digite el prefijo del producto'
        },
        { 
            whitespace: true,
            message: 'prefijo del producto no puede ser un caracter en blanco'
        },
        {
            min: 1,
            message: 'EL prefijo minimo debe tener 1 caracter'
        }
    ]
}
const NewProduct = () => {
    const [data, setData] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const formSuccess = async( datos) => {
        setSubmitLoading(true)
        try {
            const url = 'https://cyfral.herokuapp.com/api/products';
            const resp = await axios.post(url, datos ,{      
                headers: {
                    'x-token': localStorage.getItem('x-token')
                }
            })
            console.log(resp);
            setSubmitLoading(false)
            message.success({ content: 'Producto creado correctamente!', duration: 2 });
            document.getElementById("miformulario").reset();
            
        } catch (error) {
            console.error("Error: ", {error});
            message.error('Error al crear zona', 4);
            setSubmitLoading(false)
        }
    }
    const formFailed = (datos) => { console.log(datos);}
    return (

        <>
        { data ? Loading : 
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
                        label='Nombre del producto' 
                        rules={rules.name}
                        hasFeedback
                    >
                        <Input size='small' />
                    </Form.Item>
                    <Form.Item 
                        name='prefijo' 
                        label='Prefijo del producto' 
                        rules={rules.prefijo}
                        hasFeedback
                    >
                        <Input size='small' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={submitLoading}>
                            Crear Producto
                        </Button>
                    </Form.Item>
                
                </Form>
            </Card>
        }
        </>
    )
}

export default NewProduct