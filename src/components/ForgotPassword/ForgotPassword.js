import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Progress,
  ChevronLeftIcon,
  Image,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {BACKGROUND_IMAGE} from '../../constant/App_Constant';

const ForgotPassword = () => {
  // const image = {
  //   uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/bg_pattern.png',
  // };
  const logo = {
    uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/logo.png',
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground source={BACKGROUND_IMAGE} style={{width: '100%', height: '100%'}}>
        <View style={styles.View_One}></View>
        <View style={styles.View_Two}>
          <Image style={styles.logo} source={logo} alt="Alternate Text" />
          <Text style={styles.ViewTextOne}>Reset</Text>
          <Text style={styles.ViewTextTwo}>Reset your password</Text>
          <FormControl mt="5">
            <Input
              mt="5"
              placeholder=" Email / Mobile No."
              background="#F8F8F8"
              py="3.5"
              borderRadius="10"
              fontSize="16"
              fontWeight="400"
              borderColor="#C4C4C4"
            />
            <LinearGradient
              colors={['#D72D79', '#9264F2']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Reset</Text>
            </LinearGradient>
          </FormControl>
        </View>
        <View style={styles.View_Three}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  View_One: {
    flex: 0.3,
  },
  View_Two: {
    flex: 0.4,
    paddingHorizontal: 20,
  },
  View_Three: {
    flex: 0.3,
  },
  logo: {
    alignSelf: 'center',
    width: '45%',
    height: 35,
    background: 'contain',
  },
  ViewTextOne: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginTop: 30,
  },
  ViewTextTwo: {
    fontSize: 18,
    fontWeight: '400',
    color: '#5E5E5E',
    textAlign: 'center',
    marginTop: 5,
  },
  linearGradient: {
    width: '100%',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 4,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    //fontFamily: 'Poppins',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: '600',
    // backgroundColor: 'transparent',
  },
});

export default ForgotPassword;
