import React from 'react'
import { useState } from 'react';
import AddSkill from './skills-comps/AddSkill'
import SkillsList from './skills-comps/SkillsList'
import { Col, Container, Row } from 'react-bootstrap';
import "../profile/skills-comps/Skill.css"

export default function Skills({ skills })
{


  const [newSkills, setNewSkills] = useState([]);
  const [name, setName] = useState([]);


  console.log(newSkills)


 2
  return (
    <>
      <h1>Skills</h1>
      <h3>bla bla bla</h3>

      <Container >
        <Row >

          <Col className="d-flex justify-content-center">
            <AddSkill
              text={name}
              setText={setName}
              newSkills={newSkills}
              setNewSkills={setNewSkills}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SkillsList skills={skills} newSkills={newSkills} />
          </Col>
        </Row>
      </Container>


    </>
  )
}
