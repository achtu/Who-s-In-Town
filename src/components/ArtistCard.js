import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ArtistCard({img, name}) {
 
  return (
    <>
        <Card style={{ width: '20rem', margin:"10px"}}>
      <Card.Img variant="top" src={img} alt="maroon"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
     
      </Card.Body>
      <ListGroup variant="flush">
      <ListGroup.Item>Event 1 </ListGroup.Item>
      <ListGroup.Item>Event 2</ListGroup.Item>
   
    </ListGroup>
    </Card>

</>
  )
}
