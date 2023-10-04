import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function SearchEngine({artistName, handleSubmit, setArtistName}) {
  return (
   <>
   <Form 

        onSubmit={handleSubmit}
         value={artistName}
         onChange={(event) => setArtistName(event.target.value)}
          >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
          name="artistName"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="dark">Search</Button>
          </Col>
        </Row>
      </Form>
      </>
  )
}
