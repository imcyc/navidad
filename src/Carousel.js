import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bkg from './bkg.jpg';
import bkg1 from './bkg1.jpg';
import bkg2 from './bkg2.jpg';
import bkg3 from './bkg3.jpg';
import bkg4 from './bkg4.jpg';
import bkg5 from './bkg5.jpg';
import bkg6 from './bkg6.jpg';
import './Carousel.css';

function ControlledCarousel() {
  return (
    <>
      <div className="filtro"></div>
      <Carousel fade={true} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
    
  );
}

export default ControlledCarousel;