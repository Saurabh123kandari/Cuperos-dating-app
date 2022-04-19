import { SET_AUTH } from "./userActionTypes";

const initialState ={
    isAuth : false,
}

const userReducer =(state= initialState, action )=>{
   switch(action.types){
       case SET_AUTH :{
           return {
               ...state, 
               isAuth: action.payload
           }
       }
    default:{
        return state;
    };
   }
}
export default userReducer;