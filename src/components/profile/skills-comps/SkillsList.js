import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skill from "./Skill";



const SkillsList = ({ me, newSkills,  setNewSkills }) => {
  // console.log(skills)
  // let skillsData = [];

  // if (skills) {
  //   skillsData = skills;
  // }
  // let newskillsData = [];

  // if (newSkills) {
  //   newskillsData = newSkills;
  // }
  // console.log(skillsData)
  //console.log(newSkills)

  console.log(me);
  return (
    <>
      {/* rgba(12, 22, 74, .3) */}
      {/* rgb(18,93,152) */}
      <div
        style={{
          backgroundColor: "rgb(18,93,152,0.6)",
          padding: "1rem",
          boxShadow: "5px 3px 15px rgb(0, 0, 0)",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h2 className="my-3" style={{ textAlign: "center" }}>
                My Skills
              </h2>
            </Col>
          </Row>
          <Row>
            {newSkills.map((skill, index) => (
              <>
                <Col>
                  <Skill me={me} skill={skill} newSkills={newSkills} setNewSkills={setNewSkills} key={index} />{" "}
                </Col>
              </>
            ))}

            {/* {newskillsData.map((i) => (
              <>
                <Col>
                  <Skill skills={i.text} key={i._id} />{" "}
                </Col>
              </>
            ))} */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SkillsList;

/*
60be54163e9bbcd950a171c2
60be60453e9bbcd950a171c7
*/
