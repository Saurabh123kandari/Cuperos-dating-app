import {createStore} from 'redux';
import rootReducer from './rootReducer';
// import {LOGOUT_USER} from '../../../../'

// const rootReducerWithLogout =(state, action ) =>{
//     if(action.type === LOGOUT_USER) {
//         state = undefine;
//     }
//     return rootReducer(state, action )
// }
const store = createStore(
    // rootReducerWithLogout,
    rootReducer,
    //composeEnhancers(applyMiddleware(...middleware))
  );

  export default store;