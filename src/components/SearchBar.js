import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap/';
import { FaSearch } from 'react-icons/fa'
import CardList from './Cards/CardList'

const APIURL = 'https://wbs-final-json-api.herokuapp.com/';

export default function SearchBar()
{


    const [searchQuery, setSearchQuery] = useState('');


    const [mentors, setMentors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const onSearch = (text) =>
    {
        setIsLoading(true)
        fetch(`${ APIURL }users/skills/${ text }`)
            .then(res => res.json())
            .then(json =>
            {
                setMentors(json.data);
                setIsLoading(false);

            })
            .catch(() => console.log("request failed "))
    }


    const search = () =>
    {
        onSearch(searchQuery)
        setSearchQuery('')
    }

    const searchHandler = (e) =>
    {
        setSearchQuery(e.target.value.toLowerCase());
        // console.log(setResults);
    }

    const handelEnter = e =>
    {

        if (e.key === 'Enter') {
            e.preventDefault();
            search()
        }

    }
    const clickHandler = (j) =>
    {
        j.preventDefault();
        search()
    }


    return (
        <div >

            <Container fluid style={{ marginTop: '5rem' }} >
                <Row style={{ textAlign: 'center' }}>

                    <Col


                    >
                        <h2 style={{ color: '#f98404' }}>what do you want to learn?</h2>
                        <form >
                            <input
                                value={searchQuery}
                                type="text"
                                onChange={searchHandler}
                                onKeyPress={handelEnter}
                                placeholder="type a skill..."
                                style={{ height: '2.6rem', width: '20rem', marginTop: '2px' }}
                            />
                            <Button
                                style={{ height: '2.6rem', marginBottom: '5px', backgroundColor: '#f98404', borderRadius: 'none' }}
                                type="submit"

                                onClick={clickHandler}

                            ><FaSearch style={{ marginBottom: '4' }} /></Button>
                        </form>
                    </Col>

                </Row>
                <Row>
                    <Col className='mx-auto my-5'>
                        <CardList mentors={mentors} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

