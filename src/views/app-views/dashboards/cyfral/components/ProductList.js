import { Card, Col, Row } from 'antd';
import axios from 'axios';
import Loading from 'components/shared-components/Loading';
import React, { useEffect, useState } from 'react'

const ProductList = () => {

  const [product, setProduct] = useState([])
  const [data, setData] = useState(false);
  const getProducts = async () =>{
    const url = 'https://cyfral.herokuapp.com/api/products';
    try {
      const resp = await axios.get(url,{      
        headers: {
          'x-token': localStorage.getItem('x-token')
        }
      })
      setProduct(resp.data.product);
      setData(true)
    } catch (error) {
     console.log(error);     
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <>
      <Card className='shadow-lg'>
        <h2 className='text-center'>Lista de productos</h2>
        {
          data ?
            <Row style={{ width: '100%' }} >
              {
                product.map( p => (
                  <Card key={p.uid} className='m-1 shadow-sm' style={{ width: 320 }} >
                        <p><strong>Producto: </strong> {p.name} </p>
                        <p><strong>Prefijo: </strong>{p.prefijo} </p>
                    </Card>
                  ))
              }
            </Row>                           
          : <Loading />
        }
      </Card>
    </>
  )
}

export default ProductList