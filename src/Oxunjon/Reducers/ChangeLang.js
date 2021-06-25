import {setLocalstorage,GetLanguage,GetEnlanguage} from '../Utiliti';
export const ChangeLang = (state=true,action) =>{
    switch(action.type){
        case "UZ":
            setLocalstorage("Oxunjon1999","uzbekcha")
        return false
        case "EN":
            setLocalstorage("Oxunjon1999","inglizcha")
            return true
        default :


        {!GetLanguage() ? setLocalstorage("Oxunjon1999","uzbekcha"):setLocalstorage("Oxunjon1999","inglizcha")}
            return state
    }
}