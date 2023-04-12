import { UPDATE_ENTRY } from "./tabletype"

export const updateElement=(id,e)=>{
    return {
        type:UPDATE_ENTRY,
        payload:{index:id,entry:e}
    }
}