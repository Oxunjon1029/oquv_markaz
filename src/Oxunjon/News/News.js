import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import { Button, Card } from 'react-bootstrap';
import First from './img/1.jpg';
import Second from './img/2.jpg';
import {HiOutlinePlusCircle} from 'react-icons/hi'
import { useSelector } from 'react-redux';
import axios from 'axios';
const News = () => {
    const uz = useSelector(state => state);
    const [news,setNews] = useState("");

useEffect(() => {
  getNews();

}, [])

const getNews = () =>
{
    axios.get(" https://educational-center-web-app.herokuapp.com/api/client/blog/all").then(res=>{
        if(res){
            setNews(res.data.data.blogs);
            
        }
    })
    
}

console.log(news);
    return (
        <div>
              {/* <div className="container mt-3" id="balandlik">
                    <div className="w-90">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12" id="border-right">
                               {uz ?  <p className="new">#News</p> : <p className="new">#Xabarlar</p>}
                                {uz ? <h1 className="events">News & Events</h1>  : <h1 className="events">Xabarlar va Hodisalar</h1>}
                            </div>
                            <div className="col-lg-7 col-md-6 col-12 p-3">
                                {uz ? <p className="discover">Discover how to anticipate and adapt to the latest trends <br/> and digital info</p> : <p className="discover">Eng so'nggi tendentsiyalarni qanday kutish va unga moslashishni o'rganing <br/> va raqamli xabar</p>}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                          {
                               news.map(item=>(
                                 
                                <Card className="col-lg-4 col-md-12 col-12" id="cards" style={{ width: '18rem' }}>
                                <Card.Img id="card-image" variant="top" src={"https://educational-center-web-app.herokuapp.com/api/client/file/preview"+`${item.attachment.hashId}`}/>
                                <Card.Body>
                                    <Card.Title>
                                        <ul className="row d-flex justify-content-around round">
                                        <li>{uz?"JavaScript":"JavaScript"}</li>
                                            <li>{uz?item.createAt:item.createAt}</li>
                                        </ul>
                                    </Card.Title>
                                    <Card.Text className="p-2 text">
                                    <a href="#">{uz?item.titleUz:item.titleRu}</a>
                                    </Card.Text>
                                    <Card.Text  className="p-2 text">
                                    <p className="text-secondary">{uz?"Crepting software tailored to my games development gaming is a someting":"O'yinlarni rivojlantirish o'yinlariga moslashtirilgan Crepting dasturiy ta'minoti bu narsa"}</p>
                                    
                                    </Card.Text>
                                    <Button  id="card-button" variant="btn"><HiOutlinePlusCircle style={{fontSize:"1.2rem"}}/> {uz?"READ MORE":"KO'PROQ O'QISH"}</Button>
                                    
                                </Card.Body>
                                <div>
                                      
                                  </div>
                                </Card>
                              ))
                          }
                       </div>
                   
                    
                </div> */}
                    
            <div className="container mt-3 ">
                <div className="w-90">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12" id="border-right">
                           {uz ?  <p className="new">#Новости</p> : <p className="new">#Xabarlar</p>}
                            {uz ? <h1 className="events">Новости и события</h1>  : <h1 className="events">Xabarlar va Hodisalar</h1>}
                        </div>
                        <div className="col-lg-7 col-md-6 col-12 p-3">
                            {uz ? <p className="discover ">Узнайте, как предвидеть последние тенденции и адаптироваться к ним <br/> и цифровая информация</p> : <p className="discover">Eng so'nggi tendentsiyalarni qanday kutish va unga moslashishni o'rganing <br/> va raqamli xabar</p>}
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="row mt-5 news-section-oxunjon">
                    <Card className="col-lg-4 news-xato col-md-12 col-12" id="cards" style={{ width: '18rem' }}>
                    <Card.Img id="card-image" variant="top" src={First} />
                    <Card.Body>
                        <Card.Title>
                            <ul className="row d-flex justify-content-around round">
                               {uz ?  <li>Javascript</li> :  <li>Javascript</li>}
                                {uz ? <li>25,Ноябрь,2019</li> : <li>25,Noyabr,2019</li>}
                            </ul>
                        </Card.Title>
                        <Card.Text className="p-3 text">
                        {uz ? <a href="#">Курс Python и JS может быть онлайн</a> : <a href="#">Python va JS Kurslari online bo'lishi mumkin</a>}
                        </Card.Text>
                        <Card.Text  className="p-3 text">
                        {uz ? <p className="text-secondary">Создание программного обеспечения, адаптированного к моей разработке игр, - это кое-что</p> : <p className="text-secondary">O'yinlarni rivojlantirish o'yinlariga moslashtirilgan Crepting dasturiy ta'minoti bu narsa</p>}
                        </Card.Text>
                        {uz ?  <Button  id="card-button" variant="btn"><HiOutlinePlusCircle style={{fontSize:"1.2rem"}}/> ЧИТАТЬ ДАЛЕЕ</Button> : <Button  id="card-button" variant="btn"><HiOutlinePlusCircle style={{fontSize:"1.2rem"}}/> KO'PROQ O'QISH</Button>}
                    </Card.Body>
                    </Card>
                    <Card className="col-lg-4 news-xato col-md-12 col-12 mr-4" id="cards"  style={{ width: '18rem' }}>
                    <Card.Img id="card-image" variant="top" src={Second} />
                    <Card.Body>
                        <Card.Title>
                        <ul className="row d-flex justify-content-around round">
                                <li>Javascript</li>
                                <li>25,{uz?"Ноябрь":"Noyabr"},2019</li>
                            </ul>
                        </Card.Title>
                        <Card.Text  className="p-3 text">
                       {uz ?  <a href="#">Python может быть завершен онлайн</a> :  <a href="#">Python online tugatilishi mumkin</a>}
                        </Card.Text>
                        <Card.Text  className="p-3 text">
                        {uz ? <p className="text-secondary">Создание программного обеспечения, адаптированного к моей разработке игр, - это кое-что</p> : <p className="text-secondary">O'yinlarni rivojlantirish o'yinlariga moslashtirilgan Crepting dasturiy ta'minoti bu narsa</p>}

                        </Card.Text>
                       
                        {uz ?  <Button  id="card-button" variant="btn"><HiOutlinePlusCircle style={{fontSize:"1.2rem"}}/> ЧИТАТЬ ДАЛЕЕ</Button> : <Button  id="card-button" variant="btn"><HiOutlinePlusCircle style={{fontSize:"1.2rem"}}/> KO'PROQ O'QISH</Button>}
                    </Card.Body>
                    </Card>
               
               
                    <div className="col-lg-3  col-md-12 col-12 p-3" >
                        <div className="width">
                            <ul className="row d-flex justify-content-around after "> 
                                <li className="d-flex li li-2">
                                {uz ? <p>Ноя</p> : <p>Noy</p>}
                                    <h2 style={{fontWeight:"bolder"}}>16</h2>
                                </li>
                                <li className="d-flex li li-3">
                                   {uz ?  <p className="music">Музыка и искусство</p> :  <p className="music">Musiqa va San'at</p>}
                                  {uz ?   <a href="#">Борьба с климатическим кризисом во всем мире</a> :   <a href="#">Butun dunyoda iqlim inqiroziga qarshi kurash</a>}
                                </li>
                            </ul>
                            <ul className="row d-flex justify-content-around after"> 
                                <li className="d-flex li li-2">
                                    {uz ? <p>Nov</p> : <p>Noy</p>}
                                    <h2 style={{fontWeight:"bolder"}}>16</h2>
                                </li>
                                <li className="d-flex li li-3">
                                {uz ?  <p className="music">Музыка и искусство</p> :  <p className="music">Musiqa va San'at</p>}
                                {uz ?   <a href="#">Преобразование наших научных объектов</a> :   <a href="#">Ilmiy muassasalarimizni o'zgartirish</a>}    
                                </li>
                            </ul>
                            <ul className="row d-flex justify-content-around after"> 
                                <li className="d-flex li li-2">
                                {uz ? <p>Ноя</p> : <p>Noy</p>}
                                    <h2 style={{fontWeight:"bolder"}}>16</h2>
                                </li>
                                <li className="d-flex li li-3">
                                {uz ?  <p className="music">Музыка и искусство</p> :  <p className="music">Musiqa va San'at</p>}
                                {uz ?   <a href="#">Помогая изменить мир</a> :   <a href="#">Dunyoni o'zgartirishga yordam berish</a>}   
                                </li>
                            </ul>
                            <ul className="row d-flex justify-content-around after"> 
                                <li className="d-flex li li-2">
                                {uz ? <p>Фев</p> : <p>Fev</p>}
                                    <h2 style={{fontWeight:"bolder"}}>28</h2>
                                </li>
                                <li className="d-flex li li-3">
                                {uz ?  <p className="music">Музыка и искусство</p> :  <p className="music">Musiqa va San'at</p>}
                                {uz ?   <a href="#">Turitor Обучение JavaScript</a> :   <a href="#">Turitor JavaScript-ni o'qitish</a>} 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
           
            </div>
        </div>
    )
}

export default News
