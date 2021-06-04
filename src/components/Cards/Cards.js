import React from 'react'
import { Card } from 'react-bootstrap';

export default function Cards({ title }) {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="mx-auto mt-4">
                <Card.Img variant="top" src={'https://picsum.photos/200/300'} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}


