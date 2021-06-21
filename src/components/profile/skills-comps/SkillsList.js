import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skill from "./Skill";

const SkillsList = ({ me, newSkills, setNewSkills }) => {
  const deleteHandler = (id) => {
    console.log(newSkills);
    setNewSkills(newSkills.filter((skill) => skill._id !== id));
    me.skills = newSkills;
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(233, 185, 210, 0.9)",
          padding: "1rem",
          boxShadow: "3px 3px 8px black",
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
            {newSkills?.map((skill, index) => (
              <>
                <Col>
                  <Skill
                    skill={skill}
                    key={index}
                    deleteHandler={deleteHandler}
                  />{" "}
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SkillsList;
