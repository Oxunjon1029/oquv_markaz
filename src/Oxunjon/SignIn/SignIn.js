import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign.css';
import {Button, Form,FormControl,InputGroup} from 'react-bootstrap';
import { FaKey, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { SignInContext } from './SignInContext';
import {Link} from 'react-router-dom'
import axios from 'axios';

const SignIn = () => {
  const[isSign,setSign]=useContext(SignInContext)
  const uz = useSelector(state => state);
  const [getText,setgetText]=useState('')
  const [getCod,setgetCod]=useState('')
  const GetArray=(e)=>{
      setgetText(e.target.value)   
  }
  const GetCod=(e)=>{
    setgetCod(e.target.value)
    
  }
  const object ={
    phoneNumber: getText,
    password: getCod
  }
  const onSubmit=()=>{
     axios({
       url:'https://educational-center-web-app.herokuapp.com/api/auth/login',
       method:'post',
       data: object
     }).then(res=>{
        setSign(res.data.token)
        localStorage.setItem('token',res.data.token)
        window.location.reload()
        console.log(res.data.token);
     }).catch(res=>{
       console.log(res);
       alert('sign xato')
     })
  }
  
  
    return (
        <div>
        <div className="sign">
            
                <div className="center">
                <Form >

                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{fontWeight:"bolder"}}  className="text-dark">{uz?"Авторизоваться":"Login"}</Form.Label>
                    <InputGroup onChange={GetArray} className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text style={{backgroundColor:"rgba(0,0,0,0.5)"}} id="basic-addon1"><FaUser style={{color:"green",fontWeight:"bolder"}}/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                value={getText}
                onChange={GetArray}
                  placeholder={uz ? "Введите свой логин" : "Loginingizni kiriting"}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{fontWeight:"bolder"}} className="text-dark">{uz?"Пароль":"Parol"}</Form.Label>
                      <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text   style={{backgroundColor:"rgba(0,0,0,0.5)"}} id="basic-addon1"><FaKey style={{fontWeight:"bolder",color:"green"}}/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                value={getCod}
                onChange={GetCod}
            
                  placeholder={uz ? "Введите свой пароль" : "Parolingizni kiriting"}
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                   {uz ?  <Form.Check style={{color:"black",fontWeight:"bolder"}} type="checkbox" label="Запомни меня" /> :<Form.Check style={{color:"black",fontWeight:"bolder"}} type="checkbox" label="Meni eslab qol" />  }
                </Form.Group>
               <Button className="sign-button" onClick={onSubmit} variant="primary" >
                    <Link to='/select'>{uz?'Sign In':'Kirish'}</Link>
                </Button>
                {uz ? <a className="hoverPassword" style={{marginLeft:"1.2rem"}} href="#">Забыли Ваш пароль ?</a> : <a className="hoverPassword" style={{marginLeft:"1.2rem"}} href="#">Parolingizni unutdingizmi?</a>}
                </Form>
                </div>
                
            </div>
            </div>
    )
}

export default SignIn
