import React,{createContext, useState} from 'react';

export const ToggleContext2=createContext();

export const ToggleProvider2=(props)=>{
    const [toggleActive2,setToggleActive2]=useState([])
    return(
    <ToggleContext2.Provider value={[toggleActive2,setToggleActive2]}>
        {
            props.children
        }
    </ToggleContext2.Provider>
    );
}