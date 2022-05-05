//import { ScrollView } from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, ImageBackground,ScrollView, TouchableOpacity} from 'react-native';

import {ARROW_ICON, ARROW_RIGHT} from '../../constant/App_Constant';
import GalleryView from './GalleryView';

const MyProfile = (props) => {
    const backimg = require('../../assets/BackgroundIcon.png');
    const profilelogo = require('../../assets/ProfileIcon.png');
    const settinglogo = require('../../assets/cog.png');
    const rewardlogo = require('../../assets/gift.png');
    const supportlogo = require('../../assets/support.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
   
      <View style={styles.view_one}>
        <View style={styles.firstview}>
          <Image source={ARROW_ICON} style={{color:'white'}} alt="Alternate Text"></Image>
          <Text style={styles.faqtext}>My Profile</Text>
        </View>
        {/* <View style={{backgroundColor:'orange',marginTop:20,paddingVertical:20}}> */}
        <Image source={profilelogo} style={{borderRadius:100,alignSelf:'center',top:50}}></Image>
        <View>
        <Image source={backimg} style={{alignSelf:'center',opacity:0.3,bottom:20}}></Image>
        <View style={{position:'absolute',bottom:0,alignSelf:'center',bottom:50}}>
          <Text style={{fontSize:24,fontWeight:'600',color:'#FFFFFF'}}>Aarianna Barnes</Text>
          <Text style={{fontSize:18,fontWeight:'400',color:'#FFFFFF',textAlign:'center'}}>Profile Visits 65%</Text>
        </View>
        </View>
        {/* </View>
      
        */}
          <View style={styles.view_three}>
              <View>
              <TouchableOpacity onPress={()=>{props.navigation.navigate('rewards')}}><Image source={rewardlogo} ></Image></TouchableOpacity>
                  <Text style={styles.innertext}>Invite Friends</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('contactus')}}>
                  <Image source={supportlogo} ></Image>
                  </TouchableOpacity>
                  <Text style={styles.innertext}>Contact Us</Text>
              </View>
              <View>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate('settings')}}><Image source={settinglogo} ></Image></TouchableOpacity>
                  <Text style={styles.innertext}>Settings</Text>
              </View>

          </View>
      </View>
      <View style={styles.view_two}>
        <GalleryView/>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EF7272',
  },
  view_one: {
    flex: 0.7,
    //backgroundColor: 'yellow',
  },
  view_two: {
    flex: 0.3,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,

  },
  firstview: {
    display: 'flex',
    //flexDirection:'row',
    //justifyContent:'space-between',
    padding: 15,
    //backgroundColor: 'pink',
    marginTop:5
  },
  faqtext: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -20,
  },
  view_three:{
      display:'flex',
      flexDirection:'row',
      //alignSelf:'center',
      justifyContent:'space-between',
      paddingHorizontal:20,
      marginTop:20
  },
  innertext:{
    color:'#FFFFFF',
    textAlign:'center'
  }
});
export default MyProfile;
