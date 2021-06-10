import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Cal from './SimpleCalendar'

export default function Schedule()
{
    return (
        <div style={{ marginLeft: '3.8rem' }}>
            <Container >

                <Row >


                    <Col
                        xl={{ span: 10, offset: 4 }}
                        lg={{ span: 10, offset: 3 }}
                        md={{ span: 10, offset: 2 }}
                        sm={{ span: 8 }}
                        xs={{ span: 1 }}
                    >
                        <Cal />
                    </Col>

                </Row>
            </Container>
        </div>

    )
}


