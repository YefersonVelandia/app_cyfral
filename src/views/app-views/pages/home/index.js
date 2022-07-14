import { Card, Row } from 'antd'
import React from 'react'

const index = () => {
  return (
    <>
      <h1>Tareas de la estación</h1>
      <Row>
        <Card  style={{ width: '50%' }}>
          Tarea Corte
        </Card>
        <Card  style={{ width: '50%' }}>
          Tarea Corte
        </Card>
      </Row>
    </>
  )
}

export default index