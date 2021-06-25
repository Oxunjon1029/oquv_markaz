import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Contact/Contact.css'
import {Breadcrumb, Button, Card, Form} from 'react-bootstrap';
import {FaEnvelope, FaFacebookMessenger, FaHome, FaPhone, FaTelegram, FaTelegramPlane} from "react-icons/all";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Contact = () => {
    const uz = useSelector(state=>state)
        return(
            <React.Fragment>
             <div className="contact-header">
               <div className=" text-center  row">
                  <div className="col-12 w-100  ">
                  <div className="about-header">
                <h1 className="a-header-name">{uz?"Контакт":"Aloqa"}</h1>
                <Breadcrumb className="about-header-cumb">
                    <Breadcrumb.Item >
                        <Link to="/" style={{color: "black"}}>{uz?"Главная":"Bosh sahifa"}</Link>
                    </Breadcrumb.Item>  
                    <Breadcrumb.Item active href="#">
                        {uz?"Контакт":"Aloqa"}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
                  </div>
               </div>
             </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 w-100 text-center pb-3">
                            <p style={{marginLeft:'-40%',fontSize:'18px',fontFamily:'sans-serif',color:'#A2A2A7'}}>{uz?"#Контакт":"#Aloqa"}</p>
                            <h2 className="get-in mb-4">{uz?"Свяжись с нами":"Biz bilan bog'lanish"}</h2>
                        </div>
                        <div className="col-lg-6 col-12 w-100 text-center pb-3">
                            <p style={{fontSize:'16px',fontFamily:'sans-serif'}}>{uz?"Дайте нам знать, что вы хотите.":"Bizga nimani xohlashingizni bildiring.Biz "}<br/> {uz?"помогать людям учиться, расти и добиваться большего в жизни":"odamlarga yordam beramiz o'rganishni,o'sihni va hayotda ko'prog'iga erishishni"}</p>
                        </div>
                    </div>
                    <div className="row w-100 mb-4 mt-4">
                        <div className="col-lg-4 col-12 w-100">
                            <Card style={{ width: '100%',height:'90%' }} className="first-card p-2">
                                <Card.Body>
                                    <Card.Text>
                                       <div className="row">
                                           <div className="col-4 w-100 text-center">
                                               <div className="card-text-1 text-center p-2 pt-1">
                                                   <h4 style={{color:'#273C66'}}><FaHome/></h4>
                                               </div>
                                           </div>
                                           <div className="col-8 w-100">
                                               <p style={{fontSize:'18px',fontFamily:'sans-serif',color:'#A2A2A7'}}>{uz?"Посетить нас:":"Bizga tashrif buyuring:"}</p>
                                               <p className="w-100"><strong>{uz?"70-80 Аппер-Сент-Норвич NR2 1LT":"70-80 Yuqori St Norwich NR2 1LT"}</strong></p>
                                           </div>
                                       </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-12 w-100">
                            <Card style={{ width: '100%',height:'90%' }} className="first-card p-2">
                                <Card.Body>
                                    <Card.Text>
                                        <div className="row">
                                            <div className="col-4 w-100 text-center">
                                                <div className="card-text-1 text-center p-2 pt-1">
                                                    <h4 style={{color:'#273C66'}}><FaPhone/></h4>
                                                </div>
                                            </div>
                                            <div className="col-8 w-100">
                                                <p style={{fontSize:'18px',fontFamily:'sans-serif',color:'#A2A2A7'}}>{uz?"Телефон:":"Telefon:"}</p>
                                                <p className="w-100"><strong>+03601 885399</strong></p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card></div>
                        <div className="col-lg-4 col-12 w-100">
                            <Card style={{ width: '100%',height:'90%' }} className="first-card p-2">
                                <Card.Body>
                                    <Card.Text>
                                        <div className="row">
                                            <div className="col-4 w-100 text-center">
                                                <div className="card-text-1 text-center p-2 pt-1">
                                                    <h4 style={{color:'#273C66'}}><FaEnvelope/></h4>
                                                </div>
                                            </div>
                                            <div className="col-8 w-100">
                                                <p style={{fontSize:'18px',fontFamily:'sans-serif',color:'#A2A2A7'}}>{uz?"Электронное письмо:":"Pochta:"}</p>
                                                <p className="w-100"><strong>info@turitor.com</strong></p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5 ">
                        <div className="col-lg-8 col-12 w-100">
                            <div className="justify-content-center w-75" style={{margin:'0 auto'}}>
                                <img className="w-100 d-flex " src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2020/01/contact_image.png" alt="error"/>
                            </div>
                            </div>
                        <div className="col-lg-4 col-12 w-100 news-section-oxunjon">
                            <Card style={{ width: '100%',height:'100%' }} className="first-card p-2">
                                <Card.Body>
                                    <Card.Text>
                                       <div>
                                           <Form>
                                                <div className="text-left mb-3 ml-4">
                                                    <p className="form-title-control"><strong> {uz?"Отправили нам сообщение":"Bizga xabarni jo'nating"}</strong></p>
                                                </div>
                                               <Form.Group hover={false} controlId="formBasicName" className="w-75 form-contact ml-4" >
                                                   <Form.Control  type="text" placeholder={uz?"Имя":"Name" }className="contact-form-control"   />
                                               </Form.Group>
                                               <Form.Group controlId="formBasicEmail" className="w-75 form-contact ml-4">
                                                   <Form.Control type="email" placeholder={uz?"Электронное письмо":"Email"} className="contact-form-control" />
                                               </Form.Group>

                                               <Form.Group controlId="formBasicPhone" className="w-75 form-contac ml-4">
                                                   <Form.Control type="number" placeholder={uz?"Телефон":"Phone"}  className="contact-form-control"/>
                                               </Form.Group>
                                               <div className="send-button btn ml-4" type="submit">
                                                   <FaTelegramPlane className="mr-2"/>{uz?"Послать":"Yuborish"}
                                               </div>
                                           </Form>
                                       </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    
  
}
export default Contact