import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import React, { Fragment } from 'react'
import { BsCalendar } from 'react-icons/bs';
import Cal from '../profile/SimpleCalendar';

function MyVerticallyCenteredModal(props)
{
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row >
                        <Col lg={{ offset: 4 }}>
                            <h4 className="ms-3">Centered Modal</h4>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={{ offset: 3 }}>
                            <Cal />
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default function Modals()
{

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                <BsCalendar />
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

    )
}
