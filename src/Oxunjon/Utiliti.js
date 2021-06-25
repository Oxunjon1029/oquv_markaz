export const setLocalstorage=(key,value)=>{
    localStorage.setItem(key,value)
}


export const GetLanguage=()=>{
    return localStorage.getItem("Oxunjon1999")==="uzbekcha"
}

export const GetEnlanguage=()=>{
    return localStorage.getItem("Oxunjon1999")==="inglizcha"
}
