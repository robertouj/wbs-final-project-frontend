import React from 'react'
// import BreadCrumbNav from '../../components/breadcrumb/breadcrumbs';
import { Image, Button, Card } from "react-bootstrap"
import { Fragment } from 'react';

export default function Bio() {
    return (
        <Fragment>
            {/* <BreadCrumbNav />  */}
                      <Card className="mx-auto col-sm-4 text-center shadow-lg"> 
                       {/* style={{ width: '10rem' }}  */}
                       <Image className="mx-auto col-sm-4" style={{ width: '10rem' }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" roundedCircle />
                        <Card.Body>
                            <Card.Title className="text-center">Bio</Card.Title>
                            <Card.Text className="text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatem repudiandae vitae, impedit 
                            explicabo provident blanditiis omnis optio non excepturi et facilis dolor iusto, veniam quam. Non facilis
                             porro deserunt laudantium enim, hic perferendis est eius officiis delectus sint reprehenderit obcaecati, 
                             similique assumenda quia, ducimus vitae numquam. Quam porro, deserunt perferendis velit consequuntur aliquam 
                             possimus est sunt dignissimos minima dolor corrupti accusamus odio sapiente asperiores repudiandae molestiae 
                             nulla suscipit at quod. Sed aut quae error sequi accusamus dolor fugiat rerum deleniti a magnam debitis dicta 
                             quisquam fugit sunt, natus voluptate. Tempore a rem numquam fugiat nam, voluptatum consequatur error voluptates?
                            </Card.Text>
                            <Button className="col-4 " variant="primary">Check Availability</Button>
                        </Card.Body>
                     </Card>
                     
        </Fragment>
    )
}
