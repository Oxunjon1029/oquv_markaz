import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import './SliderComponent.css'
const SliderComponent = () => {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplaySpeed: 2000,
             cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                    arrows: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                  }
                }
              ]
          };
        return (
            <div className='container mySlick'>
                 <Slider {...settings}>
                    <div>
                             <img src="/img/0fd2996cec7455d5d7e433e4931d29c7.png" alt='error'/>
                        <h3>Víctor Valdés</h3>
                        <p>Professor</p>
                    </div>
                    <div>
                        <img src="/img/1f21243383c724eefff3fc2c65deba84.png" alt='error'/>
                        <h3>Yolanda Ruiz</h3>
                        <p>Professor</p>
                    </div>
                    <div>
                        <img src="/img/66cb5c5935d1a2af2df59eefaa462dbb.png" alt='error'/>
                        <h3>Eric Abidal</h3>
                        <p>Professor</p>
                    </div>
                    <div>
                       <img src="/img/ee84a5706beec440911fe6784da7303b.png" alt='error'/>
                       <h3>Carolina Martin</h3>
                        <p>Professor</p>
                    </div>
                    <div>
                        <img src="/img/0fd2996cec7455d5d7e433e4931d29c7.png" alt='error'/>
                        <h3>Víctor Valdés</h3>
                        <p>Professor</p>
                    </div>
                    <div>
                        <img src="/img/1f21243383c724eefff3fc2c65deba84.png" alt='error'/>
                        <h3>Yolanda Ruiz</h3>
                        <p>Professor</p>
                    </div>
                    <div>
                        <img src="/img/66cb5c5935d1a2af2df59eefaa462dbb.png" alt='error'/>
                        <h3>Eric Abidal</h3>
                        <p>Professor</p>
                    </div>
                    <div>
                       <img src="/img/ee84a5706beec440911fe6784da7303b.png" alt='error'/>
                       <h3>Carolina Martin</h3>
                        <p>Professor</p>
                    </div>
             </Slider>
            </div>
        )
    
}
export default SliderComponent
