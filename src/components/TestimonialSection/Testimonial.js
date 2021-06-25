import React from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
import {GoQuote} from 'react-icons/all'
import { useSelector } from 'react-redux';
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        swipeToSlide: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1072,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 765,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
      };
      const uz = useSelector(state=>state)

    return (
        <div className='testimonial'>
            <div className="testimonial-head">
                <div className='testimonial-head-first'>
                    <p>#{uz?'Мысли':'Fikrlar'}</p>
                    <h2>{uz?'Что говорят студенты':'Studentlar nima deydi?'}</h2>
                </div>
                <p className='testimonial-head-second'>{uz?'Узнайте, как предвидеть последние тенденции и цифровые показатели и адаптироваться к ним.':"Eng so'nggi tendentsiyalarni va raqamli raqamlarni qanday kutish va unga moslashishni o'rganing"}</p>
            </div>
            <div className="testimonial-slide">
                <Slider {...settings}>
                    
                
                <div className='testimonial-card'>
                                <p className='testimonial-text'>
                                    <GoQuote size='20' style={{color:'green',position:'absolute',top:'20px', left:'5px'}}/>
                        {uz?'Использование различных навыков и моделей поведения в программе для людей позволило мне полностью погрузиться в,...':"Odamlar dasturining turli ko'nikmalari va xatti-harakatlaridan foydalanish menga to'laqonli bo'lishimga imkon berdi, ..."}                  </p>
                        <div className='d-flex align-items-center'>
                            <div className="testi-image"></div>
                            <div className='ml-3'><h3>Mario Mandzukic</h3>
                            <span>{uz?'Аспирант':'Aspirant'}</span></div>
                        </div>
                    </div>
                <div className='testimonial-card'>
                                <p className='testimonial-text'>
                                    <GoQuote size='20' style={{color:'green',position:'absolute',top:'20px', left:'5px'}}/>
                                    {uz?'Программа People позволила мне быть полноценной, используя различные навыки и модели поведения....':"Odamlar dasturi menga turli xil ko'nikmalar va xatti-harakatlardan foydalanib, meni to'laqonli bo'lishimga imkon berdi ..."}                                   </p>
                        <div className='d-flex align-items-center'>
                            <div className="testi-image"></div>
                            <div className='ml-3'><h3>Lukaz vaskez</h3>
                            <span>{uz?'EMBA студент':"EMBA talabasi"}</span></div>
                        </div>
                    </div>
               
                <div className='testimonial-card'>
                                <p className='testimonial-text'>
                                    <GoQuote size='20' style={{color:'green',position:'absolute',top:'20px', left:'5px'}}/>
                                    {uz?'Использование различных навыков и моделей поведения в программе для людей позволило мне полностью погрузиться в,...':"Odamlar dasturining turli ko'nikmalari va xatti-harakatlaridan foydalanish menga to'laqonli bo'lishimga imkon berdi, ..."}                  </p>
                        <div className='d-flex align-items-center'>
                            <div className="testi-image"></div>
                            <div className='ml-3'><h3>Mario Mandzukic</h3>
                            <span>{uz?'Аспирантt':'Aspitant'}</span></div>
                        </div>
                    </div>
                    <div className='testimonial-card'>
                                <p className='testimonial-text'>
                                    <GoQuote size='20' style={{color:'green',position:'absolute',top:'20px', left:'5px'}}/>
                                    {uz?'Программа People позволила мне быть полноценной, используя различные навыки и модели поведения...':"Odamlar dasturi menga turli xil ko'nikmalar va xatti-harakatlardan foydalanib, meni to'laqonli bo'lishimga imkon berdi ..."}                                   </p>
                        <div className='d-flex align-items-center'>
                            <div className="testi-image"></div>
                            <div className='ml-3'><h3>Lukaz vaskez</h3>
                            <span>{uz?'EMBA студент':"EMBA talabasi"}</span></div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};


export default Testimonial;