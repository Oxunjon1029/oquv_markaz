import React, { useState } from 'react';
import {AiFillFile, AiFillStar, BiGroup} from 'react-icons/all'
import { useSelector } from 'react-redux';
import './Courses.css';
const Courses = () => {
    const uz = useSelector(state=>state)

    const [isActive, setIsActive] = useState(null)
    const dataObject=[
        {
            name: uz?'Создание музыки с другими людьми':'Boshqa odamlar bilan musiqa qilish',
            type:uz?'Веб-разработка':'Veb dasturlash',
            image:'http://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image1.png',
            id:1
        },
        {
            name:uz?'Незаконный оборот древностей и преступления в сфере искусства':"Qadimgi buyumlar savdosi va san'at jinoyati",
            type:uz?'Инженерное дело':'Injenering',
            image:'http://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image2.png',
            id:2
        },
        {
            name:uz?'Использование творческого решения проблем ':"Muammoni ijodiy hal qilishdan foydalanish",
            type:uz?'Информатика':'Informatika',
            image:'http://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image3.png',
            id:3
        },
        {
            name:uz?'Внутри Opera: Почему это имеет значение?':"Opera ichida: nega bu muhim?",
            type:uz?'Наука о данных':"Ma'lumotlar ",
            image:'http://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image4.png',
            id:4
        },
        {
            name:uz?'Сила подкастов в повествовании':"Hikoya qilish uchun podkastning kuchi",
            type:uz?'Архитектура':'Arxitektura',
            image:'http://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image5.png',
            id:5
        },
        {
            name:uz?'Мода и роскошь Мода меняется':"O'zgarishdagi moda va hashamatli moda",
            type:uz?'Бизнес-исследование':"Biznesni o'rganish",
            image:'http://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image6.png',
            id:6
        },
    ]
    const[data,setData]=useState(dataObject)

    const onHandle=(item)=>{
        setData([item])
        setIsActive(item.id)

    }
    const onHandleAll=()=>{
        setData(dataObject)
        setIsActive(null)
    }
    return (
        <div className='courses-section'>
            <div id='courses-title-box' className="title-container">
                  <div className="fluid-box">
                      <div className="title_boxes">
                        <p>{uz?"#Лучшие курсы":"#eng yaxshi kurslar"}</p>
                        <h1 className='title_big_text'>{uz?"Избранные курсы":"Taniqli kurslar"}</h1>
                      </div>
                      <div className="title_boxes">
                        <p>{uz?"Онлайн-обучение предлагает новый способ изучения предметов, которые вам интересны.":"Onlayn ta'lim sizga qiziqqan mavzularni o'rganishning yangi usulini taklif etadi."}</p>
                      </div>
                      <div className="title_boxes text-content">
                        <button><i className='fas fa-eye icon_plus'></i>{uz?"Посмотреть все":"Hammasini ko'rish"}</button>
                      </div>
                   </div>
                </div>
            <div className="f-width">
            
                    <div className="courses-head">
                        <ul className='d-flex justify-content-center p-4'>
                            <li onClick={onHandleAll} className={isActive?'':'active-item'}>{uz?'Все':'Barchasi'}</li>
                            {
                                dataObject.map(item=>{
                    
                                    if(item.id===isActive){
                                    return <li className="active-item" onClick={()=>onHandle(item)}>{item.type}</li>
                                } else{
                                    return <li onClick={()=>onHandle(item)}>{item.type}</li>
                                }
                                })
                            }
                        </ul>
                    </div>
                    <div className="courses-cards p-2">
                        <div className="row">
                            {
                                data.map(item=>(
                                    <div className="col-lg-4 col-md-6 col-sm-6 my-3">
                                <div className="courses-card p-5  d-flex">
                                    <img className='courses-image' src={item.image} alt="aa"/>
                                        <div className='mb-5 courses-card-body'>
                                            <span></span><p className='d-inline ml-3'>{item.type}</p> 
                                            <h3 className='my-3'>{item.name}</h3>
                                            <ul className='d-flex card-lessons'>
                                                <li className='mr-3'> <AiFillFile/> {uz?'11 lessons':'11 dars'}</li>
                                                <li> <BiGroup/> 50</li>
                                            </ul>
                                            <div className='d-flex align-items-center mt-5 card-lessons'>
                                                <img width='20%' src="https://demo.themewinter.com/wp/turitors/wp-content/litespeed/avatar/841787eb0846cc0ab6e7103ea1eeb1fd.jpg" alt="aa"/>
                                                <h5 className='ml-3'>{uz?'Acuralnte':'Bilim oling'}</h5>
                                            </div>
                                        </div>
                                        <div className='courses-card-footer d-flex align-items-center justify-content-between card-lessons'>
                                            <p><AiFillStar style={{color:'yellow'}}/><AiFillStar style={{color:'yellow'}}/><AiFillStar style={{color:'yellow'}}/><AiFillStar style={{color:'yellow'}}/>1 {uz?'голосов':'ta ovoz'}</p>
                                            <h4>$ 1.99</h4>
                                        </div>
                                </div>
                            </div>
                                ))
                            }
                           
                        </div>
                    </div>
                </div>
        </div>
    );
};


export default Courses;