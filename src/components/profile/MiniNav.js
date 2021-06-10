import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import Personal from "./Personal"
import Bio from "./Bio"
import Skills from "./Skills"
import Schedule from "./Schedule"
import Wallet from "./Wallet"


export default function MiniNav()
{

    const NewTab = () =>
    {
        window.open(`/#/sessions/c9f2a12622782`, "_blank");
    };
    return (
        <>
            <div style={{ display: 'flex', }}>
                <div style={{ minWidth: '15rem' }}>
                    <Col>
                        <Row>
                            <Col className="my-3" >
                                <Link to="/profile/personal" style={{ color: '#9482ff' }}>Personal-details</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-3">
                                <Link to="/profile/bio" style={{ color: '#9482ff' }}>Bio</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-3">
                                <Link to="/profile/skills" style={{ color: '#9482ff' }}>Skills</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-3">
                                <Link to="/profile/schedule" style={{ color: '#9482ff' }}>Schedules</Link>
                            </Col >
                        </Row>
                        <Row>
                            <Col className="my-3">
                                <Link to="/profile/wallet" style={{ textDecoration: 'none', color: '#9482ff' }}>Wallet</Link>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Row>
                        <Col lg={{ span: 11 }} className="d-flex align-items-center d-flex justify-content-center">
                            <Switch>

                                <Route path="/profile/Personal">
                                    <Personal />
                                </Route>
                                <Route path="/profile/Bio">
                                    <Bio />
                                </Route>
                                <Route path="/profile/Skills">
                                    <Skills />
                                </Route>
                                <Route path="/profile/Schedule">
                                    <Button
                                        variant="primary"
                                        onClick={NewTab}
                                    >
                                        <i className="bi bi-door-open-fill"></i> Enter room
          </Button>
                                    <Schedule />

                                </Route>
                                <Route path="/profile/Wallet">
                                    <Wallet />

                                </Route>
                                <Route path='/sessions/:room_id'>

                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </div>
                <Container fluid style={{ marginTop: '5rem' }}>

                    <Col className=" justify-content-between" style={{ backgroundColor: '#b6c9f0' }}>

                    </Col>


                </Container>
            </div>
        </>
    )
}

//       </Col >
//     </Row >
//   </Container >
// text={me.bio}
// skills = { me.skills }

