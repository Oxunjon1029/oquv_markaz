import React, { useContext, useState } from 'react';
import './TestExample.css'
import {BiChevronRight} from 'react-icons/all'
import { TestContext } from './TestContext';
import { ToggleContext } from './ToggleContext';
import { ToggleContext2 } from './ToggleContext2';
import axios from 'axios';
import { SignInContext } from '../../Oxunjon/SignIn/SignInContext';


const TestExample = ({number,text,variants,q_id,parentId}) => {
    const [checkedItems,setCheckedItems]=useContext(TestContext)
    const [toggleActive,setToggleActive]=useContext(ToggleContext)
    const [toggleActive2,setToggleActive2]=useContext(ToggleContext2)
    const[checked,setChecked]=useState(null)
    const[isSign,setSign]=useContext(SignInContext)
    const handleTestItem=(item)=>{

       
        if(isActive===item.id){
            setIsActive(null)

            const testActive2=toggleActive2.filter(
                (i)=>i.q_id !== q_id
            );
            setToggleActive2(testActive2)

            const testActive=toggleActive.filter(
                (i)=>i !== q_id
            );
            setToggleActive(testActive)


            setChecked(null)


            const test=checkedItems.filter(
                (i)=>i.q_id !== q_id
            );
            setCheckedItems(test)
        }
        else{
            axios({
                url: `https://educational-center-web-app.herokuapp.com/api/user/blok/${q_id}?selectedId=${item.id}`,
                method: `post`,
                data:{
                    questionId:q_id,
                    selectedId:item.id
                },
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            }).then(res=>{
                console.log(res);
                console.log('savol jonatildi');
            }).catch(res=>{
                console.log('savol varianti tanlanmadi');
                console.log(res);
            })
        
            if(checked===q_id){
                setIsActive(item.id)


                const test=checkedItems.filter(
                    (i)=>i.q_id !== q_id
                );
                test.push(item)
                setCheckedItems(test)
            }
           else{
            setIsActive(item.id)

            setCheckedItems([...checkedItems,item])

            setToggleActive([...toggleActive,q_id])

            setToggleActive2([...toggleActive2,{q_id:q_id,parentId:parentId}])

            setChecked(q_id)
           }
        }
    }
    
    
    const [isActive, setIsActive] = useState(null)
    return (
        <div id={parentId+number} className={isActive?'test-example test-example2':'test-example'}>
            <div className="test-quiz">
                <p>
                <span className="test-num">{number}.</span>{text}
            </p>                
            </div>
            <div>
                        {
                            variants.map(item=>{
                                if(item.id===isActive){
                                    return <div className="test-variant selected-item" onClick={()=>handleTestItem(item)}>
                                    <p><span className="test-var">{variants.indexOf(item)===0?'A':variants.indexOf(item)===1?'B':variants.indexOf(item)===2?'C':'D'})</span> {item.titleUz}</p>
                                    <a href={'#'+parentId+(number+1)}><span className='next-test'><BiChevronRight size='24'/></span></a>

                                </div>
                                }
                                else{
                                    return <div  className="test-variant" onClick={()=>handleTestItem(item)}>
                                    <p><span className="test-var">{variants.indexOf(item)===0?'A':variants.indexOf(item)===1?'B':variants.indexOf(item)===2?'C':'D'})</span> {item.titleUz}</p>
                                    <a href={'#'+parentId+(number+1)}><span className='next-test'><BiChevronRight size='24'/></span></a>
                                </div>
                                }
                            })
                        }
                        
            </div>
        </div>
    );
};


export default TestExample;