import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {info} from './data';
import './App.css'

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className='card-wrapper'>
      <Slider {...settings}>
        {info.map(item => (
          <div className='card' key={item.id}>
            <div className='card-top'>
              <img src={item.image} alt="Image" />
              <h2>{item.title}</h2>
            </div>
            <div className='card-bottom'>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );

}

export default App
