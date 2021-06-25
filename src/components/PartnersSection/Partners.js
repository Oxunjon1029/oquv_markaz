import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import './Partners.css'
const Partners = () => {
    const uz = useSelector(state=>state)

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 971,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 765,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    }
    return (
        <div className='partners'>
            <div className="partners-head">
                <h4>#{uz?'партнеры':'hamkorlar'}</h4>
                    <h2>{uz?'С кем ты будешь учиться?':"Kim bilan o'rganasiz?"}</h2>
                    <p>{uz?'Онлайн-курсы, программы и степени, созданные ведущими университетами, бизнес-школами и специализированными организациями.':"Yetakchi universitetlar, biznes maktablari va mutaxassis tashkilotlar tomonidan yaratilgan onlayn kurslar, dasturlar va darajalar."}</p>
            </div>
            <div className="partners-slide container">
                    <Slider {...settings}>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo2.png" alt="sasa"/>
                        </div>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo1.png" alt="sasa"/>
                        </div>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo3.png" alt="sasa"/>
                        </div>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo4.png" alt="sasa"/>
                        </div>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo5.png" alt="sasa"/>
                        </div>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo1.png" alt="sasa"/>
                        </div>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo2.png" alt="sasa"/>
                        </div>
                        <div className="partners-image">
                            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/partners_logo3.png" alt="sasa"/>
                        </div>
                    </Slider>
            </div>
        </div>
    );
};


export default Partners;