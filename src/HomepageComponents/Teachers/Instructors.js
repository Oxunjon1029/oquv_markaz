import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import './css/instructors.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
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

    const [List, setList] = useState([]);
    const TeacherList = () =>{
        axios.get('https://educational-center-web-app.herokuapp.com/api/client/teacher/all')
        .then(res => {setList(res.data.data.teachers);console.log(res);})
        .catch(data => console.log(data))
    }

    useEffect(() => {
      TeacherList()
    }, [])  

        return (
            <div className='incs-container'>
                <div className="container-content">
                   <div className="top-div">
                        <div className="top-div-content">
                            <p><span className='span-text'>{uz?"#Инструкторы":"O'qituvchilar"}</span></p>
                           <h1>{uz?"Избранные инструкторы":"Taniqli o'qituvchilar"}</h1>
                        </div>
                        <div className="top-div-content">
                            <span className='span-text'>{uz?"Узнайте, как предвидеть и адаптироваться к последним тенденциям и цифровым технологиям.":"So'nggi tendentsiyalar va raqamli texnologiyalarni ko'ra bilish va moslashishni o'rganing"}</span>
                        </div>
                    </div>
                    {/* //carousel_slick// */}
                    <div className="bot-div">
                        <div className='carousel_slick'>
                             <Slider {...settings}>
        {List.map(item => (
             <div>
                 {console.log(item.avatar.hashId)}
                <div className="carousel_item">
                        <div className="hover-img" style={{backgroundImage:`url(https://educational-center-web-app.herokuapp.com/api/client/file/preview/${item.avatar.hashId})`}}>
                                <h2>{item.first_name}{' '}{item.last_name}</h2>
                                <p>{uz?item.bioRu:item.bioUz}</p>
                                <p className='icons'>
                <a href={item.facebook}><i className='fab fa-facebook-f'></i></a>           
                <a href={item.telegram}><i className='fab fa-telegram-plane'></i></a> 
                <a href={item.instagram}><i className='fab fa-instagram'></i></a> 
                                </p>
                        </div>
                        <div className="item-box1">
                        <div className="item-img-div" style={{backgroundImage:`url(https://educational-center-web-app.herokuapp.com/api/client/file/preview/${item.avatar.hashId})`}}>
                        </div>
                        </div>
                        <div className="item-box2">
                                <h2>{item.first_name}{' '}{item.last_name}</h2>
                                <p>{uz?item.bioRu:item.bioUz}</p>
                        </div>
                </div>
             </div>
        ))}
        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
}