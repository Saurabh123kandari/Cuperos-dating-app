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

const Questionairetwo = (props) => {
    const icon = require('../../assets/Vector.png');
  const mainicon = require('../../assets/Vectors.png');
 
  return (
    <SafeAreaView style={styles.MainContainer}>
        <ScrollView>
      <View style={styles.icon_view_one}>
      <ChevronLeftIcon iconName="chevron-left" size="7" mx={3}/>
        <Progress
          mx="10"
          mt="4"
          mb="4"
          colorScheme="red"
          value={45}
          height="1.5"
          background="#D0D0D0"
        />
        <Text style={styles.innertext}>
        What are your values in a 
relationship? (Choose up to 5)
        </Text>
      </View>
      <View style={styles.view_two}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Commitment</Text>
          
        </View>
        <View style={[styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}]}>
          <Text style={[styles.text_two,{color:'#FFFFFF'}]}>Family oriented</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Intelligence</Text>
          
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Takes initiative</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={[styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}]}>
          <Text style={[styles.text_two,{color:'#FFFFFF'}]}>Friendly</Text>
          
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Emotionally Intelligent</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Kind</Text>
          
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Sense of humor</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Ambitious</Text>
          
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Supportive</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Confidence</Text>
          
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Maturity</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={[styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}]}>
          <Text style={[styles.text_two,{color:'#FFFFFF'}]}>Honesty and integrity</Text>
          
        </View>
        
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Empathy</Text>
          
        </View>
        <View style={styles.inner_view_two}>
          <Text style={styles.text_two}>Affection</Text>
          
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
                    props.navigation.navigate('questionariesthree');
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
  },
  view_two: {
      marginTop:20,
    flex: 0.8,
    paddingHorizontal:20,
   //backgroundColor: 'red',
  },
  inner_view_two: {
    //backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    marginVertical:10,
    paddingHorizontal:25,
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
    fontWeight: '500',
    fontSize:16
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
});
export default Questionairetwo;
