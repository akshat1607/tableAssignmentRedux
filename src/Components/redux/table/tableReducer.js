import { ADD_ENTRY, DELETE_ENTRY, UPDATE_ENTRY } from "./tabletype"

const initialElement={
    entries:[]
}

const tableReducer=(state=initialElement,action)=>{
    switch(action.type){
        case ADD_ENTRY:
            return {...state,entries:[...state.entries,action.payload]}
        case DELETE_ENTRY:{
            const ind=action.payload

            let arr = [...state.entries]
            arr.splice(ind, 1)
            return {...state,entries:arr}
        }
        case UPDATE_ENTRY:{
            const ind=action.payload.index
            const e=action.payload.entry
            console.log(e)
            let arr = [...state.entries];
            arr[ind] = e;
            console.log(arr)
            return {...state,entries:arr}
        }
        default : return state
    }

}


export default tableReducer