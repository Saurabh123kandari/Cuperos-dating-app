import * as React from 'react';
import {
  View,
  TouchableOpacity,
  

  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import {Image,ScrollView, } from 'native-base'
// import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, Text, Center, useColorModeValue} from 'native-base';
import { height } from 'dom-helpers';
const bgpattern=require('../../assets/bg_pattern.png')
const image = require('../../assets/Man.png');
const imageone = require('../../assets/Manone.png');
const imagetwo = require('../../assets/Mantwo.png');
const imagethree = require('../../assets/Manthree.png');
const blankimage = require('../../assets/Blank.png');
const imagefive = require('../../assets/image5.png');
const imageeight = require('../../assets/image8.png');
const imagesix = require('../../assets/image6.png');
const imageseven = require('../../assets/image7.png');
const crossimage = require('../../assets/cross.png');
const plusimage = require('../../assets/plus.png');
const searchimage = require('../../assets/Search.png');
const filterimage = require('../../assets/filter.png');





const Explore = () => {

  const data = [
    {
      id: 1,
      profileimage:image, 
      textone: 'Lucasz Pl',
      texttwo:'Male, 28',
      textthree:'New York',
      iconcolor:'#00FD19'
    },
    {
      id: 2,
      profileimage: imagefive,
      textone: 'Lucasz Pl',
      texttwo:'Male, 28',
      textthree:'New York',
      iconcolor:'#C4C4C4'
    },
    {
      id: 3,
      profileimage: imageseven,
      textone: 'Lucasz Pl',
      texttwo:'Male, 28',
      textthree:'New York',
      iconcolor:'#C4C4C4'
    },
    {
      id: 4,
      profileimage: imagesix,
      textone: 'Lucasz Pl',
      texttwo:'Male, 28',
      textthree:'New York',
      iconcolor:'#00FD19'
    },
    {
      id: 5,
      profileimage: imagetwo,
      textone: 'Lucasz Pl',
      texttwo:'Male, 28',
      textthree:'New York',
      iconcolor:'#00FD19'
    },

    {
      id: 6,
      profileimage: imageeight,
      textone: 'Lucasz Pl',
      texttwo:'Male, 28',
      textthree:'New York',
      iconcolor:'#C4C4C4'
    },
    
  ];


  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>  
        <View style={styles.header}>
          <Image source={searchimage} size={7} style={{marginTop:10}} resizeMode="contain"></Image>
          <Text style={styles.main_header}>Explore</Text>
          <Image source={filterimage} size={10}  resizeMode="contain"></Image>
        </View>
        <ImageBackground source={bgpattern} resizeMode="contain" style={{height:'100%',width:'100%'}}>
        <View style={styles.view}> 
       
          {/* <View style={{backgroundColor:'red'}}>
            <Image source={image} ></Image>
            <View style={styles.inner_view}>
              <View style={styles.mainview}>
              <View style={styles.first_view}>
              <Text>Lucasz Pl</Text>
              <View style={styles.online_view}></View>
              </View>
              <View style={styles.second_view}>
              <Text style={{textAlign:'center'}}>75%</Text>
              
              </View>
              </View>


              <Text>Male 28</Text>
              <Text>New York</Text>
              </View>

          </View> */}
        {data.map(item=>{
          return(
            <View style={styles.maincard}>
            <Image source={item.profileimage} resizeMode="contain" style={styles.image} />
            <View style={styles.card}>
              <View style={{ }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={styles.card_heading} >{item.textone} </Text>
                 <View style={[styles.online_view,{backgroundColor:item.iconcolor}]}></View>
                 </View>
                <Text style={styles.card_subheading}>{item.texttwo}</Text>
                <Text style={styles.card_subheading}>{item.textthree}</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View> 

          )
        })}
           
          
          
       
        </View> 
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer:{
flex:1,
 backgroundColor:'#FFFFFF'
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent:'space-between',
  //  backgroundColor:'yellow',
    padding:20
   
    
  },
  main_header: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Poppins',
    // margin: 22,
    color:'#FF0000',
  paddingTop:15
  },
  sub_header: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#A4A4A4',
  },
  view: {
     flex: 0.9,
    display: 'flex',
     flexDirection: 'row',
   justifyContent: 'space-between',
     flexWrap: 'wrap',
    // backgroundColor:'pink',
    paddingHorizontal:20
  },
  maincard:{
    //  backgroundColor:'red',
     elevation: 5,
    // alignItems: 'center',
    marginVertical:10,
    height:'32%',
   
      // shadowColor: 'red',
      // shadowOffset: {width: -2, height: 8},
      // shadowOpacity: 0.6,
      // shadowRadius: 3,
   
  },
  image: {
    // zIndex: 99,
    // margin: 10,
    // borderRadius:20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // height:'100%'
  },
  card:{
    // zIndex: 100,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    // justifyContent: 'space-between',
    borderRadius: 11,
    alignItems:'center',
    //  padding:10,
    // marginTop: -50,
    // marginBottom: 10,
    padding:11,
    position:'absolute',
     bottom:0
  },
  percentbox:{
    marginTop:-20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF0000',
    paddingHorizontal: 5,
    //  margin:13,
    marginLeft:15
  },
  card_heading:{
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    // margin: 20,
  },
  card_subheading:{
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  inner_view:{
  backgroundColor:'#ffffff',
  position:'absolute',
  bottom:0,
  padding:10,
  paddingHorizontal:25.5
  },
  online_view:{
    backgroundColor:'#00FD19',
    width:10,
    height:10,
    borderRadius:10,
    marginLeft:10,
    marginTop:6
  },
  first_view:{
    display:'flex',
    flexDirection:'row',
    
  },
  second_view:{
    borderWidth:1,
    borderRadius:20,
    padding:5
  },
  mainview:{
    display:'flex',
    flexDirection:'row',
    // paddingHorizontal:20
    // justifyContent:'space-between',
    // width:'35%'
  }
  //   linearGradient: {
  //     width: '100%',
  //     marginTop: 20,
  //     paddingHorizontal: 20,
  //     //paddingRight: 15,
  //     paddingVertical: 4,
  //     borderRadius: 5,
  //   },
  //   buttonText: {
  //     fontSize: 18,
  //     fontFamily: 'Gill Sans',
  //     textAlign: 'center',
  //     margin: 10,
  //     color: '#ffffff',
  //     // backgroundColor: 'transparent',
  //   },
});
export default Explore;
