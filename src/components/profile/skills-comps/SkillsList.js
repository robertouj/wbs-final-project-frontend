import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Skill from './Skill';
import axios from 'axios';


const APIURL = 'https://wbs-final-json-api.herokuapp.com/';

const SkillsList = ({ skills, setSkills }) =>
{

    const [fetchSkills, setFetchSkills] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>
    {
        if (isLoading) {
            axios
                .get(`${ APIURL }skills`)
                .then((response) =>
                {

                    setFetchSkills(response.data)
                    setIsLoading(false)
                })
                .catch((error) =>
                {
                    console.log(error)
                });
        }
    }, [skills, fetchSkills])

    console.log(fetchSkills.data)

    const [users, setUsers] = useState([]);

    useEffect(() =>
    {
        axios
            .get(`https://wbs-final-json-api.herokuapp.com/users`)
            .then((response) =>
            {
                setUsers(response.data);
            })
            .catch((error) =>
            {
                console.log(error)
            })
    }, []);
    console.log(users)
    // 
    let allSkills = [];

    if (skills) {
        allSkills = skills.map(i => i.skills);
    }

    // console.log(allSkills)


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




/*
60be54163e9bbcd950a171c2
60be60453e9bbcd950a171c7
*/