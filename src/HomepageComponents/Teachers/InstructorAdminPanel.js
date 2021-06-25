import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row, Table, ToastHeader } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const InstructorAdminPanel = () => {
const uz = useSelector(state=>state);
    const [social, setSocial] =useState('facebook')
    const [List, setList] = useState([])
    const [show, setShow] = useState(false);
    const [editId, setEditId] = useState(null);
    const [saveBtn, setSaveBtn] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const TeacherList = () =>{
        axios.get('https://educational-center-web-app.herokuapp.com/api/client/teacher/all')
        .then(res => setList(res.data.data.teachers))
        .catch(data => console.log(data),
        )
    }

    useEffect(() => {
      TeacherList()
    }, [])  

    const addButton= () =>{
      handleShow()
      setSaveBtn(true)
    }

    const PostCourse = () =>{
      axios.post('https://educational-center-web-app.herokuapp.com/api/admin/teacher/add',
      {
        bioUz : document.querySelector('#addbioUz').value,
        bioRu : document.querySelector('#addbioRu').value,
        firstName : document.querySelector('#addfirstname').value,
        lastName : document.querySelector('#addlastname').value,
        hashId : document.querySelector('#addhashId').value,
        phoneNumber : document.querySelector('#addphone').value,
        facebook : document.querySelector('#addfacebook').value,
        instagram : document.querySelector('#addinstagram').value,
        telegram : document.querySelector('#addtelegram').value,
        password : document.querySelector('#addpassword').value,
      })
      .then(() => (TeacherList(),
      toast.success(uz?"saved":"Qo'shildi")

      ))
      .catch(res =>( console.log(res),
      toast.error(uz?"Error":"Xato")
      ))
       handleClose();
    }

    const Social = () =>{
        var sel = document.querySelector("#SocialSelect").value
        if (sel === 'telegram') {
           setSocial('telegram')
        }else if (sel === 'instagram') {
           setSocial('instagram')
        }else{setSocial('facebook')}
    }

    const Edit = (id) =>{
        setEditId(id);
        setSaveBtn(false);
        handleShow();
        axios.get(`https://educational-center-web-app.herokuapp.com/api/client/teacher/${id}`)
        .then(res =>{
        document.querySelector('#addbioUz').value = res.data.data.bioUz
        document.querySelector('#addbioRu').value = res.data.data.bioRu
        document.querySelector('#addfirstname').value = res.data.data.first_name
        document.querySelector('#addlastname').value = res.data.data.last_name
        document.querySelector('#addhashId').value = res.data.data.avatar.hashId
        document.querySelector('#addphone').value = res.data.data.phoneNumber
        document.querySelector('#addfacebook').value = res.data.data.facebook
        document.querySelector('#addinstagram').value = res.data.data.instagram 
        document.querySelector('#addtelegram').value = res.data.data.telegram
        })
        .catch(res => (console.log(res),
        toast.error(uz?"Error":"Xato")
        ))
    }
    const PutCourse = () =>{
      axios.put(`https://educational-center-web-app.herokuapp.com/api/admin/teacher/${editId}`,
      {
        bioUz : document.querySelector('#addbioUz').value,
        bioRu : document.querySelector('#addbioRu').value,
        firstName : document.querySelector('#addfirstname').value,
        lastName : document.querySelector('#addlastname').value,
        hashId : document.querySelector('#addhashId').value,
        phoneNumber : document.querySelector('#addphone').value,
        facebook : document.querySelector('#addfacebook').value,
        instagram : document.querySelector('#addinstagram').value,
        telegram : document.querySelector('#addtelegram').value,
        password : document.querySelector('#addpassword').value
      }).then(()=>{
        TeacherList();
        toast.success(uz?"edited":"tahrirlandi");
      })
      .catch(res=>(
        toast.error(uz?"Error":"Xato")
      ))
        handleClose();

    }
    const Delete =(id) => {
        axios.delete(`https://educational-center-web-app.herokuapp.com/api/admin/teacher/${id}`)
        .then(()=>(TeacherList(),
        toast.danger(uz?"Deleted":"O'chirildi")
        ))
        .catch(res=>( console.log(res),
        toast.error(uz?"Error":"Xato")
        ))
    }
    return (
        <div style={{width:'100%',overflow:'auto'}}>
            <Button className='m-1' variant="primary" onClick={()=>addButton()}>
        {uz?"Add Teacher":"O'qituvchi qo'shish"}
      </Button>
            <Table striped hover bordered>
  <thead>
    <tr>
      <th>bioUz</th>
      <th>bioRu</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>Avatar</th>
      <th><select id='SocialSelect' onChange={()=>Social()}>
              <option>facebook</option>
              <option>instagram</option>
              <option>telegram</option>
          </select>
      </th>
      <th>{uz?"Phonenumber":"Telefon raqam"}</th>
      <th>{uz?"Changes":"O'zgarishlar"}</th>
    </tr>
  </thead>
  <tbody>
   {List.map(item => (
        <tr>
      <td>
          {item.bioUz}
      </td>
      <td>
          {item.bioRu}
      </td>
      <td>
          {item.first_name}
      </td>
      <td>
          {item.last_name}
      </td>
      <td>
          {item.avatar!==null?item.avatar.name:'undefined'}
      </td>
      <td>
        {social==='facebook'?item.facebook:social==='instagram'?item.instagram:item.telegram}
      </td>
      <td>
          {item.phoneNumber}
        </td>
        <td>
            <Button onClick={()=>Edit(item.id)} variant="success">{uz?"Редактировать":"Tahrirlash"}</Button>{' '}
            <Button onClick={()=>Delete(item.id)}  variant="danger">{uz?"Удалить":"O'chirish"}</Button>
        </td>
    </tr>
   ))}
  </tbody>
</Table>
 <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{uz?"Создать учителя":"O'qituvchi yaratish"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                <Form.Label>{uz?"ФИО":"F.I.SH"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='addfirstname' placeholder={uz?"Имя":"Ism"} />
                  </Col>
                  <Col>
                      <Form.Control id='addlastname' placeholder={uz?"Фамилия":"Familiya"} />
                  </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                <Form.Label>{uz?"Биография (квалификация)":"Biografiya (malaka)"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='addbioUz' placeholder="bioUz" />
                  </Col>
                  <Col>
                      <Form.Control id='addbioRu' placeholder="bioRu" />
                  </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                <Form.Label>{uz?"Социальные ссылки":"Ijtimoiy linklar"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='addfacebook' placeholder="facebook" />
                  </Col>
                  <Col>
                      <Form.Control id='addinstagram' placeholder="instagram" />
                  </Col>
                  <Col>
                      <Form.Control id='addtelegram' placeholder="telegram" />
                  </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                   <Form.Label>hashId (avatar)</Form.Label>
                   <Form.Control id='addhashId' placeholder="hashId" />
                </Form.Group>
                <Form.Group>
                <Form.Label>{uz?'Подключение и пароль':"Aloqa va kod"}</Form.Label>
                <Row>
                  <Col>
                     <Form.Control id='addphone' placeholder={uz?"Телефонный номер":"TelefonRaqam"} />
                  </Col>
                  <Col>
                      <Form.Control id='addpassword' placeholder={uz?"Пароль":"KirishKodi"} />
                  </Col>
                </Row>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {uz?"Закрывать":"Yopish"}
          </Button>
          <Button variant="primary" onClick={()=>saveBtn?PostCourse():PutCourse()}>
            {uz?"Сохранить":"Saqlash"}
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default InstructorAdminPanel