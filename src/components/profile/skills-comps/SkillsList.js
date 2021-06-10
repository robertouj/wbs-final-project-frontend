import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skill from './Skill';





const SkillsList = ({ skills, newSkills }) =>
{
    // console.log(skills)
    let skillsData = [];

    if (skills) {
        skillsData = skills;

    } let newskillsData = [];

    if (newSkills) {
        newskillsData = newSkills;

    }
    // console.log(skillsData)
    console.log(newSkills)
    return (
        <>

            <div style={{ backgroundColor: "lightsteelblue", padding: '1rem' }}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="my-3" style={{ textAlign: "center" }}>
                                My Skills
                        </h2>
                        </Col>

                    </Row>
                    <Row>


                        {skillsData.map(i =>
                        (
                            <>
                                <Col ><Skill skills={i.name} key={i._id} /> </Col>
                            </>
                        ))}

                        {newskillsData.map(i =>
                        (
                            <>
                                <Col ><Skill skills={i.text} key={i._id} /> </Col>
                            </>
                        ))}

                    </Row>





                </Container>
            </div>
        </>
    );
}

export default SkillsList;




/*
60be54163e9bbcd950a171c2
60be60453e9bbcd950a171c7
*/