import {ADD_CONTACT} from './types';
import Axios from 'axios';




export const addContact=(contact)=> async dispatch=>{
    const response= await Axios.post('https://code-catalist-phone-book-rails.herokuapp.com/contacts/',contact)
    dispatch({
        type:ADD_CONTACT,
        payload:response.data
    })
}

