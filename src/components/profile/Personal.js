import React, { useContext, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { ProfileContext } from "../../ProfileContext";
import "./Personal.css";

export default function Personal() {
  const { user, handleChange, formData } = useContext(ProfileContext);
  //console.log(formData);

  return (
    <>
      {formData === undefined ? (
        "Is loading..."
      ) : (
        <>
          <h1 className="personal--title" style={{ textAlign: "center" }}>
            About me
          </h1>

          <Container className="personal--container">
            <h3>Account details</h3>
            <p>Fill the information related to your user profile.</p>
            <Row>
              <Col xs={2}>
                <Row>
                  <Image
                    className="personal--img"
                    src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg"
                  />
                </Row>
              </Col>
              <Col xs={5}>
                <div className="control">
                  <label for="foro">Your avatar (disabled)</label>
                  <input
                    type="file"
                    className="name"
                    required
                    placeholder="send a photo..."
                    onChange={handleChange}
                    disabled
                  />
                  <label for="name">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="name"
                    required
                    placeholder="Fill your name to show..."
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="control">
                  <label for="name">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="email"
                    required
                    placeholder="Fill your email me@myhost.com..."
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="control">
                  <label for="password">Change the Password</label>
                  <input
                    type="password"
                    name="password"
                    className="password"
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
                <h3>Bio</h3>
                <p>
                  Other people want to know your motivations, your inspirations,
                  what you can offer to do the world a better place. Feel free
                  to share that you want, or simply say hello. ;)
                </p>
                <div className="control">
                  <label for="name">Tell your own story</label>
                  <textarea
                    name="bio"
                    className="email"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </Row>

            <div className="actions">
              <button>save</button>
            </div>
          </Container>
        </>
      )}
    </>
  );
}