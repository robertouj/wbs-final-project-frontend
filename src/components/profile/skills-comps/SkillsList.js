import { Container, Row, Col, Form } from 'react-bootstrap';

const SkillsList = ({ skills, setSkills }) =>
{

    let allSkills = [];

    if (skills) {
        allSkills = skills;
    }
    console.log(allSkills)

    return (
        <>
            <h2 className="mb-5" style={{ textAlign: "center" }}>
                My Skills
    </h2>
            <Container>
                <Row>


                    {allSkills.map(i =>
                    (<Col >
                        <div className="mb-4" style={{ border: "solid" }}>
                            {i.text}
                            <Form>
                                <Form.Group controlId="formBasicRange">
                                    <Form.Label>Range</Form.Label>
                                    <Form.Control type="range" />
                                </Form.Group>
                            </Form>
                        </div>

                    </Col>))}


                </Row>
            </Container>
        </>
    );
}

export default SkillsList;