import { Link, Switch, Route } from "react-router-dom";
import { Breadcrumb, Container, Row, Col, Nav } from "react-bootstrap";
import Personal from "./Personal";
import Skills from "./Skills";
import Schedule from "./Schedule";
import Wallet from "./Wallet";
import "./BreadCrumNav.css";

const BreadCrumbNav = ({ me, setMe }) =>
{
  return (
    <>
      <Container className="my-5 py-5 ">
        <Row>
          <Col>
            <Nav
              fill
              variant="tabs"
              defaultActiveKey="/home"
              className="miniNav"
            >
              <Nav.Item>
                <Nav.Link>
                  <Link to="/profile/about-me">about me</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <Link to="/profile/skills">my skills</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <Link to="/profile/schedule">my schedule</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <Link to="/profile/wallet">timeCoin wallet</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col className="justify-content-center mt-5">
            <Switch>
              <Route path="/profile/about-me">
                <Personal />
              </Route>
              <Route path="/profile/skills">
                <Skills skills={me.skills} />
              </Route>
              <Route path="/profile/schedule">
                <Schedule />
              </Route>
              <Route path="/profile/wallet">
                <Wallet />
              </Route>
              <Route path="/sessions/:room_id"></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BreadCrumbNav;
