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

import SignupThree from '../components/Auth/Signup/Signupthree';
import SignupTwo from '../components/Auth/Signup/Signuptwo';
import SignupOne from '../components/Auth/Signup/SignupOne';
// import {View} from 'native-base';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
// const DrawerStack = createDrawerNavigator();
const stackArray = [
  {
    name: 'signup',
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
    name: 'signupthree',
    component: props => (
      <ComponentWrapper>
        <SignupThree {...props} />
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
    <Stack.Navigator initialRouteName="signup">
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
                 headerShown: true,
                // title: '',
                headerTintColor: 'yellow',
                headerBackTitle: '',
                headerBackTitleVisible: false,
                headerStyle: customHeaderStyle,
                headerLeftContainerStyle: {
                  marginLeft: 12,
                },

                // headerLeft: props => {
                //   return (
                //     <TouchableOpacity
                //       style={styles.backBtnStyle}
                //       onPress={() => navigation.goBack()}>
                //       <Text>Header</Text>
                //     </TouchableOpacity>
                //   );
                // },

                header: p => {
                  return (
                    <TouchableOpacity
                       //style={styles.backBtnStyle}
                      onPress={() => navigation.goBack()}>
                      <ChevronLeftIcon iconName="chevron-left" size="8" />
                      {/* <Text>Back</Text> */}
                    </TouchableOpacity>
                  );
                },
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
