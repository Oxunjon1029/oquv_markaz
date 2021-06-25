import './css/CoursesComponent.css';
import logo from './icons/subject_icon1.png';
import arrow from './icons/dot_shape.svg';
import globus from './icons/subject_icon2.png';
import lupa from './icons/subject_icon3.png';
import pensil from './icons/subject_icon4.png';
import bank from './icons/subject_icon5.png';
import paint from './icons/subject_icon6.png';
import calc from './icons/subject_icon8.png';
import { useSelector } from 'react-redux';

export default function CoursesComponent(){
      const uz = useSelector(state=>state)
        return (
            <section>
                <div className="title-container">
                  <div className="fluid-box">
                      <div className="title_boxes">
                        <p>{uz?"#Топ категории":"#eng yaxshi toifalar"}</p>
                        <h1 className='title_big_text'>{uz?"Популярные темы":"Ommabop mavzular"}</h1>
                      </div>
                      <div className="title_boxes">
                        <p>{uz?"Онлайн-обучение предлагает новый способ изучать предметы, которые вам нравятся.":"Onlayn ta'lim sizga qiziqqan mavzularni o'rganishning yangi usulini taklif etadi."}</p>
                      </div>
                      <div className="title_boxes text-content">
                        <button><i className='fas fa-eye icon_plus'></i>{uz?"ПОСМОТРЕТЬ ВСЕ":"Hammasini ko'rish"}</button>
                      </div>
                   </div>
                </div>
            <div className='course-card-container'>
                <div className="course-category-container">

                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Информатика":"Kompyuter fanlari"}</h3>
                                <p>{uz?"1 Курсы":"1 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={globus} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Веб-разработка":"Web dasturlash"}</h3>
                                <p>{uz?"1 Курсы":"1 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={lupa} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Наука о данных":"Ma'lumotlar bazasi"}</h3>
                                <p>{uz?"1 Курсы":"1 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={pensil} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Инженерное дело":"Muhandislik"}</h3>
                                <p>{uz?"1 Курсы":"1 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={bank} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Архитектура":"Arxitektura"}</h3>
                                <p>{uz?"2 Курсы":"2 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={paint} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Арт и Дизайн":"San'at va dizayn"}</h3>
                                <p>{uz?"1 Курсы":"1 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={calc} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Бизнес-исследование":"BIznesni o'rganish"}</h3>
                                <p>{uz?"1 Курсы":"1 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className="course-category">
                        <div className='single-category'>
                            <span className="span-element"></span>
                            <div className="single-image-box">
                                <img src={bank} alt="logo"/>
                            </div>
                            <div className="single-box-content">
                                <h3>{uz?"Психология":"Psixologiya"}</h3>
                                <p>{uz?"6 Курсы":"6 kurs"}</p>
                            </div>
                            <img className='arrow' src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
}