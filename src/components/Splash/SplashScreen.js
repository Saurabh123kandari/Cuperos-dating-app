import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {Image} from 'native-base';

const SplashScreen = () => {
  const splashlogo = {
    uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/spalsh_screen.png',
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.viewone}></View>
      <View style={styles.viewtwo}>
        <Image style={styles.logo} source={splashlogo} alt="Alternate Text" />
      </View>
      <View style={styles.viewone}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#F27272',
  },
  viewone: {
    flex: 0.3,
  },
  viewtwo: {
    flex: 0.4,
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: 'center',
    width: '80%',
    height: '100%',
  },
});

export default SplashScreen;
