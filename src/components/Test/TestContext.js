import React,{createContext,useState} from 'react';

export const TestContext=createContext();

export const TestProvider=(props)=>{
    const[checkedItems,setCheckedItems]=useState([])
    return(
    <TestContext.Provider value={[checkedItems,setCheckedItems]}>
        {
            props.children
        }
    </TestContext.Provider>
    );
}