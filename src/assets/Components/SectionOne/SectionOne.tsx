import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Images/IMG_8838.jpg';
import img2 from '../../Images/IMG_4448.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SectionOne.css';

export const SectionOne = () => {
  return (
    <div className='carousel'>
      <Carousel>
        <Carousel.Item interval={500}>
          <img className="carousel-image" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="carousel-image" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
