import React, { useState, useEffect } from 'react';
import {Button,  Breadcrumb} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Testimonial from '../components/TestimonialSection/Testimonial'
import './About (2).css';
import News from '../Oxunjon/News/News';
// import { useSelector } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const About = () => {
    const uz = useSelector(state=>state)
    const host = "https://educational-center-web-app.herokuapp.com";
    const [imgHost, setHost] = useState("");
    const [hid, setId] = useState("");
    const [tutors, setTutors] = useState("");
    useEffect(() => {
       getTutors();
    }, []);
    const getTutors = () =>{
        axios({
            url: `${host}/api/client/teacher/all`,
            method: 'get'
        }).then(res=>{
            if(res){
                setTutors(res.data.data.teachers)
            }
        })
    }
    
    console.log(tutors)

    return (
        <div>
            <div className="about-header">
                <h1 className="a-header-name">{uz?"О нас":"Biz haqimizda"}</h1>
                <Breadcrumb className="about-header-cumb">
                    <Breadcrumb.Item >
                        <Link to="/" style={{color: "black"}}>{uz?"Главная":"Bosh sahifa"}</Link>
                    </Breadcrumb.Item>  
                    <Breadcrumb.Item active href="#">
                        {uz?"О нас":"Biz haqimizda"}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {/* About Content */}
            <div className="about-content">
                <div className="a-content-left">
                    <div >
                        <p className="a-content-left-header"> {uz?"Мы Туритор.":"Biz kuratorlarmiz"} <br/>{uz?"Сообщество онлайн-обучения":"Online o'rganish jamiyatlaridan biri"}</p>
                        <div className="a-content-left-down">
                            <p className="a-c-turitor">{uz?"В Turitor мы считаем, что у каждого должна быть возможность добиваться прогресса с помощью технологий и развивать навыки завтрашнего дня. С оценками, схемами обучения и курсами, созданными отраслевыми экспертами.":"Turitor-da biz har bir kishi texnologiya orqali taraqqiyotni yaratish va ertangi kunning imkoniyatlariga ega bo'lishi kerak deb hisoblaymiz.Soha mutaxassislari tomonidan yozilgan baholash,o'rganish yo'llari va kursalari bilan."}</p>
                        </div>
                    </div>
                </div>
                <div className="a-content-right">
                    <div className="a-content-card">
                        <div className="a-content-img-div a-content-img-div1">
                        </div>
                        <p className="a-card-com">5016+</p>
                        <p className="a-card-name">{uz?"курсы":"kurslar"}</p>
                    </div>
                    <div className="a-content-card">
                        <div className="a-content-img-div a-content-img-div2">
                        </div>
                        <p className="a-card-com">{uz?"Награда":"Mukofot"}</p>
                        <p className="a-card-name">{uz?"победитель":"g'olib"}</p>
                    </div>
                    <div className="a-content-card">
                        <div className="a-content-img-div a-content-img-div3">
                        </div>
                        <p className="a-card-com">15600+</p>
                        <p className="a-card-name">{uz?"студенты":"talabalar"}</p>
                    </div>
                </div>
            
            </div>
            {/* About vidio */}
            <div className="about-div">
                <iframe src="https://www.youtube.com/embed/PcsVCSKBe04" className="about-vidio" target="iframe_a" frameborder="0"></iframe>
            </div>
            {/* About cards */}
            <div className="about-cards-header">
                <div className="a-cards-header-left">
                    <p>{uz?"#Kоманда":"#Jamoa"}</p>
                    <p>
                        {uz?"Команда лидеров с видением":"Vizyonga ega bo'lgan etakchilik jamoasi"}
                    </p>
                </div>
                <div className="a-cards-header-right">
                    <br/>
                    <p>{uz?"Наши руководители подают пример и направляют нас к достижению великих результатов каждый день. Онлайн-обучение предлагает новый способ исследования.":"Bizning rahbarlarimiz har kuni ulkan ishlarni bajarish uchun bizni o'rnak qilib,yo'l-yo'riq ko'rsatadilar.Onlayn o'rganish kash etishning yangi usulini taklif etadi."}</p>
                </div>
            </div>
        <div className="about-akmal-cards">
        {tutors?tutors.map(item => (
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
        )):""}
            
        </div>

<div className="testi-avazbek">
<Testimonial/>

</div>
<div className="news-avazbek">
<News/>
</div>

            </div>
    );
};


export default About;