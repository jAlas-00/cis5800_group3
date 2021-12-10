import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button, Carousel, Nav } from 'react-bootstrap'
import '../styling/general.css'


const Home = () => {
    const { currentUser } = useAuth()

    return (
        <div className='container'>
          <div className='centerTextBlock'><h1>Welcome to SharedShelf</h1></div>
            <Carousel>
                
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide1.jpg" style={{ width: '100px', height: '600px'}}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{backgroundColor: '#668fbf'}}>Modern</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide2.jpg" style={{ width: '100px', height: '600px'}}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{backgroundColor: '#668fbf'}}>Hassle Free</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slide3.jpg" style={{ width: '100px', height: '600px'}}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{backgroundColor: '#668fbf'}}>Affordable</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <h2 style={{marginTop:'100px'}}>SharedShelf offers a library management service catered to small organizations looking to make their collection available for circulation for their community. Our online software lets you catalog your collection with minimal technical set-up. Management without the hassle. Are you ready to try SharedShelf?</h2>
            <div className='btnCenterBrand'><Button size="lg" style={{ backgroundColor: '#668fbf'}}>
              <Nav.Link href="/login" style={{textDecoration: 'none', color: 'white'}}>Login</Nav.Link>
            </Button></div>
        </div>
    )
}

export default Home