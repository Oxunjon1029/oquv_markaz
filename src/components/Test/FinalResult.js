import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import './FinalResult.css';
import { TestBankContext } from './TestBankProvider';

const FinalResult = ({allBall,ballFirst,ballSecond,ballThird,allCount,countFirst,countSecond,countThird}) => {
   const testBankData= JSON.parse(localStorage.getItem('testBank'))
const uz = useSelector(state=>state)
    return (
        <div className='final-result'>
            <div className="final-ball2">
                <h4>{uz?"Общие результаты:":"Umumiy natijalar:"}</h4>
                <div className='alert alert-primary'>
                   <h5>{uz?"Общее количество заработанных баллов:":"Jami to'plangan ball: "}{allBall}/{testBankData.blok.questionFirstList.length*3.1+testBankData.blok.questionSecondList.length*2.1+testBankData.blok.questionThirdList.length*1.1}</h5>
                </div>
                <div className='alert alert-primary'>
                   <h5>{uz?"Общее количество правильных вопросов:":"Jami to'gri topilgan savollar soni:"} {allCount}/{testBankData.blok.questionFirstList.length+testBankData.blok.questionSecondList.length+testBankData.blok.questionThirdList.length}</h5>
                </div>
            </div>
            <div className="final-subject-result">
            <div className="final-ball">
                <h4>{uz?"Первые научные результаты:":"Birinchi fan natijalari:"}</h4>
                <div className='alert alert-secondary'>
                   <h5>{uz?"Общее количество заработанных баллов:":"Jami to'plangan ball:"} {ballFirst}/{testBankData.blok.questionFirstList.length*3.1}</h5>
                </div>
                <div className='alert alert-secondary'>
                   <h5>{uz?"Общее количество правильных вопросов:":"Jami to'gri topilgan savollar soni:"} {countFirst}/{testBankData.blok.questionFirstList.length}</h5>
                </div>
            </div>
            <div className="final-ball">
                <h4>{uz?"Второй научный результат":"Ikkinchi fan natijalari"}</h4>
                <div className='alert alert-secondary'>
                   <h5>{uz?"Общее количество заработанных баллов:":"Jami to'plangan ball:"} {ballSecond}/{testBankData.blok.questionSecondList.length*2.1}</h5>
                </div>
                <div className='alert alert-secondary'>
                   <h5>{uz?"Общее количество правильных вопросов:":"Jami to'gri topilgan savollar soni:"} {countSecond}/{testBankData.blok.questionSecondList.length}</h5>
                </div>
            </div>
            <div className="final-ball">
                <h4>{uz?"Третьи научные результаты:":"Uchinchi fan natijalari:"}</h4>
                <div className='alert alert-secondary'>
                   <h5>{uz?"Общее количество заработанных баллов:":"Jami to'plangan ball:"} {ballThird}/{testBankData.blok.questionThirdList.length*1.1}</h5>
                </div>
                <div className='alert alert-secondary'>
                   <h5>{uz?"Общее количество правильных вопросов:":"Jami to'gri topilgan savollar soni:"} {countThird}/{testBankData.blok.questionThirdList.length}</h5>
                </div>
            </div>
            </div>
        </div>
    );
};


export default FinalResult;