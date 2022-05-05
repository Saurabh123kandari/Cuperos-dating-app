import * as React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,

  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import {Image } from 'native-base'
// import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, Text, Center, useColorModeValue} from 'native-base';
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
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>  
        <View style={styles.header}>
          <Image source={searchimage} size={7} style={{marginTop:10}} resizeMode="contain"></Image>
          <Text style={styles.main_header}>Explore</Text>
          <Image source={filterimage} size={10}  resizeMode="contain"></Image>
        
        </View>
        <ImageBackground source={bgpattern} style={{height:'100%',width:'100%'}}>
        <View style={styles.view}>
          <View style={styles.maincard}>
            <Image source={image} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
          <View style={styles.maincard}>
            <Image source={imageone} style={styles.image}></Image>
            <View
              style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.maincard}>
            <Image source={imagetwo} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.maincard}>
            <Image source={imagethree} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.maincard}>
            <Image source={imagefive} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
        
          <View style={styles.maincard}>
            <Image source={imagesix} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.maincard}>
            <Image source={imageseven} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.maincard}>
            <Image source={imageeight} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
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
    // backgroundColor:'yellow',
    // margin:20
    // alignItems: 'center',
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
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  maincard:{
    elevation: 5,
    alignItems: 'center', 
  },
  image: {
    zIndex: 99,
    margin: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  card:{
    zIndex: 100,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    borderRadius: 11,
    alignItems:'center',
    padding:10,
    marginTop: -50,
    marginBottom: 10,
  },
  percentbox:{
    marginTop:-20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF0000',
    paddingHorizontal: 10,
    margin:15,
    left:15
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
