import React from 'react'
import { useState } from 'react';
import AddSkill from './skills-comps/AddSkill'
import SkillsList from './skills-comps/SkillsList'
import { Col, Container, Row } from 'react-bootstrap';
import "../profile/skills-comps/Skill.css"

const fakeSkills = [
  {
    _id: "60be5aa03e9bbcd950a171c5",
    name: "React",
  },
  {
    _id: "60be5a8f3e9bbcd950a171c4",
    name: "JavaScript",
  },
  {
    _id: "60be5aad3e9bbcd950a171c6",
    name: "Piano",
  },
  {
    _id: "60c240c7ded44e002c638f79",
    name: "Hand Stand",
  },
  {
    _id: "60c240e4ded44e002c638f7a",
    name: "Parkour",
  },
  {
    _id: "60c24114ded44e002c638f7c",
    name: "Arabic",
  },
  {
    _id: "60c240faded44e002c638f7b",
    name: "NodeJS",
  },
  {
    _id: "60c24a15ded44e002c638f80",
    name: "Git",
  },
  {
    _id: "60c24132ded44e002c638f7e",
    name: "German",
  },
  {
    _id: "60c24b6803e4e669a73cef53",
    name: "Console",
  },
  {
    _id: "60c24b9003e4e669a73cef55",
    name: "Greek",
  },
  {
    _id: "60c24a2fded44e002c638f81",
    name: "Dota2",
  },
  {
    _id: "60c24f2d03e4e669a73cef56",
    name: "Barrel Rider",
  },
  {
    _id: "60c24b7303e4e669a73cef54",
    name: "CSS",
  },
  {
    _id: "60c2412aded44e002c638f7d",
    name: "English",
  }
];

export default function Skills({ skills, me })
{


  const [newSkills, setNewSkills] = useState(fakeSkills);
  const [name, setName] = useState([]);


  //console.log(skills)

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Skills</h1>
      <h3 style={{ textAlign: 'center' }}>bla bla bla</h3>

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
            <SkillsList me={me} newSkills={newSkills} setNewSkills={setNewSkills} />
          </Col>
        </Row>
      </Container>


    </>
  )
}
