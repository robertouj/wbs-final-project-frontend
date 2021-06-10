import { Link, Switch, Route } from 'react-router-dom'
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Personal from "./Personal"
import Bio from "./Bio"
import Skills from "./Skills"
import Schedule from "./Schedule"
import Wallet from "./Wallet"
import "./BreadCrumNav.css"

const BreadCrumbNav = ({ me }) =>
{

  return (
    <>
      <Container className="my-5 py-5 ">
        <Row>
          <Col

          >
            <Nav fill variant="tabs" className="miniNav">
              <Nav.Item>
                <Nav.Link ><Link to="/profile/personal">Personal-details</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1"><Link to="/profile/bio" >Bio</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"><Link to="/profile/skills">Skills</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3"><Link to="/profile/schedule">Schedules</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4"><Link to="/profile/wallet">Wallet</Link></Nav.Link>
              </Nav.Item>
            </Nav>

          </Col>
        </Row>
        <Row>
          <Col className="justify-content-center mt-5">
            <Switch>
              <Route path="/profile/Personal">
                <Personal />
              </Route>
              <Route path="/profile/Bio">
                <Bio text={me.bio} />
              </Route>
              <Route path="/profile/Skills">
                <Skills skills={me.skills} />

              </Route>
              <Route path="/profile/Schedule">
                <Button

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
      </Container>

    </>);
}

export default BreadCrumbNav;

