import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';
import {ChevronLeftIcon, Progress, ScrollView} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';

const Questionairefour = (props) => {
  
    const iconone = require('../../assets/Group1.png');
    const icontwo = require('../../assets/Group2.png');
    
    const iconthree = require('../../assets/Group.png');
     
    const iconfour = require('../../assets/Frame.png');
    
    const iconfive =require('../../assets/Vector4.png');
     
    const iconsix = require('../../assets/Group4.png');
    
    const icons = require('../../assets/Frame1.png');
  
  

  return (
    <SafeAreaView style={styles.MainContainer}>
        <ScrollView>
      <View style={styles.icon_view_one}>
        <ChevronLeftIcon iconName="chevron-left" size="7" mx={3} />
        <Progress
          mx="10"
          mt="6"
          mb="6"
          colorScheme="red"
          value={35}
          height="1.5"
          background="#D0D0D0"
        />
        <Text style={styles.innertext}>What type of hobbies do you have?</Text>
      </View>
      <View style={styles.view_two}>
          <View style={styles.anotherview}>
     
        <View style={[styles.inner_view_two,{backgroundColor:'#FF0000'}]}>
          <View style={[styles.inner_view,{backgroundColor:'#C70000'}]}>
            <Image
              source={iconone}
              style={{width: 32, height: 32, color: '#9D9D9D'}}
              alt="Alternate Text"></Image>
          </View>
          <Text style={[styles.texttwo, {color: '#FFFFFF'}]}>Sports</Text>
        </View>
{/* <View style={{backgroundColor:'#ffffff',position:'absolute',display:'flex',alignSelf:'flex-end',marginTop:-10,marginRight:20,border}}> */}
        <Image
              source={icons}
              style={{width: 34, height: 34, position:'absolute',display:'flex',alignSelf:'flex-end',marginTop:-10,borderColor:"#ffffff",borderWidth:5,borderRadius:50}}
              alt="Alternate Text"></Image>
              </View>
              {/* </View> */}

        <View style={styles.inner_view_two}>
          <View style={styles.inner_view}>
            <Image
              source={icontwo}
              style={{width: 32, height: 32,resizeMode: 'contain', position:'relative'}}
              alt="Alternate Text"></Image>
          </View>
          <Text style={styles.texttwo}>Dancing</Text>
        </View>
        <View style={styles.inner_view_two}>
          <View style={styles.inner_view}>
            <Image
              source={iconthree}
              style={{width: 32, height: 30, color: '#9D9D9D'}}
              alt="Alternate Text"></Image>
          </View>
          <Text style={styles.texttwo}>Photography</Text>
        </View>
        <View style={styles.inner_view_two}>
          <View style={styles.inner_view}>
            <Image
              source={iconfour}
              style={{width: 32, height: 28,resizeMode: 'contain', color: '#9D9D9D'}}
              alt="Alternate Text"></Image>
          </View>
          <Text style={styles.texttwo}>Film/Video</Text>
        </View>
        <View style={styles.inner_view_two}>
          <View style={styles.inner_view}>
            <Image
              source={iconfive}
              style={{width: 32, height: 32, color: '#9D9D9D'}}
              alt="Alternate Text"></Image>
          </View>
          <Text style={styles.texttwo}>Literature</Text>
        </View>
        <View style={styles.inner_view_two}>
          <View style={styles.inner_view}>
            <Image
              source={iconsix}
              style={{width: 32, height: 32, color: '#9D9D9D'}}
              alt="Alternate Text"></Image>
          </View>
          <Text style={styles.texttwo}>Art</Text>
        </View>
        <LinearGradient
                colors={['#D72D79', '#9264F2']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.linearGradient}>
                  <TouchableOpacity
                  onPress={() => {
                    // console.log(props.navigation, 'e..');
                    props.navigation.navigate('questionariesfive');
                  }}>
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </LinearGradient>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //backgroundColor: 'yellow',
  },
  icon_view_one: {
    marginTop: 10,
    flex: 0.2,
    //backgroundColor:'red'
  },
  innertext: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: 240,
    alignSelf: 'center',
  },
  view_two: {
    flex: 0.8,
    //backgroundColor: 'green',
    paddingHorizontal: 20,
   marginVertical:20
  },
  inner_view_two: {
    backgroundColor: '#FFFFFF',
    //paddingVertical:30,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth:1,
    borderColor:'#D8D8D8',
    marginVertical:10
  },
  inner_view: {
    backgroundColor: '#D8D8D8',
    padding: 15,
    borderRadius: 10,
  },
  texttwo: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
    //justifyContent:'space-around'
  },
  linearGradient: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    //fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight:'600'
    // backgroundColor: 'transparent',
  },
  anotherview:{
      display:'flex',
      //flexDirection:'row',
      //width:'100%'
  }
});

export default Questionairefour;
