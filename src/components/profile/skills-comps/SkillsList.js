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

            <div style={{ backgroundColor: "lightsteelblue", padding: '1rem 0', margin: '0 20rem' }}>
                <Container>
                    <Row>
                        <h2 className="my-3" style={{ textAlign: "center" }}>
                            My Skills
    </h2>


                        {allSkills.map(i =>
                        (<Col xl={{ span: 2 }} className={"my-3 "}>
                            <div className="mb-4" style={{ backgroundColor: 'white', border: "thin solid", boxShadow: '2px 2px 46px -16px #000000', }}>
                                <p style={{ textAlign: 'center', marginBottom: 0 }}> {i.text} </p>

                                <Row> <div style={{ textAlign: 'center' }}>   <Form>
                                    <Form.Group controlId="formBasicRange" >

                                        <Form.Control type="range" />
                                    </Form.Group>
                                </Form>

                                </div>
                                </Row>
                            </div>

                        </Col>))}


                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SkillsList;