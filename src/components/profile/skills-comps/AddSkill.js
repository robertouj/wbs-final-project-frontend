import { InputGroup, Button, FormControl, Container, Row, Col } from "react-bootstrap";



const AddSkill = ({ text, setText, skills, setSkills }) =>
{

    const listenHandler = (i) =>
    {
        setText(i.target.value)

    }



    const enterHandler = (e) =>
    {
        e.preventDefault();
        if (e.key === 'Enter') {
            setSkills([
                ...skills,
                {
                    text,
                    id: Math.random() * 1000
                }
            ])
            setText('');
        }


    }


    const clickHandler = (j) =>
    {
        j.preventDefault();

        setSkills([
            ...skills,
            {
                text,
                id: Math.random() * 1000
            }
        ])
        setText('');
    }
    console.log(skills)
    return (
        <>
            <Container>
                <Row>
                    <Col xl={{ span: 3, offset: 5 }}>
                        <form className="todo-form" >
                            <input
                                id="skill"
                                name="skill"
                                onChange={listenHandler}
                                type="text"
                                value={text}
                                placeholder="type a skill..."

                            />
                            <Button className="bttn" onClick={clickHandler} onKeyPress={enterHandler} type="submit">ADD TO</Button>
                        </form>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default AddSkill;