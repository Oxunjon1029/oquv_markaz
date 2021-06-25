import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/AnimationEdu.json';
import {AiOutlineUserAdd} from 'react-icons/all'
import './Hero.css'
import { useSelector } from 'react-redux';
const Hero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const uz = useSelector(state=>state)

    return (
        <div className='hero'>
            <div className="hero-text mb-5">
                <h2>{uz?'Мы поднимаем обучение на новые высоты':"Biz o'rganishni yangi cho'qqilarga olib chiqamiz"}</h2>
                <p>{uz?'Мы верим, что каждый способен проявить творческий подход. Туритор - это место, где люди развивают собственный потенциал.':"Biz har kimning ijodiy qobiliyatiga ega ekanligiga ishonamiz. Turitor - bu odamlar o'zlarining potentsiallarini rivojlantiradigan joy."}</p>
                <div className="buttons">
                    <button className="btn-quote">{uz?'+ Получить цитату':'+ Iqtibos oling'}</button>
                    <button className="btn-trial"> <AiOutlineUserAdd/> {uz?'Начать пробный период':'Sinovni boshlang'}</button>
                </div>
            </div>
            <div className="hero-animation">
            <Lottie 
                options={defaultOptions}
                width='100%'
                backgroundColor='green'
            />
            </div>
        </div>
    );
};

export default Hero;