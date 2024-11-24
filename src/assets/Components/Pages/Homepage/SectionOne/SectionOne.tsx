
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../Images/image0 (1).jpeg';
import img2 from '../../../Images/IMG_4448.jpg';
import img3 from '../../../Images/IMG_3633.jpg';
import img4 from '../../../Images/IMG_8007.jpg'
import gif from '../../../Images/WhatsAppVideo2024-08-06at05.46.04-ezgif.com-video-to-gif-converter.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SectionOne.css';

export const SectionOne = () => {
  return (
    <div className='secOne'>
      <div className="secOne-center">
        <div className='carousel'>
          <Carousel className='carousel-slide'>
            <Carousel.Item interval={1000}>
              <img className="carousel-image" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="carousel-image" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="carousel-image" src={img3} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="carousel-image" src={img4} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="videomp4">
          <img src={gif} alt="" />
        </div>
      </div>
    </div>
  );
};
