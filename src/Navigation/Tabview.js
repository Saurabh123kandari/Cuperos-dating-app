import * as React from 'react';
import { Button, View, Text ,Image} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home/Home';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import ResetPassword from '../components/ForgotPassword/ChangePassword';
import SubscriptionPlan from '../components/Subscription/SubscriptionPlan';
import MatchesList from '../components/Matches/MatchesList'
import ChatList from '../components/Chat/ChatList';
import Explore from '../components/Explore/Explore';



const Tab = createBottomTabNavigator(
   
);
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function Tabview() {
  return (
  
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="First"
        component={Home}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('../assets/home.png')} style={{width:20,height:20,resizeMode:'contain'}}/>
            ),
          }} />
        <Tab.Screen name="Second"
        component={Explore}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('../assets/explore.png')} style={{width:20,height:20,resizeMode:'contain'}}/>
            ),
          }} />
       <Tab.Screen name="Third"
        component={MatchesList}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('../assets/matches.png')} style={{width:20,height:20,resizeMode:'contain'}}/>
            ),
          }} />
       <Tab.Screen name="Fourth"
        component={ChatList}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('../assets/chat.png')} style={{width:20,height:20,resizeMode:'contain'}}/>
            ),
          }} />
      </Tab.Navigator>
    
  );
}
