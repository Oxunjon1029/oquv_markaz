import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Oxunjon/images/logo-tritor.jpg';
import FooterComponent from './Oxunjon/footer/FooterComponent';
import SignIn from './Oxunjon/SignIn/SignIn';
import {useSelector,useDispatch} from 'react-redux';
import {UzLanguage,Enlanguage} from "./Oxunjon/actions/action";
import { GetLanguage } from './Oxunjon/Utiliti';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import About from './Avazbek/About (2)';
import AvazbekCourses from './Avazbek/Courses(2)';
import Contact from './contact/Contact/Contact';
import Subjects from './Avazbek/testinput/Subjects';
import Test from './components/Test/Test';
import { TestProvider } from './components/Test/TestContext';
import { ToggleProvider } from './components/Test/ToggleContext';
import { ToggleProvider2 } from './components/Test/ToggleContext2';
import { SignInContext} from './Oxunjon/SignIn/SignInContext';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import Pages from './pages/components/Pages';
import Blog from './blogs_folder/Blog';
import adminCoursePanel from './HomepageComponents/Akmal';
import './components/HeaderNew/HeaderNew.css'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, FaBraille,FaFacebookF,FaLinkedinIn,FaPhone,FaUser, MdEmail } from 'react-icons/all';
import './components/HeaderNew/HeaderNew.css';


const App = () => {
  const [isSign,setSign]=useContext(SignInContext)
  const [isOpen,setOpen]=useState(false)
  const [isOpen2,setOpen2]=useState(false)
  const open=()=>{
      setOpen(!isOpen)
  }
  const open2=()=>{
      setOpen2(!isOpen2)
  }

useEffect(() => {
  
  if(GetLanguage() ){
    dispatch(Enlanguage())
   setTillar("Eng")
 
  }else{
    dispatch(UzLanguage())
    setTillar("Uz")
  }
  
}, []);

const uz = useSelector(state => state)

const dispatch = useDispatch()

const[tillar,setTillar]=useState('Eng')
const Changer=(e)=>{
  setTillar(e.target.value)

    if(tillar==='Uz'){
      dispatch(Enlanguage())

    }
    else if(tillar==='Eng'){
      dispatch(UzLanguage())

    }
}

  return (
    
    <Router>
      <ToastContainer/>
    <div className="App">
   
    <div className='main-header-new-version'>
            <header className={uz?'new-main-head':'new-main-head new-main-head-uz'}>
                <div className="menus-side-new">
                    <Link to='/'><div id="logo-site"> <img src={logo} alt="logo" /></div></Link>
                    <Link to='signin'> <div className="get-online-test"> <FaBraille size='26' /> <span>{uz?"Онлайн-тест":"On-layn test"}</span></div></Link>
                   
                        
                </div>
                <div className={isOpen2?'menu-new-toggler menu-new-toggler-expanded':'menu-new-toggler'}>
                <button onClick={open2}  className={isOpen2?'bar2 opened':'bar2'}>
                                <svg width="36" height="36" viewBox="0 0 100 100">
                                    <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path class="line line2" d="M 20,50 H 80" />
                                    <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </button>
                            <ul className="new-header-menu-list">
                            <li className='get-online-test2'>
                                  <Link onClick={open2} to="signin"><div className="get-online-test3"> <FaBraille size='26' /> <span>{uz?"Онлайн-тест":"On-layn test"}</span></div></Link>
                            </li>
                            <li>
                                 <Link onClick={open2} to="/">{uz?'Дом':'Bosh Sahifa'}</Link>
                            </li>
                            <li><Link onClick={open2} to="/about">{uz?'О':'Biz haqimizda'}</Link></li>
                            <li><Link onClick={open2} to="/course">{uz?'Курс':'Kurslar'}</Link></li>
                            <li><Link onClick={open2} to="/pages">{uz?'Страницы':'Boshqa'}</Link></li>
                            <li><Link onClick={open2} to="/blog">{uz?'Блог':'Blog'}</Link></li>
                            <li><Link onClick={open2} to="/contact">{uz?'Контакт':'Aloqa'}</Link></li>
                            
                        </ul>
                            <div className="login-side-new">
                                <div className="user-icon-new"> <FaUser style={{color:'white'}}/></div>
                                <select value={tillar} onChange={Changer} className="language-select-new">
                                    <option value="Eng">Рус</option>
                                    <option value="Uz">Uzb</option>
                                </select>
                                <button onClick={open}  className={isOpen?'bar opened close-hamburger':'bar close-hamburger'}>
                            <svg width="36" height="36" viewBox="0 0 100 100">
                                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                <path class="line line2" d="M 20,50 H 80" />
                                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                            </svg>
                        </button>
                            </div>
                            
                </div>
                
            </header>
            <div className={isOpen?'header-about-new header-about-opened':'header-about-new'}>
                                <div className='header-about-new-container'>
                                    <span onClick={open} className="close-about-header"> <AiOutlineClose size='24'/></span>
                                    <div className="header-about-new-box">
                                        <div className="logo-image-new"> <img src='https://demo.themewinter.com/wp/turitors/wp-content/uploads/2020/02/dark-logo.png' alt="logo" /></div>
                                        <p className='about-this-course'>{uz?"Об этом курсе HTML и CSS - инструменты, необходимые для создания веб-сайта Кодирование для начинающих может показаться сложным. Однако начать с основ - отличный способ.":"Bu kurs haqida.HTML va CSS - bu yangi boshlovchilar uchun veb-saytlarni kodlashni yaratish uchun zarur bo'lgan vositalar,ammo asoslardan boshlash juda yaxshi usul"}</p>
                                        <div className="header-social-box">
                                            <p><MdEmail size='24' style={{color:'#14A67D'}}/> <span>turitior@gmail.com</span></p>
                                            <p><FaPhone size='20' style={{color:'#14A67D'}}/> <span>+9998905685896</span></p>
                                            <div><span><FaFacebookF style={{color:'white'}}/></span><span style={{backgroundColor:'#2AA3EF'}}><AiOutlineTwitter style={{color:'white'}}/></span><span style={{backgroundColor:'#1178B3'}}><FaLinkedinIn style={{color:'white'}}/></span> <span style={{backgroundColor:'#E8715C'}}><AiOutlineInstagram style={{color:'white'}}/></span> </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
        </div>
    

     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/signin' component={SignIn}/>
       <Route path='/about' component={About}/>
       <Route path='/course' component={AvazbekCourses}/>
       <Route path='/contact' component={Contact}/>
       <Route path='/pages' component={Pages}/>
       <Route path='/blog' component={Blog}/>
       <Route path='/akmal' component={adminCoursePanel}/>
       {/* {
         isSign? <Route path='/select' component={Subjects}/>:<Route path='/select' component={SignIn}/>
       } */}
       {
         localStorage.getItem('token')? <Route path='/select' component={Subjects}/>:<Route path='/select' component={SignIn}/>
       }
       


       <TestProvider>
          <ToggleProvider>
            <ToggleProvider2>
            <Route path='/test' component={Test}/>
              </ToggleProvider2>
          </ToggleProvider>
      </TestProvider>

     </Switch>




    <FooterComponent/>    
    </div>
    </Router>
  )
}

export default App

