import React from 'react'
import Slider from 'react-slick';
import './css/instructors.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

export default function Instructors(){
    const uz = useSelector(state => state)
        var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
        return (
            <div className='incs-container'>
                <div className="container-content">
                   <div className="top-div">
                        <div className="top-div-content">
                            <p><span className='span-text'>{uz?"#Инструкторы":"O'qituvchilar"}</span></p>
                           <h1>{uz?"Featured Instructors":"Taniqli o'qituvchilar"}</h1>
                        </div>
                        <div className="top-div-content">
                            <span className='span-text'>{uz?"Узнайте, как предвидеть и адаптироваться к последним тенденциям и цифровым технологиям.":"So'nggi tendentsiyalar va raqamli texnologiyalarni ko'ra bilish va moslashishni o'rganing"}</span>
                        </div>
                    </div>
                    {/* //carousel_slick// */}
                    <div className="bot-div">
                        <div className='carousel_slick'>
                             <Slider {...settings}>
          <div>
              <div className="carousel_item">
                                <div className="hover-img">
                                    <h2>Yolanda Ruiz</h2>
                                    <p>Professor</p>
                                    <p className='icons'>
                                        <i className='fab fa-facebook-f'></i>
                                        <i className='fab fa-twitter'></i>
                                        <i className='fab fa-linkedin-in'></i>
                                        <i className='fab fa-instagram'></i>
                                    </p>
                                </div>
                                <div className="item-box1">
                                    <div className="item-img-div">
                                    </div>
                                </div>
                                <div className="item-box2">
                                    <h2>Yolanda Ruiz</h2>
                                    <p>Professor</p>
                                </div>
                            </div>
          </div>
          <div>
              <div className="carousel_item">
                                <div className="hover-img child2">
                                    <h2>Víctor Valdés</h2>
                                    <p>Professor</p>
                                    <p className='icons'>
                                        <i className='fab fa-facebook-f'></i>
                                        <i className='fab fa-twitter'></i>
                                        <i className='fab fa-linkedin-in'></i>
                                        <i className='fab fa-instagram'></i>
                                    </p>
                                </div>
                                <div className="item-box1">
                                    <div className="item-img-div item-child2">
                                    </div>
                                </div>
                                <div className="item-box2">
                                    <h2>Víctor Valdés</h2>
                                    <p>Professor</p>
                                </div>
                            </div>
          </div>
          <div>
              <div className="carousel_item">
                                <div className="hover-img child3">
                                    <h2>Eric Abidal</h2>
                                    <p>Professor</p>
                                    <p className='icons'>
                                        <i className='fab fa-facebook-f'></i>
                                        <i className='fab fa-twitter'></i>
                                        <i className='fab fa-linkedin-in'></i>
                                        <i className='fab fa-instagram'></i>
                                    </p>
                                </div>
                                <div className="item-box1">
                                    <div className="item-img-div item-child3">
                                    </div>
                                </div>
                                <div className="item-box2">
                                    <h2>Eric Abidal</h2>
                                    <p>Professor</p>
                                </div>
                            </div>
          </div>
          <div>
              <div className="carousel_item">
                                <div className="hover-img child4">
                                    <h2>Carolina Martin</h2>
                                    <p>Professor</p>
                                    <p className='icons'>
                                        <i className='fab fa-facebook-f'></i>
                                        <i className='fab fa-twitter'></i>
                                        <i className='fab fa-linkedin-in'></i>
                                        <i className='fab fa-instagram'></i>
                                    </p>
                                </div>
                                <div className="item-box1">
                                    <div className="item-img-div item-child4">
                                    </div>
                                </div>
                                <div className="item-box2">
                                    <h2>Carolina Martin</h2>
                                    <p>Professor</p>
                                </div>
                            </div>
          </div>
          <div>
              <div className="carousel_item">
                                <div className="hover-img">
                                    <h2>Yolanda Ruiz</h2>
                                    <p>Professor</p>
                                    <p className='icons'>
                                        <i className='fab fa-facebook-f'></i>
                                        <i className='fab fa-twitter'></i>
                                        <i className='fab fa-linkedin-in'></i>
                                        <i className='fab fa-instagram'></i>
                                    </p>
                                </div>
                                <div className="item-box1">
                                    <div className="item-img-div">
                                    </div>
                                </div>
                                <div className="item-box2">
                                    <h2>Yolanda Ruiz</h2>
                                    <p>Professor</p>
                                </div>
                            </div>
          </div>
        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
}