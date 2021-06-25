import React,{createContext, useState} from 'react';

export const ToggleContext=createContext();

export const ToggleProvider=(props)=>{
    const [toggleActive,setToggleActive]=useState([])
    return(
    <ToggleContext.Provider value={[toggleActive,setToggleActive]}>
        {
            props.children
        }
    </ToggleContext.Provider>
    );
}