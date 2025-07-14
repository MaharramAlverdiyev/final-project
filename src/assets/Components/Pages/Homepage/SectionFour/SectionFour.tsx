import { useEffect } from 'react';
import './secfour.css';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../../../../redux/features/blogSlice';
import { FaRegCalendarAlt } from "react-icons/fa";

export const SectionFour = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog())
  }, [])

  const { value } = useSelector((state) => state.blog);
  

  return (
    <div className='sec-four'>
        <div className="sec-four-center">
      <h1 className='sec-four-bloq'>Bloq</h1>
      <div className="secfour-card">
        {
          value.map((item) => (
            <Card key={item.id} style={{ width: '23rem', cursor:'pointer' }}>
              <Card.Img variant="top" src={item.image} className='card-image' 
              style={{
                width:'100%',
                height:'190px',
                objectFit:'cover'
              }}/>
              <Card.Body className='card-body'>
                <Card.Title className='title'>{item.title}</Card.Title>
                <Card.Title className='calendar'><FaRegCalendarAlt className='calendar-logo'/>{item.time}</Card.Title>
                <Card.Text className='text'>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }
        </div>
      </div>
    </div>
  );
};
