import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  
  TouchableOpacity,
} from 'react-native';
import {ARROW_ICON, ARROW_RIGHT} from '../../constant/App_Constant';
import {Button,ScrollView,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native';

const Settings = props => {
  const reward = require('../../assets/Reward.png');
  const arrow = require('../../assets/RightArrow.png');
  const lock = require('../../assets/Locks.png');

  return (
     <SafeAreaView style={styles.MainContainer}>
      <ScrollView >
        <View style={{flex: 0.05,backgroundColor:'red'}}>

        </View>


        <View style={styles.firstview}>
          <Image source={ARROW_ICON} style={{}} alt="Alternate Text"></Image>
          <Text style={styles.faqtext}>Settings</Text>
        </View>

        <View style={styles.view_two}>
          <View>
            <Text style={styles.heading}>My Subscription</Text>
            <View style={styles.innerview}>
              <Text style={styles.innertextone}>Cuperos Premium</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  width: '60%',
                }}>
                <Text style={styles.innertexttwo}>Auto Renew</Text>
                <ToggleSwitch
                  isOn={false}
                  onColor="green"
                  offColor="red"
                  style={{marginLeft: 10}}
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="small"
                  onToggle={isOn => console.log('changed to : ', isOn)}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Invite Friends</Text>
            <View
              style={[
                styles.innerview,
                {
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                },
              ]}>
              <View style={styles.innerdiv}>
                <Image source={reward} style={{}} alt="Alternate Text"></Image>
                <Text
                  style={[styles.textt, {textAlign: 'center', marginTop: 5}]}>
                  Refer & Earn
                </Text>
              </View>
              <Image
                source={arrow}
                resizeMode="contain"
                style={{marginTop: 9}}
                alt="Alternate Text"></Image>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>FAQ</Text>
            <TouchableOpacity
            onPress={()=>{props.navigation.navigate('faq')}}
              style={[
                styles.innerview,
                {justifyContent: 'space-between', paddingHorizontal: 20},
              ]}>
              <Text style={styles.textt}>FAQ</Text>
              <Image
                source={arrow}
                size={50}
                resizeMode="contain"
                alt="Alternate Text"></Image>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.heading}>Notifications</Text>
            <View style={[styles.innerview, {flexDirection: 'column',paddingVertical:0}]}>
              <Text style={[styles.textt,{marginTop:10}]}>Email</Text>
              <Text style={[styles.textt,{marginTop:10}]}>Push notifications</Text>
              <Text></Text>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Security & Privacy</Text>
            <View
              style={[
                styles.innerview,
                {justifyContent: 'space-between', paddingHorizontal: 20},
              ]}>
              <Text style={styles.textt}>Change Password</Text>
              <Image
                source={arrow}
                size={50}
                resizeMode="contain"
                alt="Alternate Text"></Image>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Mobile Number</Text>
            <View
              style={[
                styles.innerview,
                {justifyContent: 'space-between', paddingHorizontal: 20},
              ]}>
              <Text style={styles.textt}>+1234567890</Text>
              <Image
                source={arrow}
                size={50}
                resizeMode="contain"
                alt="Alternate Text"></Image>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Profile Visibility</Text>
            <View style={styles.innerr}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <Text style={styles.innertextone}>Public</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '85%',
                  }}>
                  <Text style={styles.innertexttwo}>On</Text>
                  <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="red"
                    style={{marginLeft: 10}}
                    labelStyle={{color: 'black', fontWeight: '900'}}
                    size="small"
                    onToggle={isOn => console.log('changed to : ', isOn)}
                  />
                </View>
              </View>
              <View style={styles.innerviewtwo}>
                <Text style={styles.textt}>Choose who sees you</Text>
                <Image
                  source={lock}
                  size={50}
                  resizeMode="contain"
                  alt="Alternate Text"></Image>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Get Verified</Text>
            <View
              style={[
                styles.innerview,
                {justifyContent: 'space-between', paddingHorizontal: 20},
              ]}>
              <Text style={styles.textt}>Verify your profile</Text>
              <Image
                source={arrow}
                size={50}
                resizeMode="contain"
                alt="Alternate Text"></Image>
            </View>
          </View> 
         
         
         </View>
        <View style={styles.view_four}>
            <LinearGradient
              colors={['#D72D79', '#9264F2']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}>
              <TouchableOpacity>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </LinearGradient>
            <Text style={{textAlign: 'center', marginBottom: 10,color:'#A4A4A4'}}>
              Cuperos v 0.1
            </Text>
            <Button p={3.5} style={styles.buttontwo} mb={10}>
              <Text style={styles.buttontextwo}>Deactivate</Text>
            </Button>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  firstview: {
    flex: 0.05,
    display: 'flex',
    paddingHorizontal: 20,
    marginVertical:40
    
  },
  faqtext: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: -25,
  },
  view_two: {
    flex:0.6,
    paddingHorizontal: 20,
  },
  innerview: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    boxShadow: '0 0 6 rgba(0, 0, 0, 0.12)',
    marginTop: 5,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  linearGradient: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 4,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  buttontwo: {
    backgroundColor: '#FF0000',
    borderRadius: 6,
  },

  buttontextwo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  innertextone: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FF0000',
  },
  innertexttwo: {
    color: '#6B6B6B',
    fontSize: 14,
    fontWeight: '400',
  },
  innerdiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
  },
  innerviewtwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerr: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 20,
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    boxShadow: '0 0 6 rgba(0, 0, 0, 0.12)',
  },
  textt: {
    color: '#383838',
    fontSize: 16,
    fontWeight: '400',
  },
  view_four:{
      flex:0.3,
      paddingHorizontal:20
  }
});
export default Settings;
