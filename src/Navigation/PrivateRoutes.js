import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {ComponentWrapper} from './ComponentWrapper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const stackArray = [
  {
    name: 'profile',
    component: props => (
      <ComponentWrapper>{/* <Profile {...props} /> */}</ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: true,
    },
  },
];

const NavigationDrawerStructure = props => {
  const user = useSelector(state => state.userProfile);

  console.log('props=====---', user.userRole);
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => (user?.userRole == 'customer' ? {} : toggleDrawer())}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
        {}
      </TouchableOpacity>
    </View>
  );
};

const StackContainer = props => {
  const user = useSelector(state => state.userProfile);

  const customHeaderStyle = {
    backgroundColor: '#59B0E2',
    borderWidth: 0,
    color: '#fff',
    borderColor: 'transparent',
  };

  return (
    <Stack.Navigator initialRouteName="profile" headerMode="screen">
      {stackArray.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            options={optionProps => {
              const {navigation} = optionProps;
              return {
                headerShown: true,
                title: '',
                title: user.userRole.toLocaleUpperCase(), //Set
                headerTintColor: '#fff',
                headerBackTitle: '',
                headerBackTitleVisible: false,
                headerStyle: customHeaderStyle,
                headerLeftContainerStyle: {
                  marginLeft: 12,
                },
                headerLeft: props => (
                  <NavigationDrawerStructure
                    navigationProps={navigation}
                    props={props}
                  />
                ),
              };
            }}>
            {p => <item.component {...p} {...props} />}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
};

const DrawerContent = props => {
const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  // const user=useSelector(state => state.userProfile)
  return (
    //  user.userRole === 'organiser' ?
    <View style={{}}></View>
  );
};

export const PrivateRoute = props => {
  const user = useSelector(state => state.userProfile);
  return (
    <DrawerStack.Navigator
      drawerStyle={{
        backgroundColor: '#186AA5',
        width: 240,
      }}
      initialRouteName="Home"
      drawerContent={p => <DrawerContent {...p} />}>
      <DrawerStack.Screen name="" component={StackContainer} />
    </DrawerStack.Navigator>
  );
};
const styles = StyleSheet.create({
  section: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 19,
    fontWeight: '500',
    color: '#fff',
  },
  cardImage2: {
    height: '100%',
    width: '100%',
  },
  iconMain: {
    fontSize: 28,
    marginRight: 15,
    color: '#fff',
  },

  buttonImageIconStyle: {
    height: 20,
    width: 22,
    resizeMode: 'stretch',
  },
  logOut: {
    fontSize: 30,
    marginTop: 15,
    color: '#fff',
  },
  logout_text: {
    fontSize: 13,
    color: 'white',
    fontWeight: '400',
    // padding: 10,
    textAlign: 'center',
    marginTop: -2,
    marginBottom: 25,
  },
});
