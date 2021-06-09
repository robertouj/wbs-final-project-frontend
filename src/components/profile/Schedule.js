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
                        xl={{ span: 12, offset: 4 }}
                        lg={{ span: 12, offset: 4 }}
                        md={{ span: 12, offset: 3 }}
                        sm={{ span: 12, offset: 1 }}
                        xs={{ span: 12, offset: 1 }}
                    >
                        <Cal />
                    </Col>

                </Row>
            </Container>
        </div>

    )
}


