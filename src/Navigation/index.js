import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {PrivateRoute} from './PrivateRoutes';
import {PublicRoute} from './PublicRoutes';
//import {navigationRef} from '../services';
import {useSelector, useDispatch} from 'react-redux';

const Navigation = (props) => {
  // const userProfile = useSelector(state => state.userProfile);
  //   const [isAuth, setIsAuth] = useState(userProfile.isAuth);
  //   useEffect(()=>{
  //       setIsAuth(userProfile.isAuth)
  //   },[userProfile])

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer >
        {/* {isAuth ? <PrivateRoute  /> : <PublicRoute />} */}
        <PublicRoute {...props} />
      </NavigationContainer>
    </View>
  );
};
export default Navigation;
