import React, { useEffect, useState } from 'react';
import { message } from "antd";
import axios from 'axios';

const ListProcesses = () => {

  const [procesos, setProcesos] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false)

  const getProcesos = async () => {

    const url = 'https://cyfral.herokuapp.com/api/products';
    try {
        const resp = await axios.get(url,{      
          headers: {
              'x-token': localStorage.getItem('x-token')
          }
        })
        setProcesos(...procesos, resp.data)
        console.log(resp.data);
    } catch (error) {
      console.log(error);     
    }
  }

  useEffect(() => {
    getProcesos()
  },[])
  return (
    <div>ListProcesses</div>
  )
}

export default ListProcesses