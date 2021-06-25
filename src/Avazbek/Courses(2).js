import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Course2.css';
import { Breadcrumb, Button, Dropdown, FormControl, InputGroup } from 'react-bootstrap';
import Rimg1 from './IMg/course_image8.jpg';
import Rimg2 from './IMg/course_image9.jpg';
import Rimg3 from './IMg/course_image10.jpg';
import Rimg4 from './IMg/course_image11.jpg';
import Rimg5 from './IMg/course_image12.jpg';
import Rimg6 from './IMg/course_image13.jpg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Kurs from './kurs/Kurs';

const AvazbekCourses = () => {
    const uz = useSelector(state=>state)
    const host = "https://educational-center-web-app.herokuapp.com";
    const [courseList, setList] = useState("");
    useEffect(() => {
       getCourses();
    }, []);
    const getCourses = () =>{
        axios({
            url: `${host}/api/admin/course/all`,
            method: 'get',
        }).then(res=>{
            if(res){
                setList(res.data.data.courses)
            }else{}
        })
    }
    console.log(courseList)
    const allBtn = () =>{
        document.querySelector("#menuBtn").classList.toggle("dropdown-menu2")
    }
    const allBtnSki = () =>{
        document.querySelector("#menuBtn2").classList.toggle("dropdown-menu2")
    }
    return (
        <div>
            {/* About header */}
            <div className="about-header">
                <h1 className="a-header-name">{uz?"Курсы":"Kurslar"}</h1>
                <Breadcrumb className="about-header-cumb">
                    <Breadcrumb.Item >
                        <Link to="/" style={{color: "black"}}>{uz?"Главная":"Bosh sahifa"}</Link>
                    </Breadcrumb.Item>  
                    <Breadcrumb.Item active href="#">
                        {uz?"Курсы":"Kurslar"}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="container">
                <div className="course-post">
                <div className="course-post-header">
                    <div>
                    <h1 className="feature-h">
                        {uz?"Рекомендуемый курс":"Tanlangan kurs"}
                    </h1>
                    <h4 className="feature-h1">
                        {uz?"В настоящее время представлены":"Hozirgi xususiyatlar"}
                    </h4>
                    </div>
                </div>
                </div> 
                <div className="grid-box">
                   <Kurs/>
                </div>
            </div>
            {/* Course Content */}
            <div className="course-content">
                <div className="course-left">
                    {/* Course input */}
                    <div className="course-input">
                        <InputGroup className="mb-4">
                            <FormControl
                                className="course-search"
                                aria-label={uz?"Имя пользователя получателя":"Qabul qiluvchining foydalanuvchinomi"}
                                aria-describedby="basic-addon2"
                                />
                            <InputGroup.Append>
                                <Button className="course-btn"><i className="fas fa-search"></i></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    {/* Course category */}
                    <div className="course-category">                        
                            <div id="dropDown" className="w-100 category-dropdown">
                                <a variant="white" className="all_btn" onClick={allBtn}> {uz?"Все категории":"Barcha kurslar"} <i className="fas fa-angle-down"></i></a>
                            </div>
                            <div className="w-100 dropdown-Menu" id="menuBtn" >
                                <ul className="dropdown-ul">
                                    <li> {uz?"Архитектура":"Arxitektura"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Арт Дизайн":"San'at va Dizayn"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Бизнес-исследование":"Biznes ta'lim"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Информатика":"Kompyuter savodxonligi"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Наука о данных":"Ma'lumotlar"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Инженерное дело":"Muhandislik"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Психология":"Psixologiya"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Веб-разработка":"Veb-ishlab chiqish"}<i className="fas fa-arrow-right"></i></li>
                                </ul>
                            </div>            
                    </div>
                    {/* Course skill */}
                    <div className="course-category">                        
                            <div id="dropDown" className="w-100 category-dropdown">
                                <a variant="white" className="all_btn" onClick={allBtnSki}>{uz?"Уровень мастерства":"Malaka darajasi"} <i className="fas fa-angle-down"></i></a>
                            </div>
                            <div className="w-100 dropdown-Menu" id="menuBtn2" >
                                <ul className="dropdown-ul">
                                    <li>{uz?"Все":"Hammasi"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Fullstack":"Fullstack"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"Intermediate":"O'rta"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"PHP":"PHP"} <i className="fas fa-arrow-right"></i><hr/></li>
                                    <li>{uz?"WordPress":"WordPress"} <i className="fas fa-arrow-right"></i></li>
                                </ul>
                            </div>            
                    </div>
                    {/* Course posts */}
                    <div className="course-category">                        
                            <div className="course-post-header">
                                <p className="post-header-p">{uz?"Последние записи":"So'nggi xabarlar"}</p>    
                            </div>   
                            <div className="course-post-content">
                                <ul>
                                    <li>
                                        <div className="row post-row">
                                            <div className="post-img post-img1"></div>
                                            <div className="post-content">
                                                <p>{uz?"Python u JS…":"Piton va Java Script"} </p> 
                                            </div>
                                        </div>
                                        <hr className="hrr" />
                                    </li>
                                    <li>
                                        <div className="row post-row">
                                            <div className="post-img post-img2"></div>
                                            <div className="post-content">
                                                <p>{uz?"Python может быть…":"Piton bo'lishi mumkin"}</p> 
                                            </div>
                                        </div>
                                        <hr className="hrr" />
                                    </li>
                                    <li>
                                        <div className="row post-row">
                                            <div className="post-img post-img3"></div>
                                            <div className="post-content">
                                                <p>                                                    
                                                    {uz?"Расширение бизнес-массы…":"Biznes massasini kengaytirish… "}
                                                </p> 
                                            </div>
                                        </div>
                                        <hr className="hrr" />
                                    </li>
                                    <li>
                                        <div className="row post-row">
                                            <div className="post-img post-img4"></div>
                                            <div className="post-content">
                                                <p> {uz?"Эволюция…":"Evalyutsiyasi…"}</p> 
                                            </div>
                                        </div>
                                        <hr className="hrr" />
                                    </li>
                                    <li>
                                        <div className="row post-row">
                                            <div className="post-img post-img5"></div>
                                            <div className="post-content">
                                                <p>{uz?"Психология может быть…":"Psixologiya bo'lishi mumkin…"} </p> 
                                            </div>
                                        </div>
                                        <hr className="hrr" />
                                    </li>
                                    
                                </ul>
                            </div>        
                    </div>
                   
                </div>
                <div className="course-right">
                    <div className="course-right-header">
                        <p>{uz?"Показано 1-6 из 6 результатов":"6 ta natijadan 1-6 tasi ko'rsatilgan"}</p>
                        <select className="course-select">
                            <option>{uz?"Выбрать порядок":"Buyurtmani tanlang"}</option>
                            <option>{uz?"Сортировать по: Недавно опубликованным":"Saralash: Yaqinda tanlangan"}</option>
                            <option>{uz?"Сортировать по: По алфавиту":"Saralash: Alifbo tartibida"}</option>
                            <option>{uz?"Сортировать по: Рекомендуемое":"Saralash: Bo'laklangan"}</option>
                            <option>{uz?"Сортировать по: Популярности":"Saralash: Mashhurlik"}</option>
                        </select>
                    </div>
                    <div className="right-card-row">
                    {
                        courseList?courseList.map(item=>(
                            <div className="right-card">
                            <div className="r-card-img">
                                <img src={`https://educational-center-web-app.herokuapp.com/api/client/file/preview/${item.attachment?item.attachment.hashId:''}`} alt="error img" />
                                <p>25$</p>
                            </div>
                            <div className="r-card-content">
                                <ul>
                                    <li>
                                        <p className="card-psy">{uz?item.titleRu:item.titleUz}</p>
                                    </li>
                                    <li><p className="card-fun">{uz?item.descriptionRu:item.descriptionUz}</p></li>
                                    <li className="card-i">
                                        <p>
                                            <i className="fas fa-file"></i>{uz?item.durationTime+" dars":item.durationTime+" lessons"} 
                                        </p>
                                        <p>
                                            <i className="fas fa-user-friends"></i> 3
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="r-card-footer">
                                <p>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>

                                <a className="card-a"><i className="fas fa-arrow-right card-arrow"></i></a>
                            </div>
                        </div>
                        )):""
                    }

                    
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AvazbekCourses;