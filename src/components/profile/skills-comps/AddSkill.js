import { InputGroup, Button, FormControl, Container, Row, Col } from "react-bootstrap";



const AddSkill = ({ text, setText, skills, setSkills }) =>
{

    const listenHandler = (i) =>
    {
        setText(i.target.value)

    }

    const enterHandler = (e) =>
    {
        if (e.key === 'Enter') {
            setSkills([
                ...skills,
                {
                    text,
                    id: Math.random() * 1000
                }
            ])
        }


    }
    const clickHandler = (j) =>
    {

        setSkills([
            ...skills,
            {
                text,
                id: Math.random() * 1000
            }
        ])

    }
    console.log(skills)
    return (
        <>
            <Container>
                <Row>
                    <Col xl={{ span: 3, offset: 4 }}>
                        <InputGroup className="mb-3" onChange={listenHandler} onKeyPress={enterHandler}>
                            <InputGroup.Prepend>
                                <Button variant="outline-secondary" onClick={clickHandler}>Add Skill</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" />
                        </InputGroup>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default AddSkill;