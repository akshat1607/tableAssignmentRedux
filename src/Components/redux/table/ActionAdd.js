import { ADD_ENTRY } from "./tabletype"

export const addElement=(e)=>{
    return {
        type:ADD_ENTRY,
        payload:e
    }
}



