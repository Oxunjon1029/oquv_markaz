import React, { useContext, useState } from 'react';
import TestExample from './TestExample';
import {BiChevronRight,BiChevronLeft,FaBraille} from 'react-icons/all'
import './Test.css'
import { ToggleContext } from './ToggleContext';
import { TestContext } from './TestContext';
// import Countdown from 'react-countdown';
import { ToggleContext2 } from './ToggleContext2';
import { TestBankContext } from './TestBankProvider';
import axios from 'axios';
import { SignInContext } from '../../Oxunjon/SignIn/SignInContext';
import FinalResult from './FinalResult';
import { useSelector } from 'react-redux';

const Test = () => {
    const uz =useSelector(state=>state)
    const testBank=[
        {
            type:'Matematika',
            parentId:'math',
            data:[
                {
                    q_id:1,
                    number:1,
                    parentId:'math',
                    text:'Quyidagi sonlardan qaysilari 1818 ga qoldiqsiz bo‘linadi?',
                    variants:[
                        {
                            id:1,
                            q_id:1,
                            name:'a',
                            text:'faqat a'
                        },
                        {
                            id:2,
                            q_id:1,
                            name:'b',
                            text:'faqat b'
                        },
                        {
                            id:3,
                            q_id:1,
                            name:'c',
                            text:'faqat c'
                        },
                        {
                            id:4,
                            q_id:1,
                            name:'d',
                            text:'faqat d'
                        },
                    ],
                },
                {
                    q_id:2,
                    parentId:'math',
                    number:2,
                    text:'Quyidagi sonlardan qaysilari 1818 ga qoldiqsiz bo‘linadi?',
                    variants:[
                        {
                            id:9,
                            q_id:2,
                            name:'a',
                            text:'faqat a'
                        },
                        {
                            id:20,
                            q_id:2,
                            name:'b',
                            text:'faqat b'
                        },
                        {
                            id:11,
                            q_id:2,
                            name:'c',
                            text:'faqat c'
                        },
                        {
                            id:12,
                            q_id:2,
                            name:'d',
                            text:'faqat d'
                        },
                    ],
                },
                {   
                    q_id:3,
                    parentId:'math',
                    number:3,
                    text:'Quyidagi sonlardan qaysilari 1818 ga qoldiqsiz bo‘linadi?',
                    variants:[
                        {
                            id:5,
                            q_id:3,
                            name:'a',
                            text:'faqat a'
                        },
                        {
                            id:6,
                            q_id:3,
                            name:'b',
                            text:'faqat b'
                        },
                        {
                            id:7,
                            q_id:3,
                            name:'c',
                            text:'faqat c'
                        },
                        {
                            id:8,
                            q_id:3,
                            name:'d',
                            text:'faqat d'
                        },
                    ],
                },
               
            ]
            
        },
        {
            type:'Fizika',
            parentId:'fizika',
            data:[
                {
                    q_id:4,
                    parentId:'fizika',
                    number:1,
                    text:'Quyidagi sonlardan qaysilari 1818 ga qoldiqsiz bo‘linadi?',
                    variants:[
                        {
                            id:1,
                            q_id:4,
                            name:'a',
                            text:'faqat a'
                        },
                        {
                            id:2,
                            q_id:4,
                            name:'b',
                            text:'faqat b'
                        },
                        {
                            id:3,
                            q_id:4,
                            name:'c',
                            text:'faqat c'
                        },
                        {
                            id:4,
                            q_id:4,
                            name:'d',
                            text:'faqat d'
                        },
                    ],
                },
                {
                    q_id:5,
                    number:2,
                    parentId:'fizika',
                    text:'Quyidagi sonlardan qaysilari 1818 ga qoldiqsiz bo‘linadi?',
                    variants:[
                        {
                            id:9,
                            q_id:5,
                            name:'a',
                            text:'faqat a'
                        },
                        {
                            id:20,
                            q_id:5,
                            name:'b',
                            text:'faqat b'
                        },
                        {
                            id:11,
                            q_id:5,
                            name:'c',
                            text:'faqat c'
                        },
                        {
                            id:12,
                            q_id:5,
                            name:'d',
                            text:'faqat d'
                        },
                    ],
                },
                {   
                    q_id:6,
                    parentId:'fizika',
                    number:3,
                    text:'Quyidagi sonlardan qaysilari 1818 ga qoldiqsiz bo‘linadi?',
                    variants:[
                        {
                            id:5,
                            q_id:6,
                            name:'a',
                            text:'faqat a'
                        },
                        {
                            id:6,
                            q_id:6,
                            name:'b',
                            text:'faqat b'
                        },
                        {
                            id:7,
                            q_id:6,
                            name:'c',
                            text:'faqat c'
                        },
                        {
                            id:8,
                            q_id:6,
                            name:'d',
                            text:'faqat d'
                        },
                    ],
                },
               
            ]
            
        }
    ]

    const[isAnswersOpen,setAnswersOpen]=useState(false)
    const ToggleAnswersContent=()=>{
        setAnswersOpen(!isAnswersOpen)
    }


    // Timer
    //     const Completionist = () => <span>You are good to go!</span>;
    
    // const renderer = ({ hours, minutes, seconds, completed }) => {
    // if (completed) {
    //     return <Completionist />;
    // } else {
    //     return <span>{hours}:{minutes}:{seconds}</span>;
    // }
    // };
    // timer Finished
    // const [testBankData,setTestBankData]=useContext(TestBankContext)
    const testBankData= JSON.parse(localStorage.getItem('testBank'))

    const [checkedItems,setCheckedItems]=useContext(TestContext)
   const [toggleActive,setToggleActive]=useContext(ToggleContext)
   const [toggleActive2,setToggleActive2]=useContext(ToggleContext2)
  
const[isSign,setSign]=useContext(SignInContext)
// const[testAnswers,setTestAnswers]=useState(null)

const finishTest=()=>{
    axios({
        url:`https://educational-center-web-app.herokuapp.com/api/user/verifying/${testBankData.blok?testBankData.blok.id:''}`,
        method:'get',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(res=>{
        console.log(res);
        // setTestAnswers(res.data)
        localStorage.setItem('answers')
        window.location.reload()
        console.log('javoblar keldi');
        console.log(testBankData.blok?testBankData.blok.id:'kemadi id');
    }).catch(res=>{
        console.log(res);
        console.log('javoblar kelmadi');
    })
}

const testAnswers=localStorage.getItem('answers')

const countDownDate=testBankData.blok?new Date(testBankData.blok.finalDate).getTime():'';
const [timerQ,setTimerQ]=useState('qq')
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML =(hours && minutes && seconds)?( (hours>=10?hours:`0${hours}`)+':'+
    // (minutes>=10?minutes:`0${minutes}`)+ ':' + (seconds>=10?seconds:`0${seconds}`)):'';
    setTimerQ((hours && minutes && seconds)?( (hours>=10?hours:`0${hours}`)+':'+
    (minutes>=10?minutes:`0${minutes}`)+ ':' + (seconds>=10?seconds:`0${seconds}`)):'')
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
    //   document.getElementById("demo").innerHTML = "Vaqt tugadi";
    setTimerQ(uz?"Время истекло":"Vaqt tugadi")
    }
  }, 1000);
    return (
        <div className="test-page">

           <div className="test-blok-content">
                   
                                <div className='main-test'>

                                    <div className="main-test-head">
                                        {/* <button onClick={korsat2} className="btn btn-info">kor</button> */}
                                        <h1>{testBankData.blok?testBankData.blok.blokFirst.nameUz:''}</h1> 
                                    </div>
                                    <div className={isAnswersOpen?'quizes quizes2':'quizes'}>
                                        {
                                            testBankData.blok?testBankData.blok.questionFirstList.map(item=>(
                                                <TestExample parentId={item.subjects.id} q_id={item.id} number={testBankData.blok.questionFirstList.indexOf(item)+1} text={item.questionUz} variants={item.answer} type={item.subjects.nameUz} />
                                            )):''
                                        }
                                        
                                    </div>
                                    <div className="main-test-head">
                                        <h1>{testBankData.blok?testBankData.blok.blokSecond.nameUz:''}</h1> 
                                    </div>
                                    <div className={isAnswersOpen?'quizes quizes2':'quizes'}>
                                        {
                                            testBankData.blok?testBankData.blok.questionSecondList.map(item=>(
                                                <TestExample parentId={item.subjects.id} q_id={item.id} number={testBankData.blok.questionSecondList.indexOf(item)+1} text={item.questionUz} variants={item.answer} type={item.subjects.nameUz} />
                                            )):''
                                        }
                                        
                                    </div>
                                    <div className="main-test-head">
                                        <h1>{testBankData.blok?testBankData.blok.blokThird.nameUz:''}</h1> 
                                    </div>
                                    <div className={isAnswersOpen?'quizes quizes2':'quizes'}>
                                        {
                                            testBankData.blok?testBankData.blok.questionThirdList.map(item=>(
                                                <TestExample parentId={item.subjects.id} q_id={item.id} number={testBankData.blok.questionThirdList.indexOf(item)+1} text={item.questionUz} variants={item.answer} type={item.subjects.nameUz} />
                                            )):''
                                        }
                                        
                                    </div>
                                    <div className="end-test">
                                        {
                                         testAnswers?<FinalResult 
                                         allBall={testAnswers.ballAll}
                                         ballFirst={testAnswers.ballFirst}
                                         ballSecond={testAnswers.ballSecond}
                                         ballThird={testAnswers.ballThird}
                                         allCount={testAnswers.countAll}
                                         countFirst={testAnswers.countFirst}
                                         countSecond={testAnswers.countSecond}
                                         countThird={testAnswers.countThird}
                                         />:<button onClick={finishTest} className="btn btn-success">{uz?"Пройти тест":"Testni yakunlash"}</button>
                                        }
                                </div>
                                </div>

                                
                           
           </div>
            <div onClick={ToggleAnswersContent} className={isAnswersOpen?'answers-left display-none':'answers-left'}>
                <span id='answers-toggler1'><BiChevronLeft size='26px'/></span>
                <div id='answers-toggler2'><span ><FaBraille size='36px' style={{color:'white'}}/></span>
                <h4>{testBankData.finalDate?testBankData.finalDate.slice(0,10):''}</h4>
                </div>
            </div>

            <div className={isAnswersOpen?'answers':'answers close-answers'}>
                <div className="answers-head">
                    <div onClick={ToggleAnswersContent} className="toggler-test-answers">
                        <BiChevronRight size='26px'/>
                    </div>
                   {/* <h4>{testBankData.blok?testBankData.blok.finalDate.slice(17,19)-seconds:''}</h4> */}
                   <h4 id="demo"></h4>
                   <input className='timer-q' type="text" readOnly value={timerQ}/>
                   <h3><a href="#">Chiqish <BiChevronRight/></a></h3>
                </div>
              
                        <div className="answers-body">
                        <div className="answers-body-head">
                            <h3>{testBankData.blok?testBankData.blok.blokFirst.nameUz:''}</h3>
                            <h3>{toggleActive2.filter((i)=>i.parentId===testBankData.blok.blokFirst.id).length}/{testBankData.blok?testBankData.blok.questionFirstList.length:''}</h3>
                        </div>
                        <div className="answers-body-content">
                            <div>
                                {
                                    testBankData.blok?testBankData.blok.questionFirstList.map(item=>{
                                    if(toggleActive.includes(item.id)){
                                            return  <a href={'#'+item.subjects.id + (testBankData.blok.questionFirstList.indexOf(item)+1)}><span   className='answer-circle answer-circle2'>{testBankData.blok.questionFirstList.indexOf(item)+1}</span></a>
                                    }
                                    else{
                                        return <a href={'#'+item.subjects.id + (testBankData.blok.questionFirstList.indexOf(item)+1)}><span  className='answer-circle'>{testBankData.blok.questionFirstList.indexOf(item)+1}</span></a>
                                    }
                                    }):''
                                }
                            </div>
                        </div>
                        </div>
                        <div className="answers-body">
                        <div className="answers-body-head">
                            <h3>{testBankData.blok?testBankData.blok.blokSecond.nameUz:''}</h3>
                            <h3>{toggleActive2.filter((i)=>i.parentId===testBankData.blok.blokSecond.id).length}/{testBankData.blok?testBankData.blok.questionSecondList.length:''}</h3>
                        </div>
                        <div className="answers-body-content">
                        <div>
                                {
                                    testBankData.blok?testBankData.blok.questionSecondList.map(item=>{
                                    if(toggleActive.includes(item.id)){
                                            return  <a href={'#'+item.subjects.id + (testBankData.blok.questionSecondList.indexOf(item)+1)}><span   className='answer-circle answer-circle2'>{testBankData.blok.questionSecondList.indexOf(item)+1}</span></a>
                                    }
                                    else{
                                        return <a href={'#'+item.subjects.id + (testBankData.blok.questionSecondList.indexOf(item)+1)}><span  className='answer-circle'>{testBankData.blok.questionSecondList.indexOf(item)+1}</span></a>
                                    }
                                    }):''
                                }
                            </div>
                        </div>
                           </div>
                        <div className="answers-body">
                        <div className="answers-body-head">
                            <h3>{testBankData.blok?testBankData.blok.blokThird.nameUz:''}</h3>
                            <h3>{toggleActive2.filter((i)=>i.parentId===testBankData.blok.blokThird.id).length}/{testBankData.blok?testBankData.blok.questionThirdList.length:''}</h3>
                        </div>
                        <div className="answers-body-content">
                        <div>
                                {
                                    testBankData.blok?testBankData.blok.questionThirdList.map(item=>{
                                    if(toggleActive.includes(item.id)){
                                            return  <a href={'#'+item.subjects.id + (testBankData.blok.questionThirdList.indexOf(item)+1)}><span   className='answer-circle answer-circle2'>{testBankData.blok.questionThirdList.indexOf(item)+1}</span></a>
                                    }
                                    else{
                                        return <a href={'#'+item.subjects.id + (testBankData.blok.questionThirdList.indexOf(item)+1)}><span  className='answer-circle'>{testBankData.blok.questionThirdList.indexOf(item)+1}</span></a>
                                    }
                                    }):''
                                }
                            </div>
                        </div>
                           </div>
                            
                            
                            
                            
                            
                        
                    
                    
            </div>
        </div>
    );
};


export default Test;