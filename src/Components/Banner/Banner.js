import React from 'react';
import banner from '../../assets/banner.png'


import './Banner.css';

function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerDiv">
    
        <div className="banner">
          <img
            src={banner}
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
