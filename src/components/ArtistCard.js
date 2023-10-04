import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

export default function ArtistCard({img, name}) {
 const [ events, setEvents] = useState({
  event: undefined
 })
  const app_id = "123";
  async function fetchArtistData() {
    const baseUrl = "https://rest.bandsintown.com";

    const url = `${baseUrl}/artists/${name}/events?app_id=${encodeURIComponent(
      app_id
    )}&date=upcoming`;

    try {
      const response = await fetch(url);
      const artistData = await response.json();

      setEvents({
        id: artistData.id
      });
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error fetching data:", error);
    }
  }
 
  const showEvents = () => {

    fetchArtistData()
    console.log(events.id)
  };
  return (
    <>
        <Card style={{ width: '20rem', margin:"10px"}}>
      <Card.Img variant="top" src={img} alt="maroon"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
     
      </Card.Body>
  
    <Dropdown as={NavItem}  onClick={showEvents}>
      <Dropdown.Toggle as={NavLink} >Upcoming events...</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Event 1 id: {events.id}</Dropdown.Item>
        <Dropdown.Item>Event 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Card>

</>
  )
}
