import React from 'react'
// import BreadCrumbNav from '../../components/breadcrumb/breadcrumbs';
import { Image, Button, Card } from "react-bootstrap"
import { Fragment } from 'react';

export default function Bio({ text })
{
    return (
        <Fragment>
            {/* <BreadCrumbNav />  */}
            <Card className="mx-auto col-sm-4 text-center shadow-lg">
                {/* style={{ width: '10rem' }}  */}
                <Image className="mx-auto col-sm-4" style={{ width: '10rem' }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" roundedCircle />
                <Card.Body>
                    <Card.Title className="text-center">Bio</Card.Title>
                    <Card.Text className="text-start">
                        {text}
                    </Card.Text>
                    <Button className="col-4 " variant="primary">Check Availability</Button>
                </Card.Body>
            </Card>

        </Fragment>
    )
}
