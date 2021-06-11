import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./Personal.css"

export default function Personal()
{
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>About me</h1>
      <Container className="personal--container">
        <Row>
          <Col className="d-flex justify-content-center">
            {/* <p>Fill the information related to your user profile.</p> */}
            <form>
              <div className="control">
                <h3>Account details</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, asperiores.</p>
                <label for="foro">Your avatar</label>
                <Image className="personal--img" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg" />
                <input
                  type="file"
                  className="name"
                  required
                  placeholder="send a photo..."
                />
                <label for="name">Username</label>
                <input
                  type="text"
                  className="name"
                  required
                  placeholder="Fill your name to show..."
                  value="John Doe"
                />
              </div>
              <div className="control">
                <label for="name">Email</label>
                <input
                  type="email"
                  className="email"
                  required
                  placeholder="Fill your email me@myhost.com..."
                  value="john-doe1982@gemilio.bit"
                />
              </div>
              <h3>Bio</h3>
              <p className="personal--bio">
                Other people want to know your motivations, your inspirations,
                what you can offer to do the world a better place. Feel free to
                share that you want, or simply say hello. ;)
              </p>
              <div className="control">
                <label for="name">Tell your own story</label>
                <textarea
                  className="email "
                  value="To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. "
                />
              </div>
              <div className="actions">
                <button>save</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
