import { Link, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Personal from "./Personal";
import Skills from "./Skills";
import Schedule from "./Schedule";
import Wallet from "./Wallet";
import "./BreadCrumNav.css";

const BreadCrumbNav = ({ me }) =>
{


  const clickHandler = (i) =>
  {
    console.log(i)
  }
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
                  <Link
                    to="/profile/about-me"
                    style={{ textDecoration: "none", color: "#3f3697" }}
                    defaultActiveKey="/home"
                  >
                    About me
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <Link
                    to="/profile/skills"
                    style={{ textDecoration: "none", color: "#3f3697" }}
                  >
                    My Skills
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <Link
                    to="/profile/schedule"
                    style={{ textDecoration: "none", color: "#3f3697" }}
                  >
                    My Schedule
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <Link
                    to="/profile/wallet"
                    style={{ textDecoration: "none", color: "#3f3697" }}
                  >
                    TimeCoin Wallet
                  </Link>
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
                <Skills me={me} />
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







// <Row>
// <Col>
// <div className="miniNav">
//   <ul>
//     <li onClick={clickHandler}>
//       <Link
//         to="/profile/about-me"
//         style={{ textDecoration: "none", color: "#3f3697" }}
//         active="false"
//       >
//         About me
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/profile/skills"
//         style={{ textDecoration: "none", color: "#3f3697" }}
//       >
//         My Skills
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/profile/schedule"
//         style={{ textDecoration: "none", color: "#3f3697" }}
//       >
//         My Schedule
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/profile/wallet"
//         style={{ textDecoration: "none", color: "#3f3697" }}
//       >
//         TimeCoin Wallet
//       </Link>
//     </li>
//   </ul>
// </div>
// </Col>
// </Row>