import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from './../../Images/Carousel1.png';
import Carousel2 from './../../Images/Carousel2.png';
import Carousel3 from './../../Images/Carousel3.png';
import Carousel4 from './../../Images/Carousel4.png';
import './Carousel.css'



function MyCarousel() {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
          <img className="CarouselImage"
            src={Carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="CarouselImage"
            src={Carousel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="CarouselImage"
            src={Carousel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="CarouselImage"
            src={Carousel4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>  
    )
}

export default MyCarousel;