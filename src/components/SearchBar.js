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
        <div style={{ width: '100%' }}>

            <Container style={{ marginTop: '5rem' }}>
                <Row >
                    <h2 style={{ marginLeft: '1rem' }}>what do you want to learn?</h2>
                    <Col

                        md={{ span: 6 }}
                        sm={{ span: 10 }}
                        className="ms-3">

                        <form  >
                            <input
                                value={searchQuery}
                                type="text"
                                onChange={searchHandler}
                                onKeyPress={handelEnter}
                                placeholder="type a skill..."
                                style={{ height: '2.5rem', width: '15rem' }}
                            />
                            <Button
                                style={{ height: '2.5rem', marginBottom: '4px' }}
                                type="submit"

                                onClick={clickHandler}

                            ><FaSearch style={{ marginBottom: '4' }} /></Button>
                        </form>
                    </Col>

                </Row>
                <Row>
                    <Col className='mx-auto'>
                        <CardList mentors={mentors} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

