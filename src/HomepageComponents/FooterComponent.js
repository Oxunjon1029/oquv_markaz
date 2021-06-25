import React from 'react';
import { useSelector } from 'react-redux';
import './css/Footer.css';
import instructor from './images/instructor_image.png';
import partner from './images/partner_image.png';

export default function FooterComponent (){
    const uz = useSelector(state=>state)
        return (
            <section className='footer_page_container'>
                <div className="footer_page_content">
                    <div className="content-box">
                         <div className="single-box box-img">
                             <img src={instructor} alt="instructor_image"/>
                         </div>
                         <div className="single-box single-text">
                             <div className="text-content">
                                 <h1>{uz?'Стать инструктором':"O'qituvchi bo'ling"}</h1>
                             </div>
                             <div className="text-content">
                                 <p>{uz?'Присоединяйтесь к миллионам людей со всего мира, которые учатся вместе. Онлайн-обучение так же просто и естественно, как и общение в чате.':"Dunyodagi millionlab odamlarga qo'shiling. Onlayn o'rganish suhbatlashish kabi oson va tabiiydir."}</p>
                             </div>
                             <div className="text-content">
                                 <button><i className='fas fa-plus-circle icon_plus'></i>{uz?"ПРИМЕНИТЬ СЕЙЧАС":"Hoziroq qo'shiling"}</button>
                             </div>
                         </div>
                    </div>

                    <div className="content-box">
                         <div className="single-box box-img">
                             <img src={partner} alt="partner_image"/>
                         </div>
                         <div className="single-box single-text">
                             <div className="text-content">
                                 <h1>{uz?'Стать партнером':"Hamkor bo'ling"}</h1>
                             </div>
                             <div className="text-content">
                                 <p>{uz?'Присоединяйтесь к миллионам людей со всего мира, которые учатся вместе. Онлайн-обучение так же просто и естественно, как и общение в чате.':"Dunyodagi millionlab odamlarga qo'shiling. Onlayn o'rganish suhbatlashish kabi oson va tabiiydir."}</p>
                             </div>
                             <div className="text-content">
                                 <button><i className='fas fa-plus-circle icon_plus'> </i><span>{uz?"СВЯЖИТЕСЬ С НАМИ":"Biz bilan bog'laning"}</span></button>
                             </div>
                         </div>
                    </div>   
                </div>
            </section>
        )
}