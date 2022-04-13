/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View,Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import SignupOne from './src/components/Auth/Signup/SignupOne';
import Signuptwo from './src/components/Auth/Signup/Signuptwo';
import Signupthree from './src/components/Auth/Signup/Signupthree';
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
// import SplashScreen from './src/components/Splash/SplashScreen';
import Onboarding1 from './src/components/Onboarding/Onboarding1';
import Questionaire1 from './src/components/Questionaires/Questionaire1';
// import QuestionairesSeven from './src/components/Questionaires/QuestionaireSeven';
import QuestionaireSeven from './src/components/Questionaires/QuestionaireSeven'

// import Navigation from './src/Navigation';

const App = props => {
  return (
    <NativeBaseProvider>
      {/* <SplashScreen /> */}
      {/* <SignupOne /> */}
      {/* <Text>new o</Text> */}
      {/* <Signuptwo /> */}
      {/* <Signupthree /> */}
      {/* <ForgotPassword /> */}
      {/* <Onboarding1/> */}
      {/* <Navigation {...props}/> */}
      <QuestionaireSeven/>
      {/* <QuestionairesSeven /> */}
    </NativeBaseProvider>
  );
};

export default App;
