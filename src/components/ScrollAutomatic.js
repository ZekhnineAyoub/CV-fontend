import React from 'react';
import { Carousel,Image } from 'antd';
import '../index.css';
import Profile from '../images/profile.jpg';



const contentStyle = {
    height: '300px',
    color: '#fff',
    textAlign: 'center',
    background: '#6f98c4',
  };


const ScrollAutomatic = () => {
  return (
    <div className = "Scrolle">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><Image width={300} src= {Profile} ></Image></h3>
        </div>
        <div>
          <h3 style={contentStyle}><Image  height={300} src= {Profile} ></Image></h3>
        </div>
        <div>
          <h3 style={contentStyle}><Image height={300} src= {Profile} ></Image></h3>
        </div>
        <div>
          <h3 style={contentStyle}><Image height={300} src= {Profile} ></Image></h3>
        </div>
      </Carousel>
    </div>
  );
};

export default ScrollAutomatic;