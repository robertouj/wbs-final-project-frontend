import { Link, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import Personal from "./Personal"
import Bio from "./Bio"
import Skills from "./Skills"
import Schedule from "./Schedule"
import Wallet from "./Wallet"

const BreadCrumbNav = () =>
{
    return (
        <>
            <Container className="my-5 py-5" >
                <Row >
                    <Col lg={{ span: 12, offset: 4 }}
                        md={{ span: 12, offset: 3 }}
                        sm={{ span: 12, offset: 1 }}
                        xs={{ span: 12, offset: 1 }}>
                        <Breadcrumb >

                            <Breadcrumb.Item ><Link to='/profile/personal'>Personal-details</Link></Breadcrumb.Item>
                            <Breadcrumb.Item ><Link to="/profile/bio">Bio</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to="/profile/skills">Skills</Link></Breadcrumb.Item>
                            <Breadcrumb.Item ><Link to="/profile/schedule">Schedules</Link></Breadcrumb.Item>
                            <Breadcrumb.Item ><Link to="/profile/wallet">Wallet</Link></Breadcrumb.Item>


                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
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
                    <Schedule />

                </Route>
                <Route path="/profile/Wallet">
                    <Wallet />

                </Route>                
            </Switch>
        </>);
}

export default BreadCrumbNav;