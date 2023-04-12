import { DELETE_ENTRY } from "./tabletype"

export const deleteElement=(id)=>{
    return {
        type:DELETE_ENTRY,
        payload:id
    }
}

