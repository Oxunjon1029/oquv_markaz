import React, { useState } from 'react';
import {AiFillFile, AiFillStar, BiGroup} from 'react-icons/all'
import { useSelector } from 'react-redux';
import './kurs.css';
const Kurs = () => {
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
            name:uz?'Использование творческого решения проблем':"Muammoni ijodiy hal qilishdan foydalanish",
            type:uz?'Информатика':'Kompyuter fanlari',
            image:'http://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image3.png',
            id:3
        },
        
    ]
    const[data,setData]=useState(dataObject)

  
    return (
        <div >
            <div id='courses-title-box' className="title-container">
                  <div className="fluid-box">
                     
                   </div>
                </div>
            <div className="f-width" id="f2-width">
            
                    
                    <div className="courses-cards p-2">
                        <div className="row">
                            {
                                data.map(item=>(
                                    <div className="col-lg-4 col-md-6 col-sm-6 my-3">
                                <div className="courses-card-own p-5  d-flex">
                                    <img className='courses-image' src={item.image} alt="aa"/>
                                        <div className='mb-5 courses-card-body'>
                                            <span></span><p className='d-inline ml-3'>{item.type}</p> 
                                            <h4 className='my-3'>{item.name}</h4>
                                            <ul className='d-flex card-lessons'>
                                                <li className='mr-3'> <AiFillFile/> {uz?'11 уроки':'11 dars'}</li>
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


export default Kurs;