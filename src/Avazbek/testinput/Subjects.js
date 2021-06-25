import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { TestBankContext } from '../../components/Test/TestBankProvider';
import { SignInContext } from '../../Oxunjon/SignIn/SignInContext';
import './Subject.css';
import {Link} from 'react-router-dom'

const Subjects = () => {
  
    const [inform, setInform] = useState('all');
    const [inform2, setInform2] = useState("Fizika");
    const [inform3, setInform3] = useState("Ona tili va adabiyot")
    
    const [allSubjectsData,setAllSubjectsData]=useState([])
    const getAllSubjects=()=>{
        axios({
            url:'https://educational-center-web-app.herokuapp.com/api/admin/subject/all',
            method:'get'
        }).then(res=>{
            console.log(res);
            setAllSubjectsData(res.data.data.subjects)
            setFilteredSubjects(res.data.data.subjects.filter(el=> el.parentsFirst.length !==0))
            setInform(res.data.data.subjects.filter(el=> el.parentsFirst.length !==0)[0].id)
            setSecondSubjectData(res.data.data.subjects.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst)
            console.log(res.data.data.subjects.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst);
            setInform2(res.data.data.subjects.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst[0].id)
                    axios({
                        url:`https://educational-center-web-app.herokuapp.com/api/client/subjects/${res.data.data.subjects.filter(el=> el.parentsFirst.length !==0)[0].id}?parentSecondId=${res.data.data.subjects.filter(el=> el.parentsFirst.length !==0)[0].parentsFirst[0].id}`,
                        method:'get',
                    }).then(item=>{
                        console.log(item);
                    setThirdSubjectData(item.data.data)
                    setInform3(item.data.data[0].id)

                    }).catch(item=>{
                        alert('xato1')
                        console.log(item);
                    })
        }).catch(res=>{
            alert('xato2')
            console.log(res);
        })
    }
    useEffect(()=>{
        getAllSubjects()
    },[])

    const[filteredSubjects,setFilteredSubjects]=useState([])
  
    const gettingFirstSubjectId=(e)=>{
        setInform(e.target.value)
        console.log(e.target.value);
        console.log(filteredSubjects.filter(el=> el.id === e.target.value));
         setSecondSubjectData(filteredSubjects.filter(el=> el.id === e.target.value)[0].parentsFirst)
        setInform2(filteredSubjects.filter(el=> el.id === e.target.value)[0].parentsFirst[0].id)
    }
    const gettingSecondSubjectId=(e)=>{
        setInform2(e.target.value)
            axios({
                url:`https://educational-center-web-app.herokuapp.com/api/client/subjects/${inform}?parentSecondId=${e.target.value}`,
                method:'get',
            }).then(item=>{
                console.log(item);
            setThirdSubjectData(item.data.data)
            setInform3(item.data.data[0].id)
    
            }).catch(item=>{
                alert('xato3')
                console.log(item);
            })
    }
    const gettingThirdSubjectId=(e)=>{
        setInform3(e.target.value)
    }
    const[secondSubjectData,setSecondSubjectData]=useState([])
    const[thirdSubjectData,setThirdSubjectData]=useState([])
    const[filteredRoutes,setFilteredRoutes]=useState([])

    const [allRoutes,setAllRoutes]=useState([])
    const getAllRoutes=()=>{
        axios({
            url:'https://educational-center-web-app.herokuapp.com/api/admin/route/all',
            method:'get'
        }).then(res=>{
            console.log(res.data.data.routes);
            setAllRoutes(res.data.data.routes)
            console.log(res.data.data.routes.filter(el=> el.subjectFirst.id ===inform && el.subjectSecond.id===inform2 && el.subjectThird.id===inform3));
            setFilteredRoutes(res.data.data.routes.filter(el=> el.subjectFirst.id ===inform && el.subjectSecond.id===inform2 && el.subjectThird.id===inform3))
            setSelectedRouteId(res.data.data.routes.filter(el=> el.subjectFirst.id ===inform && el.subjectSecond.id===inform2 && el.subjectThird.id===inform3).length?res.data.data.routes.filter(el=> el.subjectFirst.id ===inform && el.subjectSecond.id===inform2 && el.subjectThird.id===inform3)[0].id:'all')
        }).catch(res=>{
            alert('xato4')
            console.log(res);
        })
    }
    useEffect(()=>{
        getAllRoutes()
    },[inform,inform2,inform3])

const[selectedRouteId,setSelectedRouteId]=useState('all')
    const getByRouteId=(e)=>{
        setSelectedRouteId(e.target.value)
        let selectedRoute=allRoutes.filter(el=> el.id ===e.target.value)[0]
        setInform(selectedRoute.subjectFirst.id)
        setInform2(selectedRoute.subjectSecond.id)
        setInform3(selectedRoute.subjectThird.id)
    }
    const[isSign,setSign]=useContext(SignInContext)
    const[testBankData,setTestBankData]=useContext(TestBankContext)
    const getTokened=()=>{
        axios({
            url:'https://educational-center-web-app.herokuapp.com/api/user/blok',
            method:'post',
            data:{
                "blokFirstId": inform,
                "blokSecondId": inform2,
                "blokThirdId": inform3
            },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).then(res=>{
            console.log(res);
            console.log(inform);
            console.log(inform2);
            console.log(inform3);
            if(res && res.data){
               setTestBankData(res.data.data)
               localStorage.setItem('testBank',JSON.stringify(res.data.data) )
               window.location.reload()
            }
            console.log(localStorage.getItem('token'));
        }).catch(res=>{
            alert('xato')
        })
    }
    
    return (
        <>       
            <div className="subject-parent">
                <div className="subject-div news-section-oxunjon">
                    <div className="subject-header">
                        <h3>Virtual Imtihon</h3> <hr/> 
                    </div>
                    <div className="subject-content ">
                    <Form.Group controlId="exampleForm.ControlSelect1"    className="subject-group">
                        <Form.Label className="subject-input-name">Birinchi fan</Form.Label>
                            <Form.Control as="select" value={inform} onChange={gettingFirstSubjectId} className="subject-option">
                                {
                                    filteredSubjects.map(item=>(
                                        <option value={item.id} >{item.nameUz}</option>
                                        ))
                                }
                               
                            </Form.Control>
                    </Form.Group>
                   
                    <Form.Group controlId="exampleForm.ControlSelect2" className="subject-group">
                        <Form.Label className="subject-input-name">Ikkinchi fan</Form.Label>
                            <Form.Control as="select" value={inform2} onChange={gettingSecondSubjectId} className="subject-option">
                               {
                                   secondSubjectData.map(item=>(                                      
                                    <option value={item.id}>{item.nameUz}</option>
                                   ))
                               }
                                
                            </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect3" className="subject-group2">
                        <Form.Label className="subject-input-name">Uchinchi fan</Form.Label>
                            <Form.Control as="select" value={inform3} onChange={gettingThirdSubjectId} className="subject-option">
                                {
                                    thirdSubjectData.map(item=>(
                                        <option value={item.id}>{item.nameUz}</option>
                                    ))
                                }
                            </Form.Control>
                    </Form.Group> <hr className="subject-hr"/>
                    <Form.Group controlId="exampleForm.ControlSelect4">
                        <Form.Label className="subject-input-name">Taʼlim yo‘nalishi</Form.Label>
                            <Form.Control value={selectedRouteId} onChange={getByRouteId} as="select" className="subject-option">
                                <option disabled value="all">Barcha yonalishlar</option>
                                {
                                    allRoutes.map(item=>(
                                        <option value={item.id}>{item.name}</option>
                                    ))
                                }
                               
                            </Form.Control>
                    </Form.Group>
                    
                    <Table>
                        <tbody className="subject-tbody">
                            <tr>
                                <td>Mutaxassislik kodi</td>
                                {
                                    filteredRoutes.map(item=>(
                                        <td onClick={item.id}>{item.code}</td>
                                    ))
                                }
                            </tr>
                            <tr>
                                <td>Test kodi</td>
                                <td>X009</td>
                            </tr>
                            <tr className="subject-hover">
                                <td>
                                    {
                                        allSubjectsData.filter(el=> el.id===inform).length?allSubjectsData.filter(el=> el.id===inform)[0].nameUz:''
                                    }
                                    </td>
                                <td>3.1</td>
                            </tr>
                            <tr className="subject-hover">
                                <td>
                                {
                                        allSubjectsData.filter(el=> el.id===inform2).length?allSubjectsData.filter(el=> el.id===inform2)[0].nameUz:''
                                    }
                                </td>
                                <td>2.1</td>
                            </tr>
                            <tr className="subject-hover">
                                <td>
                                {
                                        allSubjectsData.filter(el=> el.id===inform3).length?allSubjectsData.filter(el=> el.id===inform3)[0].nameUz:''
                                    }
                                </td>
                                <td>1.1</td>
                            </tr>
                            <tr className="subject-hover subject-hover2">
                                <th>Sinov umumiy vaqti</th>
                                <th>180 minut</th>
                            </tr>
                        </tbody>
                       
                    </Table>
                        <hr/>
                    <div className="sub-btn-div">
                       <Link to='/test'><button onClick={getTokened} className="subject-btn">Boshlamoq</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Subjects;