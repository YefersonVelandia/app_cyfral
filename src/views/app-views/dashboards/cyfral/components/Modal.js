import React, { useState } from 'react'
import { Card, Modal, Row } from "antd";


const ModalOrden = (props) => {
  console.log("DATOS DEL MODAL: ", props);

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal title="Orden de producción" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  )
}

export default ModalOrden