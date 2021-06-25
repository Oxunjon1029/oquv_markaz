import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import Logo from '../images/logo-tritor.jpg';
import { FaAngleUp, FaEnvelope, FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import {useSelector,useDispatch} from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const FooterComponent = () => {
  window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Scroll").style.opacity = "1";
    document.getElementById("Scroll").style.transition = "1s";
  } else {
    document.getElementById("Scroll").style.opacity = "0";
    document.getElementById("Scroll").style.transition = "0.8s";
  }
}
const uz = useSelector(state => state);

    return (<>
        <div className='oxunjon-footer'>
          <div className="conainer-fluid">
              <footer style={{backgroundColor:"#273C66"}}>
       <div className="container">
         <div className="background-image">
           <div className="row">
           <div className="col-lg-6 col-md-12 col-12 lineHeight">
           {uz ?   <p className="text-white"> 
              #Новостная рассылка
             </p> : <p className="text-white">#Xabarlarxati</p>}
           {uz ?   <h1 style={{fontWeight:"bolder",fontSize:"3rem"}} className="text-white fontSize">Присоединяйтесь к нашему сообществу студентов</h1> : <h1 style={{fontWeight:"bolder",fontSize:"3rem"}} className="text-white fontSize">Bizning talabalar guruhiga qo'shiling</h1>}
           </div>
           <div className="col-lg-6 col-md-12 col-12 br row input_button">
            
             <input className="col-lg-6 col-md-7 col-12" style={{border:"none",outline:"none"}} placeholder={uz ? "Введите адрес электронной почты" : "Email pochtangizni kiriting"}/>
             <div className="borderRadius col-lg-6 col-md-5 col-12  ">
               <p className="text-white p ">
                 <FaEnvelope style={{marginRight:"0.4rem"}}/>
                {uz ? "ПОДПИСЫВАТЬСЯ" : "Obuna bo'ling"}
               </p>
             </div>
             
            
           </div>
           </div>
         
         </div>
         <div className="row" id="Row-asosiy">
           <div className="col-lg-3 col-md-6 col-sm-12" id="fit">
           {uz ? <h5 className="text-white">
           КОМПАНИЯ
           </h5> : <h5 className="text-white">KOMPANIYA</h5>}
           <div className="ul-li">
           <ul>
             <li>
                <a href="#"><Link to="/about">{uz?'About':'Biz haqimizda'}</Link> </a> : 
             </li>
             <li>
             {uz ? <a href="#">Карьера </a> : <a href="#">Faoliyatlar</a>}
             </li>
             <li>
             {uz ? <a href="#">Ресурсный центр </a> : <a href="#">Manbalar markazi</a>}
             </li>
             <li>
             {uz ? <a href="#">Гиды </a> : <a href="#">Ko'rsatmalar</a>}
             </li>
           </ul>
           </div>
           
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12" id="fit">
           {uz ? <h5 className="text-white">
           КАТЕГОРИИ
           </h5> : <h5 className="text-white">KATEGORIYALAR</h5>}
           <div className="ul-li">
           <ul>
             <li>
               {uz ? <a href="#">Все курсы</a> : <a href="#">Barchs Kurslar</a>}
             </li>
             <li>
               {uz ? <a href="#">Цифровой маркетинг</a> : <a href="#">Raqamli Marketing</a>}
             </li>
             <li>
             {uz ? <a href="#">Дизайн и брендинг</a> : <a href="#">Dizayn va Brendlash</a>}
             </li>
             <li>
             {uz ? <a href="#">Рассказ и закадровый голос</a> : <a href="#">Hikoya qilish va Ovoz tugadi</a>}
             </li>
           </ul>
           </div>
           
           </div>
           <div className="col-lg-3 col-md-6 col-sm-12" id="fit">
           {uz ? <h5 className="text-white">
           СЛУЖБА ПОДДЕРЖКИ
           </h5> : <h5 className="text-white">YORDAM</h5>}
           <div className="ul-li">
           <ul>
             <li>
               <a href="#"><Link to="/contact">{uz?'Contact us':"Biz bilan bog'laning"}</Link></a> 
             </li>
             <li>
             {uz ? <a href="#">Системные Требования </a> : <a href="#">Sistema talablari </a>}
             </li>
             <li>
             {uz ? <a href="#">Зарегистрировать ключ активации </a> : <a href="#">Registratsiyani Faollashtirish kaliti</a>}
             </li>
             <li>
             {uz ? <a href="#">Отзыв о сайте </a> : <a href="#">Fikr-mulohaza joylashtirish</a>}
             </li>
           </ul>
           </div>
           
           </div>
           <div className="col-lg-3 col-md-6 col-12" id="fit">
           {uz ? <h5 className="text-white">
           СВЯЗАТЬСЯ
           </h5> : <h5 className="text-white">BOG'LANMOQ</h5>}
           <div className="ul-li">
           <ul>
             <li>
             {uz ? <a href="#">Контактная поддержка </a> : <a href="#">Aloqa yordami</a>}
             </li>
             <li>
             {uz ? <a href="#">Центр помощи </a> : <a href="#">Yordam Markazi</a>}
             </li>
           </ul>
           <div className="iconca mt-4">
             <div className="Facebook">
               <FaFacebookF/>
             </div>
             <div className="Twitter">
               <FaTwitter/>
             </div>
             <div className="Pinterest">
               <FaYoutube/>
             </div>
             <div className="Instagram">
               <FaInstagram/>
             </div>
           </div>
           </div>
           
           </div>

         </div>
         <div className="lastOne row">
         <div className="col-lg-2 col-md-2 col-12" id="footerImg">
         <img className="img-fluid w-90" src={Logo} alt="" />
         </div>
         <div className="col-lg-3 col-md-3 col-12 mr-3 ml-3 " id="Justify">
           <h6 style={{fontSize:"0.9rem"}} className="text-white">
           Copyright © 2021 Turitor. {uz?"Все права защищены":"Barcha huquqlar himoyalangan"}.
           </h6>
         </div>
         <div className="col-lg-5 col-md-7 col-12 footer-last-one" >
           <div>
           <ul className="row d-flex justify-content-between" id="colorWhite">
             <li>{uz ? <a href="#">О нас</a> : <a href="#">Biz haqimizda</a>}</li>
             <li>  {uz ? <a href="#">Карьера </a> : <a href="#">Faoliyatlar</a>}</li>
             <li>{uz ? <a href="#">Ресурсный центр </a> : <a href="#">Manbalar markazi</a>}</li>
             <li className="korsatma"> {uz ? <a href="#">Гиды </a> : <a href="#">Ko'rsatmalar</a>}</li>
           </ul>
           </div>
         
         </div>
       </div>
       <a href="#" className="lastIcon" id="Scroll">
         <FaAngleUp/>
       </a>
       </div>
      
     </footer>
          </div>
           
        </div>
        </>
    )
}

export default FooterComponent
