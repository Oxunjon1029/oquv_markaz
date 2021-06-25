import React from "react"
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Blog.css";
// import { createStore, combineReducers } from 'redux';
// import { user } from './reducers';
// import { localeReducer as locale } from 'react-localize-redux';
import { PersonFill,ClockFill,FileCodeFill,ArrowRight, Search} from 'react-bootstrap-icons';
import { Col, Container, Row, Image,Form, FormControl, Button, Breadcrumb} from "react-bootstrap"
import {
    Link
  } from "react-router-dom";
import { useSelector } from "react-redux";
const Blog = () =>{
    const uz = useSelector(state=>state)
    return(
        <div className='ikkinchi-xato'>
              <div className="about-header">
                <h1 className="a-header-name">{uz?"Блог":"Blog"}</h1>
                <Breadcrumb className="about-header-cumb">
                    <Breadcrumb.Item >
                        <Link to="/" style={{color: "black"}}>{uz?"Главная":"Bosh sahifa"}</Link>
                    </Breadcrumb.Item>  
                    <Breadcrumb.Item active href="#">
                        {uz?"Блог":"Blog"}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div> 
                   
       
        <section className="blog main-container">
            <Container>
                <Row>
                    <Col md={12} lg={8} sm={12}>
                        <article className="article-blog">
                            <div className="post=media post-image">
                                    <Link >
                                    <Image className="img-fluid" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/blog2-750x465.jpg" alt="python and Js Course may be online"/>
                                    </Link>
                            </div>
                            <div className="post-body">
                                <div className="entry-header">
                                    <div className="post-meta">
                                        <div className="post-author">
                                        <PersonFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">acuraInte</Link>
                                        </div>
                                        <div className="post-author">
                                            
                                            <p><ClockFill className="green-link clock post-icon"/>{uz?"Ноябрь":"Noyabr"} 25, 2019</p>
                                        </div>
                                        <div className="post-author">
                                        <FileCodeFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">Javascript</Link>
                                        </div>
                                    </div>
                                    <h2 className="entry-title"><Link to='/ikkinchi' className="black-link">{uz?"Курс Python и JS может быть онлайн":"Piton va JS Kurslari online bo'lishi mumkin"}</Link></h2>
                                </div>
                                <div className="post-content-blog">
                                    <p className="entry-content">
                                        {uz?"Создание программного обеспечения, специально предназначенного для разработки моих игр, игры - это явление в мире развлечений. Мировой рынок игр в настоящее время оценивается в 137,9 миллиарда долларов, а к 2021 году ожидается, что он достигнет 180 миллиардов долларов (источник, Newzoo). Программа предоставляется через Coursera,…":"O'yinlarni rivojlantirish o'yinimga moslashtirilgan dasturiy ta'minotni yaratish - bu dunyodagi ko'ngilochar hodisa.Jahon bozori hozirda $137.9 milliardga baholanmoqda,2021-yilga kelib $180 milliardni tashkil etadi (Manba,Newzoo). Dastur COursera orqali yetkazib beriladi"}
                                    </p>                                    
                                </div>
                            </div>
                        </article>
                        <article className="article-blog">
                            <div className="post=media post-image">
                                    <Link >
                                    <Image className="img-fluid" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/blog1-750x465.jpg"/>
                                    </Link>
                            </div>
                            <div className="post-body">
                                <div className="entry-header">
                                    <div className="post-meta">
                                        <div className="post-author">
                                        <PersonFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">acuraInte</Link>
                                        </div>
                                        <div className="post-author">
                                            
                                            <p><ClockFill className="green-link clock post-icon"/>{uz?"Ноябрь":"Noyabr"} 25, 2019</p>
                                        </div>
                                        <div className="post-author">
                                        <FileCodeFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">{uz?"Искусство и культура":"San'at va madaniyat"}</Link>
                                        </div>
                                    </div>
                                    <h2 className="entry-title"><Link to='/ikkinchi' className="black-link"></Link>
                                    {uz?"Расширить план бизнес-массы в других странах":"Boshqa mamlakatlarda biznesni kengaytiring"}
                                    </h2>
                                </div>
                                <div className="post-content-blog">
                                    <p className="entry-content">{uz?"Создание программного обеспечения, специально предназначенного для разработки моих игр, игры - это явление в мире развлечений. Мировой рынок игр в настоящее время оценивается в 137,9 миллиарда долларов, а к 2021 году ожидается, что он достигнет 180 миллиардов долларов (источник, Newzoo). Программа предоставляется через Coursera,…":"O'yinlarni rivojlantirish o'yinimga moslashtirilgan dasturiy ta'minotni yaratish - bu dunyodagi ko'ngilochar hodisa.Jahon bozori hozirda $137.9 milliardga baholanmoqda,2021-yilga kelib $180 milliardni tashkil etadi (Manba,Newzoo). Dastur COursera orqali yetkazib beriladi"}
                                    </p>
                                    
                                </div>
                            </div>
                        </article>
                        <article className="article-blog">
                            <div className="post=media post-image">
                                    <Link >
                                    <Image className="img-fluid" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/blog4-750x465.jpg"/>
                                    </Link>
                            </div>
                            <div className="post-body ">
                                <div className="entry-header">
                                    <div className="post-meta">
                                        <div className="post-author">
                                        <PersonFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">acuraInte</Link>
                                        </div>
                                        <div className="post-author">
                                            
                                            <p><ClockFill className="green-link clock post-icon"/>{uz?"Ноябрь":"Noyabr"} 25, 2019</p>
                                        </div>
                                        <div className="post-author">
                                        <FileCodeFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">Javascript</Link>
                                        </div>
                                    </div>
                                    <h2 className="entry-title"><Link to='/ikkinchi' className="black-link">{uz?"Эволюция визуального дизайна и ренессанс":"Vizual dizayn va uyg'onish evalyutsiyasi"}</Link></h2>
                                </div>
                                <div className="post-content-blog">
                                    <p className="entry-content">{uz?"Создание программного обеспечения, специально предназначенного для разработки моих игр, игры - это явление в мире развлечений. Мировой рынок игр в настоящее время оценивается в 137,9 миллиарда долларов, а к 2021 году ожидается, что он достигнет 180 миллиардов долларов (источник, Newzoo). Программа предоставляется через Coursera,…":"O'yinlarni rivojlantirish o'yinimga moslashtirilgan dasturiy ta'minotni yaratish - bu dunyodagi ko'ngilochar hodisa.Jahon bozori hozirda $137.9 milliardga baholanmoqda,2021-yilga kelib $180 milliardni tashkil etadi (Manba,Newzoo). Dastur COursera orqali yetkazib beriladi"}
                                    </p>                                    
                                </div>
                            </div>
                        </article>
                        <article className="article-blog">
                            <div className="post=media post-image">
                                    <Link >
                                    <Image className="img-fluid" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/blog8-750x465.jpg" alt="python and Js Course may be online"/>
                                    </Link>
                            </div>
                            <div className="post-body">
                                <div className="entry-header">
                                    <div className="post-meta">
                                        <div className="post-author">
                                        <PersonFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">acuraInte</Link>
                                        </div>
                                        <div className="post-author">
                                            
                                            <p><ClockFill className="green-link clock post-icon"/>{uz?"Ноябрь":"Noyabr"} 25, 2019</p>
                                        </div>
                                        <div className="post-author">
                                        <FileCodeFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">HTML</Link>
                                        </div>
                                    </div>
                                    <h2 className="entry-title"><Link to='/ikkinchi' className="black-link">{uz?"Психология может быть у вас закончена онлайн":"Psixologiya online tugatilishi mumkin"}</Link></h2>
                                </div>
                                <div className="post-content-blog">
                                    <p className="entry-content">{uz?"Создание программного обеспечения, специально предназначенного для разработки моих игр, игры - это явление в мире развлечений. Мировой рынок игр в настоящее время оценивается в 137,9 миллиарда долларов, а к 2021 году ожидается, что он достигнет 180 миллиардов долларов (источник, Newzoo). Программа предоставляется через Coursera,…":"O'yinlarni rivojlantirish o'yinimga moslashtirilgan dasturiy ta'minotni yaratish - bu dunyodagi ko'ngilochar hodisa.Jahon bozori hozirda $137.9 milliardga baholanmoqda,2021-yilga kelib $180 milliardni tashkil etadi (Manba,Newzoo). Dastur COursera orqali yetkazib beriladi"}
                                    </p>                                    
                                </div>
                            </div>
                        </article>
                        <article className="article-blog">
                            <div className="post=media post-image">
                                    <Link >
                                    <Image className="img-fluid" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/blog7-750x465.jpg"/>
                                    </Link>
                            </div>
                            <div className="post-body news-section-oxunjon">
                                <div className="entry-header">
                                    <div className="post-meta">
                                        <div className="post-author">
                                        <PersonFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">acuraInte</Link>
                                        </div>
                                        <div className="post-author">
                                            
                                            <p><ClockFill className="green-link clock post-icon"/>{uz?"Ноябрь":"Noyabr"} 10, 2019</p>
                                        </div>
                                        <div className="post-author">
                                        <FileCodeFill className="post-icon green-link"/>
                                        <Link to='/ikkinchi' className="green-link acurainte">HTML</Link>
                                        </div>
                                    </div>
                                    <h2 className="entry-title"><Link to='/ikkinchi' className="black-link">{uz?"Платформа устойчивости .NET, на которую нельзя перейти":".NET moslashuvchanlik doirasiga kira olmaysiz"}</Link></h2>
                                </div>
                                <div className="post-content-blog">
                                    <p className="entry-content">{uz?"Создание программного обеспечения, специально предназначенного для разработки моих игр, игры - это явление в мире развлечений. Мировой рынок игр в настоящее время оценивается в 137,9 миллиарда долларов, а к 2021 году ожидается, что он достигнет 180 миллиардов долларов (источник, Newzoo). Программа предоставляется через Coursera,…":"O'yinlarni rivojlantirish o'yinimga moslashtirilgan dasturiy ta'minotni yaratish - bu dunyodagi ko'ngilochar hodisa.Jahon bozori hozirda $137.9 milliardga baholanmoqda,2021-yilga kelib $180 milliardni tashkil etadi (Manba,Newzoo). Dastur COursera orqali yetkazib beriladi"}
                                    </p>                                    
                                </div>
                            </div>
                        </article>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <aside className="sidebar" role="complementary">
                            <div className="widget widget-search">
                            <Form inline className="w-100">
                                <FormControl type="text" placeholder={uz?"Поиск":"Qidirish"} className="search search-input"/>
                                <Button className="btn-search search"><Search className="search-icon"/></Button>
                            </Form>
                            </div>
                            <div className="widget widget-card">
                                <h4 className="widget-title">{uz?"Недавние Посты":"Yaqindagi Postlar"}</h4>
                                <ul className="ul-card">
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Курс Python и JS может быть онлайн":"Piton va JS kurslari online bo'lishi mumkin"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Python можно заполнить онлайн":"Piton  online tugatilishi mumkin"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">                                   
                                    {uz?"Расширить план бизнес-массы в других странах":"Boshqa mamlakatlarda biznesni kengaytiring"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Эволюция визуального дизайна и ренессанс":"Vizual dizayn va uyg'onish evalyutsiyasi"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Психология может быть у вас закончена онлайн":"Psixologiya online tugatilishi mumkin"}</Link></li>
                                </ul>
                            </div>
                            <div className="widget widget-card">
                                <h4 className="widget-title">{uz?"Недавние Посты":"Yaqindagi Postlar"}</h4>
                                <ul className="ul-card">
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Искусство и культура":"San'at va madaniyat"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">HTML</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">Javascript</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Python":"Piton"}</Link></li>
                                </ul>
                            </div>
                            <div className="widget widget-card">
                                <h4 className="widget-title">{uz?"Categories":"Kategoriyalar"}</h4>
                                <ul className="ul-card">
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Курс Python и JS может быть онлайн":"Piton va JS kurslari online bo'lishi mumkin"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Python можно заполнить онлайн":"Piton  online tugatilishi mumkin"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link"> {uz?"Расширить план бизнес-массы в других странах":"Boshqa mamlakatlarda biznesni kengaytiring"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Эволюция визуального дизайна и ренессанс":"Vizual dizayn va uyg'onish evalyutsiyasi"}</Link></li>
                                </ul>
                                </div>
                            <div className="widget widget-card">
                                <h4 className="widget-title">Meta</h4>
                                <ul className="ul-card">
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Авторизоваться":"Kirish"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Лента записей":"Yozuvlar tasmasi"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">{uz?"Лента комментариев":"Kommentlar tasmasi"}</Link></li>
                                    <li><Link to="/ikkinchi" className="black-link">WordPress.org</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    )
}
export default Blog