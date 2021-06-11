import React from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./Skill.css";

export default function Skill({ me, skill, newSkills, setNewSkills, deleteHandler }) {
  
  // console.log(skills)
  return (
    <Container className="skill--test">
      <Col className={"my-3 "}>
        
          <p
            style={{
              textAlign: "center",
              fontWeight: "640",
              marginBottom: 0,
              color: "#c449c2",
              fontSize: "1.5rem",
            }}
          >
            {`#${skill.name}`}
          </p>
        

        <div style={{ textAlign: "center" }}>
          <Button style={{ backgroundColor: "transparent", border: 'none'}}  onClick={() => deleteHandler(skill._id)}>
            {" "}
            <RiDeleteBin2Line className="skill--delete" />{" "}
          </Button>
        </div>
      </Col>
    </Container>
  );
}
