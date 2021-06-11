import {
  InputGroup,
  Button,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { ObjectID } from "bson";

import React, { useRef } from "react";

export default function AddSkill({ text, setText, newSkills, setNewSkills }) {
  const searchInput = useRef();
  const listenHandler = (i) => {
    setText(i.target.value);
  };

  // const enterHandler = (e) => {
  //   if (e.key === "Enter" && e.target.value) {
  //     e.preventDefault();
  //     setNewSkills([
  //       ...newSkills,
  //       {
  //         text,
  //         id: Math.random() * 1000,
  //       },
  //     ]);
  //     setText("");
  //   }
  // };

  const enterHandler = (e) => {
    if (e.key === "Enter" && e.target.value) {
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
    }
  };

  const clickHandler = (e) => {
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
  };
  // console.log(skills)
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
              // onChange={listenHandler}
              onKeyPress={enterHandler}
              type="text"
              // value={text}
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
