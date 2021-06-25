import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Modal, Table } from 'react-bootstrap';
import './Route.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
    const uz = useSelector(state=>state)
    toast.configure() ;
    const toastInfo=()=>{
        toast.info(uz?'Маршрут сохранен':"yo'nalish saqlandi",
        {position: toast.POSITION.TOP_CENTER,
        autoClose: 1800})
    }
    const toastSuccess=()=>{
        toast.success(uz?'Маршрут изменен':"Yo'nalish tahrirlandi",
        {position: toast.POSITION.TOP_CENTER,
        autoClose: 1800})
    }
    const toastError=()=>{
        toast.error(uz?'Маршрут удален':"Yo'nalish o'chirildi",
        {position: toast.POSITION.TOP_CENTER,
        autoClose: 1700})
    }
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setRoutename("");
        setRoutecode("");
        setEdit("ok");
        getSubjects();
        
    }
    const handleShow = (id) => {    
        setShow(true);
        // if(id){}else{
        //     setSecondList(defaultSecondList);
        //     setThirdlist(defaultThirdList);
        // }
    }
    
    const host = "https://educational-center-web-app.herokuapp.com";
    const [editId, setEditid] = useState("");
    const [isEdit, setEdit] = useState("ok")
    const [routeName, setRoutename] = useState("");
    const [routeCode, setRoutecode] = useState("");
    const [firstCode, setFirstcode] = useState("");
    const [secondCode, setSecondcode] = useState("");
    const [thirdCode, setThirdcode] = useState("");
    const [input1name, set1Name] = useState("");
    const [input2name, set2Name] = useState("");
    const [input3name, set3Name] = useState("");
    const [RouteList, setRoute] = useState("");
    const [SubjectList, setSubject] = useState("");
    const [secondList, setSecondList] = useState("");
    const [thirdList, setThirdlist] = useState("");
    const [defaultSecondList, setDefaultSecondList] =useState("");
    const [defaultThirdList, setDefaultThirdList] =useState("");

 
    const changeRoutename = (e) =>{
        setRoutename(e.target.value)
    }
    const changeRoutecode = (e) =>{
        setRoutecode(e.target.value)
    }
    const change2code = (e) =>{
        setSecondcode(e.target.value);
        set2Name(e.target.value)
        getThirdSubjects(firstCode,e.target.value);

    }
    const change3code = (e) =>{
        setThirdcode(e.target.value);
        set3Name(e.target.value)
    }
    useEffect(()=>{
        getRoutes();
        getSubjects();
    },[]);
    const getRoutes = () =>{
        axios({
            url: `${host}/api/client/route/all`,
            method: 'get',
        }).then(res=>{
            if(res){
                setRoute(res.data.data)
            }
        })
    }
    

    const getSubjects = () =>{
        axios({
            url: `${host}/api/client/subject/all`,
            method: 'get',
        }).then(res=>{
            if(res){
                setSubject(res.data.data.filter(el=> el.parentsFirst.length !==0));
                set1Name(res.data.data.filter(el=> el.parentsFirst.length !==0)[0].id);
                setFirstcode(res.data.data.filter(el=> el.parentsFirst.length !==0)[0].id);
                setSecondList(res.data.data.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst);
                if(res.data.data.filter(el=> el.parentsFirst.length !==0).parentsFirst){
                    set2Name(res.data.data.filter(el=> el.parentsFirst.length !==0).parentsFirst[0].id);
                    setSecondcode(res.data.data.filter(el=> el.parentsFirst.length !==0).parentsFirst[0].id)
                 getThirdSubjects(res.data.data.filter(el=> el.parentsFirst.length !==0)[0].id,res.data.data.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst[0].id)
                 getDefaultThirdSubject(res.data.data.filter(el=> el.parentsFirst.length !==0)[0].id,res.data.data.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst[0].id)
                }
                setDefaultSecondList(res.data.data.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst);
               
            }
        })
    }
    

    
 
   const getDefaultThirdSubject = (sub,subParent) =>{
    axios({
        url: `${host}/api/client/subjects/${sub}?parentSecondId=${subParent}`,
        method: 'get',
    }).then(res=>{
        if(res){
            setDefaultThirdList(res.data.data);
            set3Name(res.data.data[0].id);
            setThirdcode(res.data.data[0].id);
        }
    })
}

    const change1code = (e) =>{
        set1Name(e.target.value);
        setFirstcode(e.target.value)
        SubjectList.map(res=>{
            if(res.id==e.target.value){
                setSecondList(res.parentsFirst)
                if(res.parentsFirst){
                    set2Name(res.parentsFirst[0].id);
                    setSecondcode(res.parentsFirst[0].id);
                    getThirdSubjects(res.id,res.parentsFirst[0].id)
                }
            }
        })

    }
    const getThirdSubjects = (sub,subParent) =>{
        axios({
            url: `${host}/api/client/subjects/${sub}?parentSecondId=${subParent}`,
            method: 'get',
        }).then(res=>{
            if(res){
                setThirdlist(res.data.data);
                set3Name(res.data.data[0].id);
                setThirdcode(res.data.data[0].id);
            }
        })
    }
    const saveRoutes = () =>{
        const routeData={
            code: routeCode,
            name: routeName,
            subjectFirst: firstCode,
            subjectSecond: secondCode,
            subjectThird: thirdCode,
        }
        editId?axios({
            url: `${host}/api/admin/route/${editId}`,
            method: 'put',
            data: routeData,
        }).then(res=>{
            if(res){
                toastSuccess();
                getRoutes();
            }else{toast.success(uz?"Маршрут изменен":"yo'nalish tahrirlanmadi")}
        }).catch(res=>(
            toast.error(uz?"Ошибка редактирования":"Tahrirlash Xatosi")
        )):axios({
            url: `${host}/api/admin/route/add`,
            method: 'post',
            data: routeData
        }).then(res=>{
            if(res){
                toastInfo();
                getRoutes();
            }else{toast.danger(uz?"Маршрут не добавлен":"yo'nalish qo'shilmadi")}
        }).catch(res=>(
            toast.error(uz?"Сохраненная ошибка":"Saqlash Xatosi")
        ))
        handleClose();
        setEditid("");
    }

    const deleteRoute = (id) =>{
        axios({
            url: `${host}/api/admin/route/${id}`,
            method: 'delete',
        }).then(res=>{
            if(res){
                toastError();
                getRoutes();
            }else{toast.danger(uz?"Маршрут не удален":"Yo'nalish o'chirilmadi")}
        }).catch(res=>(alert("delete error"),
        toast.error(uz?"Удалить ошибку":"O'chirish Xatosi")
        ))
    }

    const editRoute = (id) =>{
        handleShow(id);
        setEditid(id);
        setEdit("");
        axios({
            url: `${host}/api/client/route/${id}`,
            method: 'get',
        }).then(res=>{
            if(res){
                setRoutename(res.data.data.name);
                setRoutecode(res.data.data.code);
                set1Name(res.data.data.subjectFirst.id);
                setFirstcode(res.data.data.subjectFirst.id);
                set2Name(res.data.data.subjectSecond.id);
                setSecondcode(res.data.data.subjectSecond.id);
                set3Name(res.data.data.subjectThird.id);
                setThirdcode(res.data.data.subjectThird.id);
                SubjectList.map(item=>{
                    console.log(item)
                    if(item.id==res.data.data.subjectFirst.id){
                        setSecondList(item.parentsFirst)
                        
                       
                    }
                })
                getThirdSubjects(res.data.data.subjectFirst.id,res.data.data.subjectSecond.id);
            }else{toast.danger(uz?"не редактировалось":"tahrirlanmadi")}
        }).catch(res=>(console.log(res)));
    }
    return (
        <div>
          
            <div className="adminRouteHeader">
                <Button onClick={()=>{handleShow()}}>
                    {uz?"Добавить новый маршрут":"Yangi yo'nalish qo'shish"}
                </Button>
            </div>
            <div className="adminRouteContetn">
                <Table striped hover bordered>
                    <thead class="thead-dark"> 
                        <tr variant="dark">
                            <th>#</th>
                            <th>{uz?"Название маршрута":"Yo'nalish nomi"}</th>
                            <th>{uz?"Код маршрута":"Mutaxsisik kodi"}</th>
                            <th>{uz?"Предметы":"Fanlar"}</th>
                            <th>{uz?"Работает":"Amallar"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RouteList?RouteList.map(item=>(
                                <tr>
                                    <td>{RouteList.indexOf(item)+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                {uz?"Предметы":"fanlar"}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1: {uz?item.subjectFirst.nameRu:item.subjectFirst.nameUz}</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">2: {uz?item.subjectSecond.nameRu:item.subjectSecond.nameUz}</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">3: {uz?item.subjectThird.nameRu:item.subjectThird.nameUz}</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                    <td><Button onClick={()=>{editRoute(item.id)}} variant="warning">{uz?"Редактировать":"Tahrirlash"}</Button> <Button onClick={()=>{deleteRoute(item.id)}} variant="danger">{uz?"Удалить":"O'chirish"}</Button></td>
                                </tr>
                            )):""
                        }
                    </tbody>
                </Table>
            </div>

            <Modal 
                    size="lg" 
                    aria-labelledby="contained-modal-title-vcenter" 
                    scrollable centered 
                    show={show} 
                    onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {isEdit?uz?"Создать маршрут":"Yangi yo'nalish yaratish":uz?"Изменить маршрут":"Yo'nalishni tahrirlash"}
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="group-input-admin">
                        <label htmlFor="adminRouteId">{uz?"Введите название маршрута:":"Yo'nalish nomini kiriting:"}</label>
                        <input onChange={changeRoutename} value={routeName}   type="text" id='adminRouteId' placeholder={uz?"Название маршрута ...":"Yonalish nomi..."} />
                    </div>       
                    <div className="group-input-admin">
                        <label htmlFor="adminRouteId2">{uz?"Введите код специальности:":"Mutahasslik ko'dini kiriting:"}</label>
                        <input onChange={changeRoutecode} value={routeCode}  type="text" id='adminRouteId2' placeholder={uz?"Код специальности ...":"Mutahasislik kodi..."} />
                    </div> 
                    <div className="group-input-admin">
                        <label htmlFor="adminRouteId3">{uz?"Выберите первый маршрут:":"Birinchi yo'nalishni tanlang:"}</label>
                        <select id='adminRouteId3' onChange={change1code} value={input1name} required>
                            {
                               SubjectList?SubjectList.map(item=>(
                                   <option  value={item.id}>{uz?item.nameRu:item.nameUz}</option>
                                   
                               )):"option"
                            }
                        </select>
                    </div>   
                    <div className="group-input-admin">
                        <label htmlFor="adminRouteId4">{uz?"Выберите второй маршрут:":"Ikkinchi yo'nalishni tanlang:"}</label>
                        <select id='adminRouteId4' value={input2name} onChange={change2code} required>
                            {
                               secondList?secondList.map(item=>(
                                   <option value={item.id}>{uz?item.nameRu:item.nameUz}</option>
                               )):"option"
                            }
                        </select>
                    </div>    
                    <div className="group-input-admin">
                        <label htmlFor="adminRouteId5">{uz?"Выберите третий маршрут:":"Uchinchi yo'nalishni tanlang:"}</label>
                        <select id='adminRouteId5' value={input3name} onChange={change3code} required>
                            {
                               thirdList?thirdList.map(item=>(
                                   <option value={item.id}>{uz?item.nameRu:item.nameUz}</option>
                               )):"option"
                            }
                        </select>
                    </div> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {uz?"Закрывать":"Yopish"}
                    </Button>
                    <Button variant="primary" onClick={saveRoutes}>
                        {uz?"Сохранить изменения":"Saqlash"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default AdminRoute;