import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Col } from 'react-bootstrap/';
import { useState } from 'react';



export default function SearchBar({ onSearch }) {
   
   
    const [results, setResults] = useState('');

    const searchHandler = (e) =>
    {
        setResults(e.target.value.toLowerCase());
        // console.log(setResults);
    }

    const handelEnter = e =>
    {
        if (e.key === 'Enter') {
            onSearch(results)
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3} className="mx-auto">
                        <Form.Control
                            className="ps-3"
                            type="text"
                            placeholder="Search..."
                            onChange={searchHandler}
                            onKeyPress={handelEnter}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

