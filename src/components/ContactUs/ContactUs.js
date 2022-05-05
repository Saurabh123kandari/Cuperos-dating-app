import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Image} from 'native-base';

const ContactUs = () => {
  const bgpattern = require('../../assets/bg_pattern.png');
  const rightarrow = require('../../assets/RightArrow.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground
        source={bgpattern}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.view_one}>
          <Image
            size={5}
            resizeMode={'contain'}
            //   borderRadius={100}
            source={rightarrow}
            alt="Alternate Text"
          />
          <Text style={styles.inner_text}>Contact Us</Text>
        </View>
        <View style={styles.view_two}>
          <Text style={styles.text_one}>
            Contact{'\n'}
            {'\n'}
            {'\n'}
            For any issues regarding the Cuperos, or {'\n'}if you have comments
            or suggestions on {'\n'}how to improve it, please email us at {'\n'}
            <Text style={{color: '#F48327'}}>support@cuperos.com</Text>
            {'\n'}
            {'\n'}
            {'\n'}
            Our mailing address is:{'\n'}
            {'\n'}
            Cuperos {'\n'}
            91 Jockey Hollow Street{'\n'}
            Auburn, NY 13021{'\n'}
            {'\n'}
            {'\n'}
            Our corporate address is:{'\n'}
            {'\n'}
            Cuperos{'\n'}
            91 Jockey Hollow Street{'\n'}
            Auburn, NY 13021{'\n'}
            {'\n'}
            {'\n'}
            Our phone number is 123 456 789.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  view_one: {
    flex: 0.03,
    // backgroundColor: 'red',

    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inner_text: {
    textAlign: 'center',
    marginTop: -20,
    fontWeight: '600',
    fontSize: 24,
  },
  view_two: {
    flex: 0.67,
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text_one: {
    fontSize: 16,
    fontWeight: '400',
    color:' #919191'
    //  maxWidth:330
  },
});

export default ContactUs;
