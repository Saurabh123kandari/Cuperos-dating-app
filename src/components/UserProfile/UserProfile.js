//import { ScrollView } from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'native-base';
import { SliderBox } from "react-native-image-slider-box";

const UserProfile = (props) => {
  const image = require('../../assets/bg_pattern.png');
  const userImage = require('../../assets/pexelsgodisablejacob.png');
  const mapImage = require('../../assets/VectorMap.png');
  const closeicon = require('../../assets/Close.png');
  const hearticon = require('../../assets/Heart.png');
  const like = require('../../assets/like.png');
  const dislike = require('../../assets/dislike.png');
  const tick = require('../../assets/Tick.png');
  const backIconImage = require('../../assets/backiconimage.png');
  const images =[require('../../assets/pexelsgodisablejacob.png'), require('../../assets/pexelsgodisablejacob.png'), require('../../assets/pexelsgodisablejacob.png') ]
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          source={image}
          style={{}}>
          <View style={{flex:0.3,}} >

            {/* <Image
              resizeMode="contain"
              source={userImage}
              style={{
                width: '100%',
                position: 'relative',
                top: -40,
                // backgroundColor: 'yellow',
              }}></Image> */}

            {/* <View style={{alignItems:'center'}}> */}
            <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{position:'absolute', top:20, left:20, zIndex:10}}>
            <Image source={backIconImage} style={{ }} />
            </TouchableOpacity>
             
            <SliderBox 
            dotColor={"red"}
            dotStyle={{marginBottom:90, width:10,height:10}}
              resizeMode="contain"
              style={{
                // backgroundColor:'red',
               width: '100%',
               marginTop: -37,
               position: 'relative',
                // top: -40,
              }}
             images={images} 
             />
            <View style={{alignItems: 'center', marginTop:30}}>
              <View style={styles.imagecard}>
                <View >
                  <View style={{flexDirection:'row'}}>
                  <Text
                    style={{color: '#000000', fontWeight: '600', fontSize: 16}}>
                    Aarianna Barnes, 26
                  </Text>
                  <Image source={tick} style={{marginLeft:10}} />   
                  </View>
                  <Text
                    style={{color: '#000000', fontWeight: '500', fontSize: 14}}>
                    Product Designer
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 150,
                      marginVertical: 4,
                    }}>
                    <Image source={mapImage}></Image>
                    <Text
                      style={{
                        color: '#000000',
                        fontWeight: '400',
                        fontSize: 12,
                      }}>
                      New York, 26 Miles Away
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: '#FF0000',
                    padding: 5,
                    paddingHorizontal: 15,
                    marginLeft:10
                  }}>
                  <Text
                    style={{color: '#FF0000', fontWeight: '700', fontSize: 18}}>
                    75%
                  </Text>
                </View>
              </View>
              <View style={styles.bottom}>
                <Image source={dislike} />
               <TouchableOpacity onPress={()=>{props.navigation.navigate('ItsAMatch')}}>
               <Image source={like} />
               </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}

            {/* <View style={{display:'flex',position:'relative',bottom:0}}>
                <Image source={closeicon} style={{width:'20%',height:'20%'}}></Image>
                <Image source={hearticon} style={{width:'20%',height:'20%'}}></Image>
            </View> */}
          </View>

          <View style={styles.InnerContainer}>
            <Text style={styles.heading}>About</Text>
            <Text style={styles.innertext}>
              Hello! I am Aarianna and I am a product designer at one of the
              biggest non-profits in the USA. I am a passionate person,
              customer-obsessed, and enjoy always helping people design new
              products/ experiences for their customers!
            </Text>
            <Text style={styles.heading}>Passions</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                //paddingHorizontal: 10,
                marginTop: 10,
              }}>
              <View style={[styles.viewone, {backgroundColor: '#21CE97'}]}>
                <Text style={styles.textone}>Friendly</Text>
              </View>
              <View style={[styles.viewone, {backgroundColor: '#FF0000'}]}>
                <Text style={styles.textone}>Love</Text>
              </View>
              <View style={[styles.viewone, {backgroundColor: '#9264F2'}]}>
                <Text style={styles.textone}>Basketball</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                //justifyContent: 'flex-start',

                //paddingHorizontal: 10,
                marginBottom: 20,
              }}>
              <View style={[styles.viewtwo, {backgroundColor: '#BF1925'}]}>
                <Text style={styles.textone}>Music</Text>
              </View>
              <View
                style={[
                  styles.viewtwo,
                  {backgroundColor: '#5939DC', marginLeft: 20},
                ]}>
                <Text style={styles.textone}>Non Smoker</Text>
              </View>
            </View>
            <View style={styles.innerdiv}>
              <Text style={styles.textthree}>Occupation</Text>
              <Text style={styles.textfour}>Product Designer</Text>
            </View>
            <View style={styles.innerdiv}>
              <Text style={styles.textthree}>Body Height</Text>
              <Text style={styles.textfour}>5’6”</Text>
            </View>
            <View style={styles.innerdiv}>
              <Text style={styles.textthree}>Ethnicity</Text>
              <Text style={styles.textfour}>Black/African descent</Text>
            </View>
            <View style={styles.innerdiv}>
              <Text style={styles.textthree}>Body Height</Text>
              <Text style={styles.textfour}>5’6” </Text>
            </View>
            <View style={styles.innerdiv}>
              <Text style={styles.textthree}>Highest Degree</Text>
              <Text style={styles.textfour}>University/Collage</Text>
            </View>
            <View style={styles.lastview}>
              <Divider my={5} backgroundColor="#A4A4A4" />
              <Text
                style={{
                  color: '#3C12D1',
                  fontWeight: '500',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Share Aarianna’s profile
              </Text>
              <Divider my={5} backgroundColor="#A4A4A4" />
              <Text
                style={{
                  color: '#FF0000',
                  fontWeight: '500',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Report Aarianna
              </Text>
              <Divider my={5} backgroundColor="#A4A4A4" />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  viewone: {
    padding: 15,
    paddingHorizontal: 20,
    //backgroundColor: 'yellow',
    borderRadius: 10,
  },
  viewtwo: {
    padding: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  heading: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 22,
    // marginTop: 20,
    marginVertical:10,
    marginTop:20
  },
  innertext: {
    fontWeight: '400',
    fontSize: 16,
    color: '#5E5E5E',
  },
  textone: {
    color: '#FFFFFF',
  },
  InnerContainer: {
    alignSelf:'center',
    flex:0.7,
    paddingHorizontal: 17,
    marginTop: -100,
    // marginHorizontal:20
  },
  innerdiv: {
    marginTop: 10,
  },
  textthree: {
    color: '#A4A4A4',
    fontWeight: '400',
    fontSize: 16,
  },
  textfour: {
    marginVertical:7,
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
  },
  lastview: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  imagecard: {
    backgroundColor: '#FFFFFFCC',
    // marginHorizontal:40,
    position: 'absolute',
    bottom: 230,
    // paddingHorizontal: 20,
    padding:15,
    borderRadius: 14,
    display:'flex',
     flexDirection:'row',
    //  justifyContent:'space-between',
     alignItems:'center',
     marginHorizontal:20,
  },
  bottom: {
    bottom: 130,
    width: '100%',
    // flex: 0.2,
    // marginVertical:10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    // backgroundColor:'red',
    // margin: 15,
    // paddingTop:5,
    // paddingHorizontal: 30,
    // marginTop:15
  },
});

export default UserProfile;
