import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { FcLikePlaceholder } from "react-icons/fc";

export default function ArtistCard({img, name}) {
 const [ events, setEvents] = useState({
  event: undefined
 })
  const app_id = "123";
  async function fetchEventsData() {
    const baseUrl = "https://rest.bandsintown.com";

    const url = `${baseUrl}/artists/${name}/events?app_id=${encodeURIComponent(
      app_id
    )}&date=upcoming`;

    try {
     
      const response = await fetch(url);
      const eventsData = await response.json();

      setEvents({
        id: eventsData.id,
        artist_id: eventsData.artist_id
      });
    } catch (error) {
    
      console.error("Error fetching data:", error);
    }
  }
 
  const showEvents = () => {

    fetchEventsData()
   
  };
  return (
    <>
        <Card style={{ width: '20rem', margin:"10px", position:"relative"}}>
      <Card.Img variant="top" src={img} alt="maroon"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
     <FcLikePlaceholder className='like-i'/>
      </Card.Body>
  
    <Dropdown as={NavItem}  onClick={showEvents}>
      <Dropdown.Toggle as={NavLink} >Upcoming events...</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Event 1</Dropdown.Item>
        <Dropdown.Item>Event 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Card>

</>
  )
}
