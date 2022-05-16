import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Span
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
  ScrollView,
  Checkbox,
  Link,
  Image,
} from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
// import ButtonGrad from './ButtonGrad';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Home = props => {
  const roundImage = require('../../assets/Roundprofile.png');
  const location = require('../../assets/Vector.png');
  const filter = require('../../assets/filter.png');
  const like = require('../../assets/like.png');
  const dislike = require('../../assets/dislike.png');
  const userImage = require('../../assets/user_img.png');
  const mapImage = require('../../assets/VectorMap.png');
  const heart = require('../../assets/Cuperosheart.png'); 
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('MyProfile')
      }}>
        <Image style={styles.image_header} source={roundImage} />
        </TouchableOpacity>
       
        <View style={{flexDirection: 'row',justifyContent:'space-between',width:110}}>
          {/* <Image source={location} /> */}
          <Text>California, USA</Text>
        </View>
      <TouchableOpacity onPress={()=>{
          props.navigation.navigate('filter')
      }}>
      <Image source={filter} />
      </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={styles.heading_one}>
          <Text style={{color:'red'}}>Explore Love, </Text>one swipe at a time <Text style={{color:'red'}}>1111</Text>
        </Text>
      </View>
      <View style={styles.profile}>
        <ImageBackground
          source={userImage}
          resizeMode="contain"
          style={{
            width: '100%', 
            height: '100%', 
            display:'flex', 
            alignSelf: 'flex-end', 
            position: 'relative',
        }}
            >

          <View style={styles.image_card}>
            <View style={{}}>
              <Text style={{fontSize:16,color:'#000000',fontWeight:'600', marginVertical:3}}>Aarianna Barnes, 26</Text>
              <Text style={{fontSize:14,color:'#000000',fontWeight:'500',marginVertical:3}}>Product Designer</Text>
              <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',width:150, marginVertical:4}}> 
              <Image source={mapImage}></Image>
              <Text style={{fontSize:12,color:'#000000',fontWeight:'400'}}>New York, 26 Miles away</Text></View>
             
            </View>
            <View style={{ borderRadius:20, borderWidth:1,borderColor:'#FF0000',padding:5,paddingHorizontal:15}}>
                <Text style={{color:'#FF0000',fontWeight:'700',fontSize:18}}>75%</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <Image source={dislike} />
        <Image style={{marginBottom:20,width:'50%',height:'80%'}}  resizeMode="contain" source={heart} />
        <TouchableOpacity onPress={()=>{props.navigation.navigate('ItsAMatch')}}>
        <Image source={like} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    // backgroundColor:'red'
  },
  heading: {
    flex: 0.1,
    // backgroundColor:'red'
  },
  heading_one: {
    maxWidth: 280,
    // backgroundColor: 'yellow',
    fontSize: 24,
    fontWeight: '500',
    color: '#5E5E5E',
    textAlign: 'center',
    alignSelf: 'center',
  },
  image_header: {
    borderRadius: 50,
  },
  profile: {
    flex: 0.65,
    display:'flex',
    alignContent: 'flex-end',
    // backgroundColor:'yellow'
    width:'100%'
  },
  image_card:{
        // flex: 0.65,
        // width:'80%',
      backgroundColor:'#FFFFFFCC',
    position:'absolute',
     bottom:10,
     left: 10,
     right: 10,
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between',
     padding: 15,

     alignItems:'center',
    //  paddingHorizontal:20,
    //  margin:20
    marginHorizontal:20,
    borderRadius:14,
  },
  bottom: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red',
    // margin: 15,
    // paddingTop:5,
    paddingHorizontal: 30,
    // marginTop:15
  },
  //   heading_one: {
  //     backgroundColor: 'blue',
  //     fontSize: 22,
  //     fontWeight: '600',
  //     color: '#000000',
  //     textAlign: 'center',
  //   },
});

export default Home;
