import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap/';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'


export default function SearchBar({ onSearch })
{


    const [results, setResults] = useState('');

    const searchHandler = (e) =>
    {
        setResults(e.target.value.toLowerCase());
        // console.log(setResults);
    }

    const handelEnter = e =>
    {
        e.preventDefault();
        if (e.key === 'Enter') {
            onSearch(results)
            setResults('')
        }

    }
    const clickHandler = (j) =>
    {
        j.preventDefault();
        onSearch(results)
        setResults('')
    }
    return (
        <div>

            <Container className={'float-start   '} style={{ marginTop: '5rem' }}>
                <Row>
                    <h2 style={{ marginLeft: '1rem' }}>what do you want to learn?</h2>
                    <Col

                        md={{ span: 6 }}
                        sm={{ span: 10 }}
                        className="ms-3">

                        <form  >
                            <input
                                value={results}
                                type="text"
                                onChange={searchHandler}
                                placeholder="type a skill..."
                                style={{ height: '2.5rem', width: '15rem' }}
                            />
                            <Button
                                style={{ height: '2.5rem', marginBottom: '4px' }}
                                type="submit"
                                onKeyPress={handelEnter}
                                onClick={clickHandler}

                            ><FaSearch style={{ marginBottom: '4' }} /></Button>
                        </form>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

