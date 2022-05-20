import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  View,
  
} from 'react-native';
// import {styles} from '@navigation/styles';ChevronLeftIcon,
import {ChevronLeftIcon} from 'native-base';
import {ComponentWrapper} from './ComponentWrapper';
import Onboarding1 from '../components/Onboarding/Onboarding1'
import Signin from '../components/Auth/Signin/Signin';
import SignupTwo from '../components/Auth/Signup/Signuptwo';
import SignupOne from '../components/Auth/Signup/SignupOne';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import Questionaireone from '../components/Questionaires/Questionaireone'
import Questionairetwo from '../components/Questionaires/Questionairetwo'
import Questionairethree from '../components/Questionaires/Questionairethree'
import Questionairefour from '../components/Questionaires/Questionairefour'
import Questionairefive from '../components/Questionaires/Questionairefive'
import Questionairesix from '../components/Questionaires/Questionairesix'
import Questionaireseven from '../components/Questionaires/Questionaireseven'
import Home from '../components/Home/Home';
import Filter from '../components/Filter/Filter';
import Tabview from '../Navigation/Tabview'
import ChatDetails from '../components/Chat/ChatDetails'
import Thankyou from '../components/Thankyou/Thankyou'
import ChatList from '../components/Chat/ChatList'
import MatchesList from '../components/Matches/MatchesList'
// import Tabview from './Tabview';
import SubscriptionPlan from '../components/Subscription/SubscriptionPlan'
import MyProfile from '../components/UserProfile/MyProfile';
import ItsAMatch from '../components/ItsAMatch/ItsAMatch';
import Settings from '../components/Settings/Settings.js';
import Reward from '../components/Reward/Reward';
import ContactUs from '../components/ContactUs/ContactUs';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import FAQ from '../components/FAQ/FAQ';
import ChangePassword from '../components/ForgotPassword/ChangePassword';
import Verification from '../components/ForgotPassword/Verification';
import UserProfile from '../components/UserProfile/UserProfile'
import ResetPassword from '../components/ForgotPassword/ResetPassword';

// import {View} from 'native-base';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
// const DrawerStack = createDrawerNavigator();
const stackArray = [
  {
    name: 'onboarding',
    component: props => (
      <ComponentWrapper>
     <Onboarding1 {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'signin',
    component: props => (
      <ComponentWrapper>
     <Signin {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'signupone',
    component: props => (
      <ComponentWrapper>
     <SignupOne {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'signuptwo',
    component: props => (
      <ComponentWrapper>
        <SignupTwo {...props} />
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'forgotpassword',
    component: props => (
      <ComponentWrapper>
        <ForgotPassword {...props} />
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'questionariesone',
    component: props => (
      <ComponentWrapper>
        <Questionaireone {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'questionariestwo',
    component: props => (
      <ComponentWrapper>
        <Questionairetwo {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'questionariesthree',
    component: props => (
      <ComponentWrapper>
        <Questionairethree {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'questionariesfour',
    component: props => (
      <ComponentWrapper>
        <Questionairefour {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'questionariesfive',
    component: props => (
      <ComponentWrapper>
        <Questionairefive {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'questionariessix',
    component: props => (
      <ComponentWrapper>
        <Questionairesix {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'questionariesseven',
    component: props => (
      <ComponentWrapper>
        <Questionaireseven {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'home',
    component: props => (
      <ComponentWrapper>
        <Home {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'filter',
    component: props => (
      <ComponentWrapper>
        <Filter {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'tabview',
    component: props => (
      <ComponentWrapper>
        <Tabview {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'thankyou',
    component: props => (
      <ComponentWrapper>
        <Thankyou {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'chatlist',
    component: props => (
      <ComponentWrapper>
        <ChatList {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'subscription',
    component: props => (
      <ComponentWrapper>
       <SubscriptionPlan {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'MyProfile',
    component: props => (
      <ComponentWrapper>
       <MyProfile {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'ItsAMatch',
    component: props => (
      <ComponentWrapper>
       <ItsAMatch {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'settings',
    component: props => (
      <ComponentWrapper>
       <Settings {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'rewards',
    component: props => (
      <ComponentWrapper>
       <Reward {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'contactus',
    component: props => (
      <ComponentWrapper>
       <ContactUs {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'privacypolicy',
    component: props => (
      <ComponentWrapper>
       <PrivacyPolicy {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'faq',
    component: props => (
      <ComponentWrapper>
       <FAQ {...props}/>
      </ComponentWrapper  >
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'changepassword',
    component: props => (
      <ComponentWrapper>
       <ChangePassword {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'resetpassword',
    component: props => (
      <ComponentWrapper>
       <ResetPassword {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'verification',
    component: props => (
      <ComponentWrapper>
       <Verification {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'userprofile',
    component: props => (
      <ComponentWrapper>
       <UserProfile {...props}/>
      </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
];
// function LogoTitle() {
//   return (
//    <Text>hgfhg</Text>
//   );
// }
// const StackContainer = props => {
export const PublicRoute = props => {
  const customHeaderStyle = {
    backgroundColor: 'blue',
    shadowOpacity: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: 'transparent',
  };
  return (
    <Stack.Navigator initialRouteName="onboarding">
      {stackArray.map((item, index) => {
        const isHeader = true;
        return (
          // <Stack.Screen
          //   name="Home"
          //   component={SignupOne}
          //   options={{ title: 'My home' }}
          // />
          <Stack.Screen
            style={styles.header}
            key={index}
            name={item.name}
            options={optionProps => {
              const {navigation} = optionProps;
              return {
                 headerShown: false,
                // title: '',
                headerTintColor: 'yellow',
                headerBackTitle: '',
                headerBackTitleVisible: false,
                headerStyle: customHeaderStyle,
                headerLeftContainerStyle: {
                  marginLeft: 12,
                },

                headerLeft: props => {
                  return (
                    <TouchableOpacity
                      style={styles.backBtnStyle}
                      onPress={() => navigation.goBack()}>
                      <Text>Header</Text>
                    </TouchableOpacity>
                  );
                },

                // header: p => {
                //   console.log(p,"prooooo")
                //   return (
                //     p?.route?.name ===  'signupone' || p?.route?.name ===  'signuptwo'   ? 
                   
                //       <ChevronLeftIcon onPress={() => navigation.goBack()} iconName="chevron-left" size="8" mt={8} />
                    
                //     :
                //     null
                //   );
                // },
              };
            }}>
            {p => <item.component {...p} {...props} />}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#287ced',
  },
  Btn: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'grey',
    paddingHorizontal: 10,
    margin: 5,
  },
  btncontainer: {
    display: 'flex',
    position: 'absolute',
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  inner: {
    flexDirection: 'row',
  },
  backBtnStyle: {
    backgroundColor: 'red',
  },
  cardImage: {
    marginLeft: 5,
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  signupheader: {
    height: 100,
  },
  headerImage: {
    height: 100,
    opacity: 0.5,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
