import {ADD_CONTACT} from './types';
import Axios from 'axios';




export const addContact=(contact)=> async dispatch=>{
    const response= await Axios.post('https://codecatalyst-test.herokuapp.com/api/submit/project')
    .then(res=>{
        console.log(res)
    })
    dispatch({
        type:ADD_CONTACT,
        payload:response.data
    })
}

