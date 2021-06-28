import React from "react";
import { useState } from "react";
import AddSkill from "./skills-comps/AddSkill";
import SkillsList from "./skills-comps/SkillsList";
import { Col, Container, Row } from "react-bootstrap";
import "../profile/skills-comps/Skill.css";

export default function Skills({ me }) {
  const [newSkills, setNewSkills] = useState(me.skills);
  const [name, setName] = useState([]);

  console.log(newSkills);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Skills</h1>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <AddSkill
              setText={setName}
              newSkills={newSkills}
              setNewSkills={setNewSkills}
              me={me}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SkillsList
              me={me}
              newSkills={newSkills}
              setNewSkills={setNewSkills}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
