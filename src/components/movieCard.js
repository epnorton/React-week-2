import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";



function CardDisplay () {
    return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src="/images/IslePoster.jpg"  />
    <Card.Body>
      <Card.Title>Isle of Dogs</Card.Title>
      <Card.Text>
        Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog. <br></br>
      </Card.Text>
      <Card.Footer>  Director: Wes Anderson <br></br>
        Rated: PG-13 <br></br>
        Released: 2018 <br></br>
        IMBd Rating: 7.8/10 stars
      </Card.Footer>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="/images/budapestposter.webp" />
    <Card.Body>
      <Card.Title>The Grand Budapest Hotel</Card.Title>
      <Card.Text>
        A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge. <br></br>
      </Card.Text>
      <Card.Footer>
        Director: Wes Anderson <br></br>
        Rated: R <br></br>
        Released: 2014 <br></br>
        IMBd Rating: 8.1/10 stars
      </Card.Footer>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="/images/MoonrisePoster.jpg" />
    <Card.Body>
      <Card.Title>Moonrise Kingdom</Card.Title>
      <Card.Text>
        A pair of young lovers flee their New England town, which causes a local search party to fan out to find them. <br></br>
      </Card.Text>
      <Card.Footer>
        Director: Wes Anderson <br></br>
        Rated: PG-13 <br></br>
        Released: 2012 <br></br>
        IMBd Rating: 7.8/10 stars
      </Card.Footer>
    </Card.Body>
  </Card>
  </CardGroup>
    )
}

export default CardDisplay;