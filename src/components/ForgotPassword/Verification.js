import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {VStack, FormControl, Input, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const Verification = () => {
  const image = require('../../assets/bg_pattern.png');
  const ArrowIcon = require('../../assets/Vector_4.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <View style={{flex: 0.05}}></View>
        <View style={styles.firstview}>
          <Image
            source={ArrowIcon}
            style={{width: 16, height: 16, color: '#9D9D9D'}}
            alt="Alternate Text"></Image>
          <Text style={[styles.text, {marginLeft: 100}]}>Get Verified</Text>
        </View>
        <View style={styles.secondview}>
          <Text style={styles.secondtext}>
            Carry out the free eharmony SMS verification now to receive SMS
            verified symbol for your profile!
          </Text>
        </View>
        <View style={styles.viewthree}>
          <VStack space={3}>
            <FormControl mt={4}>
              <FormControl.Label>
                <Text style={styles.inlinetext}>Enter your mobile number</Text>
              </FormControl.Label>
            
              <View style={{marginTop:10}}>
              <Input background="#F8F8F8" py="5"  borderRadius="10" style={{borderTopLeftRadius:10,position:'relative'}}/>
              <TouchableOpacity  style={{backgroundColor:'#FF0000',paddingHorizontal:15,paddingVertical:19,borderRadius:6,position:'absolute',display:'flex',alignSelf:'flex-end'}}><Text style={{alignSelf:'center',color:'#FFFFFF',fontSize:15,fontWeight:'600'}}>Send OTP</Text></TouchableOpacity>
          </View>
            </FormControl>
            
            <FormControl mt={5}>
              <FormControl.Label>
                <Text style={styles.inlinetext}>OTP</Text>
              </FormControl.Label>
              <Input background="#F8F8F8" py="5" mt={2} borderRadius="10" />
            </FormControl>
          </VStack>
          <LinearGradient
            colors={['#D72D79', '#9264F2']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                // console.log(props.navigation, 'e..');
                // props.navigation.navigate('signupthree');
              }}>
              <Text style={styles.buttonText}>Start the SMS verification</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //paddingHorizontal:20,
    //backgroundColor:'red'
  },
  firstview: {
    flex: 0.1,
    display: 'flex',
    flexDirection: 'row',
    //justifyContent:'space-evenly',
    paddingHorizontal: 20,
    //backgroundColor: 'yellow',
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: -5,
    //alignContent:'center'
  },
  secondview: {
    flex: 0.15,
    //backgroundColor: 'pink',
    //display:'flex',
    paddingHorizontal: 20,

    //justifyContent:'center',
    //alignItems:'center',
    // alignSelf:'center',
    //alignContent:'center',
  },
  secondtext: {
    color: '#5E5E5E',
    fontSize: 18,
    fontWeight: '400',
    maxWidth: 350,
    textAlign: 'center',
    lineHeight: 27,
  },
  viewthree: {
    flex: 0.45,
    //backgroundColor: 'blue',
    paddingHorizontal: 20,
  },
  inlinetext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  linearGradient: {
    width: '100%',
    marginTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    fontWeight: '600',
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
});

export default Verification;
