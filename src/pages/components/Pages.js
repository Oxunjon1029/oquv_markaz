import React, { useState } from "react";
import "./Pages.css";
import {
  Card,
  Col,
  Container,
  Row,
  Modal,
  Button,
  Accordion,
  Breadcrumb,
} from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Pages() {
  AOS.init({
    duration: 3000,
  });
const uz = useSelector(state=>state)
  const [show, setshow] = useState(false);
  const handleClose = () => {
    setshow(false);
  };
  const handleShow = () => {
    setshow(true);
  };

  

  return (
    <div className="z-index">
      <div className="about-header">
                <h1 className="a-header-name">{uz?"Pages":"Boshqa"}</h1>
                <Breadcrumb className="about-header-cumb">
                    <Breadcrumb.Item >
                        <Link to="/" style={{color: "black"}}>{uz?"Главная":"Bosh sahifa"}</Link>
                    </Breadcrumb.Item>  
                    <Breadcrumb.Item active href="#">
                        {uz?"Страницы":"Boshqa"}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
      <Container className="container23">
      
        <Row className="mytop">
          <Col lg="5" className="col6" data-aos="zoom-in">
            <h1 className="OurGoal">
              {uz?"Наша цель - сделать так, чтобы онлайн-образование работало для всех.":"Bizning maqsadimiz onlayn ta'limni barcha uchun ishlashi ta'minlashdir."}
            </h1>
            <p className="edicationp">
             {uz?"Сегодня у нас нет ответов на все вопросы, но мы считаем, что, собирая различные квалифицированные специалисты, учителей и других людей, можно изменить это состояние.":"Bizda barcha javoblar yo'q bugun,ammo biz turli xil malakali professerlar,o'qituvchilar va boshqalarni yig'ish orqali vaziyatni o'zgartirishimizga ishonamiz"}
            </p>
            <Button variant="success" className="button">
              {" "}
              <BsPlusCircle className="BsPlusCircle" /> {uz?"ВОЗМОЖНОСТЬ":"IMKONIYAT"}
            </Button>{" "}
          </Col>
          <Col lg="6"  data-aos="zoom-in-up">
            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/intro_image.png" alt='error'/>
          </Col>
        </Row>
      </Container>

      <Container fluid className="fluid">
        <Container>
          <Row className="row-2 justify-content-center">
            <Col lg="6" md="6" className="">
              <Card className="card1">
                <h5 className="title5">{uz?"#Преимущества":"#Foydalar"}</h5>
                <h2 className="title2">{uz?"Вот во что мы верим":"Mana bu biz ishonadiganimiz"}</h2>
              </Card>
            </Col>
            <Col lg="6" md="6">
              <Card className="card2">
                <p className="fonts">
                  {uz?"Узнайте, как предвидеть и":"Qanday qilib bashorat qilish va"}<br /> {uz?"адаптироваться к последним тенденциям и цифровым":"moslashish kerakligini aniqlang eng so'nggi trendlar raqamli yangiliklarga"}
                </p>
              </Card>
            </Col>
          </Row>

          <Row className="row-3">
            <Col lg="4" md="6">
              <Card>
                <Card.Img variant="top" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/feature-icon1.png" />
                <Card.Body>
                  <Card.Title>{uz?"Лидерство":"Rahbarlik"}</Card.Title>
                  <Card.Text>
                   {uz?" Наши лидеры демонстрируют порядочность, честность и открытость, руководствуясь нашими ценностями.":"Bizning rahbarlarimiz rostgo'ylik,hallollik va ochiqlikni namoyish etad.Bizning qadriyatlardan kelib chiqib."}
                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <Card.Img variant="top" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/feature-icon2.png" />
                <Card.Body>
                  <Card.Title>{uz?"Empowerment":"Vakolat"}</Card.Title>
                  <Card.Text>
                    {uz?"Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.":"Karta sarlavhasi asosida yaratish va karta tarkibining asosiy  qismini tashkil qilish uchun tezkor matnli matn "}
                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <Card.Img variant="top" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/feature-icon3.png" />
                <Card.Body>
                  <Card.Title>{uz?"Социальное влияние":"Ijtimoiy ta'sir"}</Card.Title>
                  <Card.Text>
                  {uz?"Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.":"Karta sarlavhasi asosida yaratish va karta tarkibining asosiy  qismini tashkil qilish uchun tezkor matnli matn "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <Card.Img variant="top" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/feature-icon4.png" />
                <Card.Body>
                  <Card.Title>{uz?"Betterment":"Yaxshilanish"}</Card.Title>
                  <Card.Text>
                  {uz?"Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.":"Karta sarlavhasi asosida yaratish va karta tarkibining asosiy  qismini tashkil qilish uchun tezkor matnli matn "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <Card.Img variant="top" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/feature-icon5.png" />
                <Card.Body>
                  <Card.Title>{uz?"Deep Honesty":"Kuchli vijdon"}</Card.Title>
                  <Card.Text>
                  {uz?"Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.":"Karta sarlavhasi asosida yaratish va karta tarkibining asosiy  qismini tashkil qilish uchun tezkor matnli matn "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <Card.Img variant="top" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/feature-icon6.png" />
                <Card.Body>
                  <Card.Title>{uz?"Solidarity":"birdamlik"}</Card.Title>
                  <Card.Text>
                  {uz?"Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.":"Karta sarlavhasi asosida yaratish va karta tarkibining asosiy  qismini tashkil qilish uchun tezkor matnli matn "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row className="row-4 my-5">
          <Col lg="12">
            <Card.Img variant="top" height="500px" style={{objectFit: "cover"}} src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/video_image1.jpg" />
            <Card.Body className="cardbody" onClick={handleShow}>
              <FaYoutube className="icons" />
            </Card.Body>
          </Col>
        </Row>
        <Row className="justify-content-center row-5 py-5">
          <Col lg="10">
            <p>
             {uz?" Мы создали ведущую в мире платформу для онлайн-обучения, и перед нами открываются самые большие возможности. Став членом нашей команды, вы повысите свою карьеру, присоединитесь к инклюзивному сообществу и измените жизнь, получив доступ к лучшему в мире образованию.":"Biz internetda o'qish uchun dinyodagi yetakchi platformani yaratdik va eng katta imkoniyatlarni kutmnoqdamiz.Bizning jamoamizning a'zosi sifatida siz o'zingizning martabangizni ko'tarasiz,unlkusiv hamjamiyatga qo'shilasiz va dunyoning eng yaxshi ta'limiga kirish orqali hayotni o'zgartiraman."}
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="pages-problem">
        <Row className="py-5 row-6">
          <Col lg="4" md="4">
            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/image1-300x284.png" alt='error' />
          </Col>

          <Col lg="4" md="4">
            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/image2-296x300.png" alt='error'/>
          </Col>
          <Col lg="4" md="4">
            <img src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/image3-300x294.png" alt='error'/>
          </Col>
        </Row>
        <Row className="row-2 justify-content-center">
          <Col lg="4" className="d-flex justify-content-lg-center">
            <Card className="card1">
              <h5 className="title5">{uz?"#v":"#Jamoa"}</h5>
              <h1 className="title2">{uz?"Видение лидерской команды":"Ko'rish qobiliyatiga ega bo'lgan yetakchilik jamoasi"}</h1>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card2">
              <p className="">
               {uz?" Наши руководители подают пример и направляют нас к достижению великих результатов каждый день. Онлайн-обучение предлагает новый способ исследования.":"Bizning rahbarlarimiz har kuni ulkan ishlarni amalga oshirishda bizga o'rnak bo'ladilar.Onlayn o'rganish kashf qilishning yangi usulini taklif etadi."}
              </p>
            </Card>
          </Col>
        </Row>
        <Row>


          {/* React slick Component */}
          {/* <SliderComponent /> */}



        </Row>
      </Container>

      <Container>
        <Row className="myfooter news-section-oxunjon">
          <Col lg="5">
            <Row className="row-22">
              <Col lg="10" className="d-flex justify-content-lg-center my-3">
                <Card>
                  <h5 className="title5">#FAQ</h5>
                  <h1 className="title2">{uz?"A few frequently asked questions":"Bir qancha tez-tez so'raladigan savolar"}</h1>
                </Card>
              </Col>
              <Col lg="10">
                <Card className="">
                  <p className="fonts">
                  {uz?"Узнайте, как предвидеть и":"Qanday qilib bashorat qilish va"}<br /> {uz?"адаптироваться к последним тенденциям и цифровым":"moslashish kerakligini aniqlang eng so'nggi trendlar raqamli yangiliklarga"}

                  </p>
                </Card>
              </Col>
            </Row>
            <img width="80%" src="https://demo.themewinter.com/wp/turitors/wp-content/uploads/2020/01/contact_image.png" />
          </Col>
          <Col lg="7" className="my-5">
            <Accordion>
              <Card.Header>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h3>
                      {" "}
                      {uz?"Как долго длится мой бесплатный маршрут?":"Mening tekin sinov mashg'ulotim qancha davom etadi?"}{" "}
                      <BsCheck className="checkicons" />
                    </h3>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {" "}
                    <p>
                      {uz?" Когда вы подпишетесь на личную пробную версию, вы получите 10 дней и 200 минут просмотра. Если ваша пробная версия не будет отменена в течение 10 дней, пробная версия будет преобразована в платную подписку, которая будет автоматически продлеваться до тех пор, пока подписка не будет отменена.":"Shaxsiy sinov uchun ro'yxatdan o'tganingizda, siz 10 ga ega bo'lasiz kun va 200 daqiqa ko'rish. Agar sizning sudingiz bo'lmasa 10 kun ichida bekor qilingan bo'lsa, sud jarayoni a ga aylanadi gacha avtomatik yangilanadigan pulli obuna obuna bekor qilindi."}
                     {" "}
                      <a href="#" className="">
                        {" "}
                        {uz?"кликните сюда":"Shu yerga bosing"}{" "}
                      </a>{" "}
                      {uz?"для получения дополнительной информации о нашей тропе":"bizning sinov mashg'uloltimizga oid ko'proq ma'lumot uchun"}
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card.Header>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <h3>
                      {" "}
                     {uz?"Буду ли я платить за бесплатную тропу":"Men hozir tekin sinov mashg'ulotiga yozilsam bo'ladimi"}{" "}
                      <BsCheck className="checkicons" />
                    </h3>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>
                     {uz?" Далеко-далеко, за словом «горы», вдали от стран Вокалия и Консонантия, живет слепой текст Раздельно они живут в Роще закладок прямо на берегу":"Uzoqda, tog'lar so'zining orqasida, Vokaliya va Consonantia mamlakatlari, u erda ko'rlar yashaydi matnlar. Alohida ular Bookmarksgrove-da yashaydilar qirg'oq"}
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <h3>
                      {" "}
                      {uz?"Могу ли я отменить в любое время?":"Istalgan vaqtda bekor qilsam bo'ladimi?"}<BsCheck className="checkicons" />
                    </h3>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {" "}
                    <p>
                    {uz?" Далеко-далеко, за словом «горы», вдали от стран Вокалия и Консонантия, живет слепой текст. Раздельно они живут в Роще закладок прямо на берегу.":"Uzoqda, tog'lar so'zining orqasida, Vokaliya va Consonantia mamlakatlari, u erda ko'rlar yashaydi matnlar. Alohida ular Bookmarksgrove-da yashaydilar qirg'oq"}
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <h3 className="w-100">
                      {" "}
                  {uz?"Какие есть бизнес-планы Turitor?":"Turitorning keyingi rejalari qanday?"}{" "}
                      <BsCheck className="checkicons" />
                    </h3>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    <p>
                    {uz?" Далеко-далеко, за словом «горы», вдали от стран Вокалия и Консонантия, живет слепой текст. Раздельно они живут в Роще закладок прямо на берегу.":"Uzoqda, tog'lar so'zining orqasida, Vokaliya va Consonantia mamlakatlari, u erda ko'rlar yashaydi matnlar. Alohida ular Bookmarksgrove-da yashaydilar qirg'oq"}
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Modal
        className="modal-xato"
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/PcsVCSKBe04?start=21"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}
