import {ADD_CONTACT} from '../actions/types'


const initialState ={
    contacts:[] 
};

export default (state=initialState,action) =>{
 switch(action.type){
    
     case ADD_CONTACT:
         return {
             ...state,
             contacts:[action.payload,...state.contacts]
         }   
        default:
            return state
}
}
