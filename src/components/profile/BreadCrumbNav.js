import { Link, Switch, Route } from "react-router-dom";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import Personal from "./Personal";
import Skills from "./Skills";
import Schedule from "./Schedule";
import Wallet from "./Wallet";
import "./BreadCrumNav.css";

const BreadCrumbNav = ({ me, setMe }) => {  
  return (
    <>
      <Container className="my-5 py-5">
        <Row>
          <Col
            lg={{ span: 12, offset: 4 }}
            md={{ span: 12, offset: 3 }}
            sm={{ span: 12, offset: 1 }}
            xs={{ span: 12, offset: 1 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/profile/about-me">about me</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/profile/skills">my skills</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/profile/schedule">my schedule</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/profile/wallet">timeCoin wallet</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <Container className="my-5 py-5">
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
      </Container>
    </>
  );
};

export default BreadCrumbNav;
