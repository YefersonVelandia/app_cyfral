import { Card, Col, Row } from 'antd'
import React from 'react'

const home = () => {
  return (
    <>
      <h1>Tareas de la estación</h1>
      <Row gutter={[8,8]}>
        <Col style={{ width: '50%' }}>
          <Card className='shadow-sm'>
              Tarea Corte
          </Card>
        </Col>
        <Col style={{ width: '50%' }}>
          <Card className='shadow-sm'>
              Tarea Corte
          </Card>
        </Col>
      </Row>
      <Row gutter={[8,8]}>
        <Col style={{ width: '50%' }}>
          <Card className='shadow-sm'>
              Tarea Corte
          </Card>
        </Col>
        <Col style={{ width: '50%' }}>
          <Card className='shadow-sm'>
              Tarea Corte
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default home