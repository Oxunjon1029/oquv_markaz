import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';
const AdminCoursePanel = () => {
    const uz = useSelector(state=>state)
    const [List, setList] = useState([])
    const [coursesList,setCoursesList]=useState([])
    const [show, setShow] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState(null);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const editClose = () => setEditModal(false);
   const editShow = () => setEditModal(true);

    const CourseList = () =>{
        axios({
            url:'https://educational-center-web-app.herokuapp.com/api/admin/course/all',
            method:'get'
        }).then(res=>{
            console.log(res.data.data.courses)
            setCoursesList(res.data.data.courses)
            // setList(res.data.data.courses)
        })
    }

    useEffect(() => {
      CourseList()
    },[])  

    const PostCourse = () =>{
      axios.post('https://educational-center-web-app.herokuapp.com/api/admin/course/add',
      {
        titleUz : document.querySelector('#addTitleUz').value,
        titleRu : document.querySelector('#addTitleRu').value,
        descriptionUz : document.querySelector('#addDescriptionUz').value,
        descriptionRu : document.querySelector('#addDescriptionRu').value,
        durationTime : document.querySelector('#addDuration').value
      })
      .then(res =>console.log(res))
      .catch(res => console.log(res))
        handleClose(); 
    }

    const Edit=(id)=>{
        editShow();
      axios.get(`https://educational-center-web-app.herokuapp.com/api/admin/course/${id}`)
      .then(res=>{
      
        // setEditId(res.data.data.courses.id)
      });
    }
    const EditTutor=()=>{
      axios.put(`https://educational-center-web-app.herokuapp.com/api/admin/course/${editId}`,{
        titleUz : document.querySelector('#putTitleUz').value,
        titleRu : document.querySelector('#putTitleRu').value,
        descriptionUz : document.querySelector('#putDescriptionUz').value,
        descriptionRu : document.querySelector('#putDescriptionRu').value,
        durationTime : document.querySelector('#putDuration').value
      }).then(res=>{
        CourseList()
        console.log(res)
      })
      .catch(res=>console.log(res))
        editClose();
    }
    const Delete =(id) => {
        axios.delete(`https://educational-center-web-app.herokuapp.com/api/admin/course/${id}`)
        .then(()=>toast.danger(uz?"Deleted":"O'chirildi"))
        .catch(res=> console.log(res))
    }
    const korsat=()=>{
        console.log(coursesList);
    }
    return (
        
        <div style={{width:'90%', margin:'0 auto'}}>
            <Button variant="primary" onClick={handleShow}>
        {uz?"Add course":"Kurs qo'shish"}
      </Button>
      <button onClick={korsat}>korsat</button>
            <Table striped hover bordered>
  <thead>
    <tr>
      <th>Id</th>
      <th>titleUz</th>
      <th>titleRu</th>
      <th>descriptionUz</th>
      <th>descriptionRu</th>
      <th>{uz?"Number of courses":"Kurslarning soni"}</th>
      <th>{uz?"Changes":"O'zgarishlar"}</th>
    </tr>
  </thead>
  <tbody>
   {/* {List.map(item => (
        <tr>
      <td>
          {item.id}
      </td>
      <td>
          {item.titleUz}
      </td>
      <td>
          {item.titleRu}
      </td>
      <td>
          {item.descriptionUz}
      </td>
      <td>
          {item.descriptionRu}
      </td>
      <td>
          {item.durationTime}
        </td>
        <td>
            <Button onClick={Edit(item.id)} variant="success">Edit</Button>{' '}
            <Button onClick={Delete(item.id)} variant="danger">Delete</Button>
        </td>
    </tr>
   ))} */}
   {
       coursesList.map(item=>(
           <tr>
                <td>
          {item.id}
      </td>
      <td>
          {item.titleUz}
      </td>
      <td>
          {item.titleRu}
      </td>
      <td>
          {item.descriptionUz}
      </td>
      <td>
          {item.descriptionRu}
      </td>
      <td>
          {item.durationTime}
        </td>
        <td>
            <button >{uz?"Привет мир":"Salom dunyo"}</button>
        </td>
           </tr>
       ))
   }
  </tbody>
</Table>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{uz?"Создать курс":"Kurs yaratish"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                <Form.Label>{uz?"Заголовок":"Sarlavha"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='addTitleUz' placeholder="titleUz" />
                  </Col>
                  <Col>
                      <Form.Control id='addTitleRu' placeholder="titleRu" />
                  </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                <Form.Label>{uz?"Описание":"Ta'riflash"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='addDescriptionUz' placeholder="descriptionUz" />
                  </Col>
                  <Col>
                      <Form.Control id='addDescriptionRu' placeholder="descriptionRu" />
                  </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                   <Form.Label>{uz?"Номер конечно":"Kurslarning soni"}</Form.Label>
                   <Form.Control id='addDuration' type="number" placeholder={uz?"Номер конечно":"Kurslarning soni"} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          {uz?"Закрывать":"Yopish"}
          </Button>
          <Button variant="primary" onClick={PostCourse}>
          {uz?"Сохранить":"Saqlash"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={editModal} onHide={editClose}>
        <Modal.Header closeButton>
          <Modal.Title>{uz?"Изменить курс":"Kursni tahrirlash"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                <Form.Label>{uz?"Заголовок":"Sarlavha"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='putTitleUz' placeholder="titleUz" />
                  </Col>
                  <Col>
                      <Form.Control id='putTitleRu' placeholder="titleRu" />
                  </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                <Form.Label>{uz?"Описание":"Ta'riflash"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='putDescriptionUz' placeholder="descriptionUz" />
                  </Col>
                  <Col>
                      <Form.Control id='putDescriptionRu' placeholder="descriptionRu" />
                  </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                   <Form.Label>{uz?"Номер конечно":"Kurslarning soni"}</Form.Label>
                   <Form.Control id='putDuration' type="number" placeholder={uz?"Номер конечно":"Kurslarning soni"} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editClose}>
          {uz?"Закрывать":"Yopish"}

          </Button>
          <Button variant="primary" onClick={EditTutor}>
          {uz?"Сохранить изменения":"O'zgarishlarni saqlash"}

          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AdminCoursePanel