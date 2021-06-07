
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Skill from './Skill';


const SkillsList = ({ skills, setSkills }) =>
{




    let allSkills = [];

    if (skills) {
        allSkills = skills;
    }

    return (
        <>

            <div style={{ backgroundColor: "lightsteelblue", padding: '1rem 0', margin: '0 20rem' }}>
                <Container>
                    <Row>
                        <h2 className="my-3" style={{ textAlign: "center" }}>
                            My Skills
                        </h2>


                        {allSkills.map(i =>
                        (
                            <>
                                <Skill text={i.text} Key={i.id} setSkills={setSkills} skills={skills} />
                            </>
                        ))}


                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SkillsList;