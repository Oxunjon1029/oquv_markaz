import React,{createContext,useState} from 'react';

export const SignInContext=createContext();

export const SignInProvider=(props)=>{
    const[isSign,setSign]=useState(false)
    return(
    <SignInContext.Provider value={[isSign,setSign]}>
        {
            props.children
        }
    </SignInContext.Provider>
    );
}