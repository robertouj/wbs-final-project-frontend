import React from 'react'
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import { RiDeleteBin2Line } from 'react-icons/ri'
import "./Skill.css"

export default function Skill({ skills })
{

    // console.log(skills)
    return (
        <Container  className="skill--test">
            <Col className={"my-3 "} >
                <div 

                >

                    <p style={{
                        
                        textAlign: 'center',
                        fontWeight: '640',
                        marginBottom: 0,
                        color: '#c449c2',
                        fontSize: '1.5rem'
                    }}>
                        {`#${ skills }`}

                    </p>
                </div>
                
                    <div style={{ textAlign: 'center' }}>
                        <Button style={{ backgroundColor: '#b6c9f0'  }}>  <RiDeleteBin2Line />   </Button>
                    </div>
                

            </Col>
        </Container>
    )
}
