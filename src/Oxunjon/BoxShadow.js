import React from 'react'
import {FaTh, FaUser, FaSearch, FaCartPlus, FaBars, FaXbox, FaExclamationCircle, FaEnvelope, FaTimes, FaWindowClose, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import DarkLogo from './images/dark-logo.png';

const BoxShadow = () => {
    const Iks=()=>{
        document.querySelector(".box-shadow").classList.toggle("next-shadow");
        document.querySelector(".div-aos").classList.toggle("next-div-aos")
        
        }
        const uz = useSelector(state => state)
    return (
        <div>
            <div className="box-shadow">
       <div className="div-aos">
         <div   className="container p-3">
           <div className="row p-3">
             <FaWindowClose onClick={Iks} style={{cursor:"pointer",color:"green",fontSize:"1.5rem"}} className=" col-12 merhu"/>
           </div>
           <div className="shad p-5">
             <div className="picture">
             <img className=" w-100" src={DarkLogo} alt="" />
             </div>
            {uz ?  <p className="text-secodary mt-3">
            Об этом курсе HTML и CSS - инструменты, необходимые для создания веб-сайта Кодирование для начинающих может показаться сложным. Однако начать с основ - отличный способ.
             </p> :  <p className="text-secodary mt-3">
             HTML VA CSS Kursalari sizga website yaratishingiz uchun vosita,ba'zida boshlang'ichlar uchun kod terish qiyindek tuyulishi mumkin.Lekin eng boshidan boshlash bu eng ajoyib yo'ldir
             </p>}
             <div className="admin">
               <FaEnvelope className="text-success mr-2"/>
               <p className="text-secondary">  
               turitor@admin.com
               </p>
             </div>
             <div className="contact">
               <FaPhone className="text-success mr-2" />
               <p className="text-secondary">
               +01145928421
               </p>
             </div>
             <div className="Icons">
               <div className="facebook">
                 <FaFacebookF/>
               </div>
               <div className="twitter">
                 <FaTwitter/>
               </div>
               <div className="linkined">
                 <FaYoutube/>
               </div>
               <div className="instagram">
                 <FaInstagram/>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
        </div>
    )
}

export default BoxShadow
