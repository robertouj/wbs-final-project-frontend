import { Button, Container, Row, Col } from "react-bootstrap";
import { ObjectID } from "bson";
import React, { useRef } from "react";

export default function AddSkill({ setText, newSkills, setNewSkills, me }) {
  const searchInput = useRef();

  const addSkill = () => {
    const objectId = new ObjectID();
    console.log(searchInput.current.value);
    setNewSkills([
      ...newSkills,
      {
        name: searchInput.current.value,
        id: objectId,
      },
    ]);
    setText("");
    me.skills = newSkills;
    searchInput.current.value = "";
  };

  const enterHandler = (e) => {
    if (e.key === "Enter" && searchInput.current.value) addSkill();
  };

  const clickHandler = () => {
    if (searchInput.current.value) addSkill();
  };

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col
            className="d-flex justify-content-center"
            style={{
              textAlign: "center",
            }}
          >
            <input
              id="skill"
              name="skill"
              onKeyPress={enterHandler}
              type="text"
              placeholder="type a skill..."
              style={{ height: "2.57rem", width: "220px" }}
              ref={searchInput}
            />
            <Button
              className="bttn"
              onClick={clickHandler}
              onFocus
              style={{
                height: "2.6rem",
                backgroundColor: "rgb(18,93,152,.7)",
                marginBottom: "5px",
              }}
              type="submit"
            >
              ADD
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
