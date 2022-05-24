/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//  console.disableYellowBox = true;
 
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {SafeAreaView, ScrollView, StyleSheet, View,Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Signin from './src/components/Auth/Signin/Signin';
import SignupOne from './src/components/Auth/Signup/SignupOne';
import Signuptwo from './src/components/Auth/Signup/Signuptwo';
import Signupthree from './src/components/Auth/Signup/Signuptwo';
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
import Onboarding1 from './src/components/Onboarding/Onboarding1';
import Questionaireone from './src/components/Questionaires/Questionaireone';
import Questionairetwo from './src/components/Questionaires/Questionairetwo';
import Questionairethree from './src/components/Questionaires/Questionairethree';
import Questionaireseven from './src/components/Questionaires/Questionaireseven';
import Questionairefour from './src/components/Questionaires/Questionairefour';
import Questionairefive from './src/components/Questionaires/Questionairefive';
import Questionairesix from './src/components/Questionaires/Questionairesix';
 import ChangePassword from './src/components/ForgotPassword/ChangePassword';
import Verification from './src/components/ForgotPassword/Verification';
import ContactUs from './src/components/FAQ/FAQ';
import TermsCondition from './src/components/Terms&Condition/TermsCondition';
import Navigation from './src/Navigation';
import FAQ from './src/components/FAQ/FAQ';
import Onboarding from './src/components/Onboarding/Onboarding1';
import Thankyou from './src/components/Thankyou/Thankyou';
import SubscriptionPlan from './src/components/Subscription/SubscriptionPlan';
import EditProfile from './src/components/UserProfile/EditProfile';
import MyProfile from './src/components/UserProfile/MyProfile';
import NewMatches from './src/components/NewMatches/NewMatches'
import LikedBy from './src/components/LikedBy/LikedBy'
import ChatList from './src/components/Chat/ChatList';
import ChatDetails from './src/components/Chat/ChatDetails';
import MatchesTabView from './src/components/Matches/MatchesTabView';
import MatchesList from './src/components/Matches/MatchesList';
import Tabview from './src/Navigation/Tabview';

const App = props => {
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NativeBaseProvider>
      {/* <SplashScreen /> */}
      {/* <SignupOne /> */}
      {/* <Signuptwo /> */}
      {/* <Signupthree /> */}
      {/* <ForgotPassword /> */}
      {/* <Onboarding1/> */}
      <Navigation {...props}/>
       {/* <Signin /> */}
      {/* <Questionaireone/> */}
      {/* <Questionairetwo/> */}
      {/* <Questionairethree/> */}
      {/* <Questionaireseven /> */}
      {/* <Questionairefour/> */}
      {/* <Questionairefive/> */}
      {/* <Questionairesix/> */}
      {/* <ChangePassword/> */}
      {/* <Verification/> */}
      {/* <ContactUs/> */}
      {/* <TermsCondition/> */}
      {/* <FAQ/> */}
      {/* <Onboarding/> */}
      {/* <Thankyou/> */}
    {/* <SubscriptionPlan/> */}
    {/* <EditProfile/> */}
  {/* <MyProfile/> */}
    {/* <NewMatches/> */}
    {/* <LikedBy/> */}
    {/* <ChatList/> */}
    {/* <ChatDetails/> */}
{/* <MatchesTabView/> */}
{/* <MatchesList/> */}
{/* <LikedBy/> */}
    {/* <Tabview/> */}
      
    </NativeBaseProvider>
  );
};

export default App;
