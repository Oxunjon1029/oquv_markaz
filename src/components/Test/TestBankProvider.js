import React,{createContext, useState} from 'react';

export const TestBankContext=createContext();

export const TestBankProvider=(props)=>{
    const [testBankData,setTestBankData]=useState([])
    return(
    <TestBankContext.Provider value={[testBankData,setTestBankData]}>
        {
            props.children
        }
    </TestBankContext.Provider>
    );
}