// import SET_AUTH from './userActionTypes'

import { SET_AUTH } from "./userActionTypes";

export const setAuth =(value)=>({
    type: SET_AUTH,
    payload: value,
})