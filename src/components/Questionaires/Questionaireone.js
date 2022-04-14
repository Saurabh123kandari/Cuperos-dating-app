import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
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
  Image,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const Questionaireone = () => {
  const icon = {
    uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/Vector.png',
  };
  const mainicon = {
    uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/Vectors.png',
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.icon_view_one}>
      <ChevronLeftIcon iconName="chevron-left" size="7" mx={3}/>
        <Progress
          mx="10"
          mt="6"
          mb="6"
          colorScheme="red"
          value={35}
          height="1.5"
          background="#D0D0D0"
        />
        <Text style={styles.innertext}>
          Why do you want to be in a relationship?
        </Text>
      </View>
      <View style={styles.view_two}>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Intimacy and communication</Text>
          <View style={styles.anotherview}>
            <Image
              source={mainicon}
              style={{width: 34, height: 34}}
              alt="Alternate Text"
            />
            <Image
              source={icon}
              style={{
                height: 18,  resizeMode: 'contain',
                paddingLeft: 32,
                position: 'absolute',
                marginTop: 10,
              }}
              alt="Alternate Text"
            />
          </View>
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Love</Text>
          <View style={styles.anotherview}>
            <Image
              source={mainicon}
              style={{width: 35, height: 35,paddingHorizontal:15}}
              alt="Alternate Text"
            />
            <Image
              source={icon}
              style={{
              
                height: 18,  resizeMode: 'contain',
                paddingLeft: 32,
                position: 'absolute',
                marginTop: 10,
              }}
              alt="Alternate Text"
            />
          </View>
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Romance</Text>
          <View style={styles.anotherview}>
            <Image
              source={mainicon}
              style={{width: 34, height: 34}}
              alt="Alternate Text"
            />
            <Image
              source={icon}
              style={{
                height: 18,  resizeMode: 'contain',
                paddingLeft: 32,
                position: 'absolute',
                marginTop: 10,
              }}
              alt="Alternate Text"
            />
          </View>
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>I don’t want to be alone</Text>
          <View style={styles.anotherview}>
            <Image
              source={mainicon}
              style={{width: 34, height: 34}}
              alt="Alternate Text"
            />
            <Image
              source={icon}
              style={{
                height: 18,  resizeMode: 'contain',
                paddingLeft: 32,
                position: 'absolute',
                marginTop: 10,
              }}
              alt="Alternate Text"
            />
          </View>
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Safety</Text>
          <View style={styles.anotherview}>
            <Image
              source={mainicon}
              style={{width: 34, height: 34}}
              alt="Alternate Text"
            />
            <Image
              source={icon}
              style={{
                height: 18,  resizeMode: 'contain',
                paddingLeft: 32,
                position: 'absolute',
                marginTop: 10,
              }}
              alt="Alternate Text"
            />
          </View>
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Emotional security</Text>
          <View style={styles.anotherview}>
            <Image
              source={mainicon}
              style={{width: 34, height: 34}}
              alt="Alternate Text"
            />
            <Image
              source={icon}
              style={{
                height: 18,  resizeMode: 'contain',
                paddingLeft: 32,
                position: 'absolute',
                marginTop: 10,
              }}
              alt="Alternate Text"
            />
          </View>
        </View>
        <LinearGradient
                colors={['#D72D79', '#9264F2']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.linearGradient}>
                  <TouchableOpacity
                  onPress={() => {
                    // console.log(props.navigation, 'e..');
                    props.navigation.navigate('signupthree');
                  }}>
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
   // backgroundColor: 'yellow',
    
  },
  icon_view_one: {
    marginTop:10,
    flex: 0.2,
    //backgroundColor:'red'
  },
  innertext: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth:250,
    //display:'flex',
    //justifyContent:'center'
    //alignContent:'center'
    alignSelf:'center'
  },
  view_two: {
    paddingTop:30,
    flex: 0.8,
    paddingHorizontal:20,
    //backgroundColor: 'red',
  },
  inner_view_two: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
    paddingHorizontal:15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    marginVertical:10
  },
  anotherview: {
    // backgroundColor:'pink',
    // borderRadius:50,
    // width:20,
    // height:20,
    // paddingVertical:5
  },
  text_two: {
    color: '#A4A4A4',
    fontWeight: '400',
    fontSize:16
  },
  linearGradient: {
    width: '100%',
    marginTop: 30,
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
});
export default Questionaireone;
