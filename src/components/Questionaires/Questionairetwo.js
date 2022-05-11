import React, {useState, useEffect} from 'react';
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
  const [check, setCheck] = useState(false);
  const icon = require('../../assets/Vector.png');
  const mainicon = require('../../assets/Vectors.png');
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Commitment',
    },
    {
      id: 2,
      title: 'Family oriented',
    },
    {
      id: 3,
      title: 'Intelligence',
    },
    {
      id: 4,
      title: 'Takes initiative',
    },
    {
      id: 5,
      title: 'Friendly',
    },
    {
      id: 6,
      title: 'Emotionally Intelligent',
    },
    {
      id: 7,
      title: 'Kind',
    },
    {
      id: 8,
      title: 'Sense of humor',
    },
    {
      id: 9,
      title: 'Ambitious',
    },
    {
      id: 10,
      title: 'Supportive',
    },
    {
      id: 11,
      title: 'Confidence',
    },
    {
      id: 12,
      title: 'Maturity',
    },
    {
      id: 13,
      title: 'Honesty and integrity',
    },
    {
      id: 14,
      title: 'Empathy',
    },
    {
      id: 15,
      title: 'Affection',
    },
  ]);

 const handleClick = (item) =>{
  const findLength = data?.filter((item)=>item.check)
  // if(findLength?.length >= 5) return null;
 const updateValues = data.map((content)=>{
  if (item?.id === content?.id) {

    if(findLength?.length >= 5 && !item?.check) return content;
    
  return {...content, check: !item?.check}
  }
  else return content;
 })
setData(updateValues)
}
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.icon_view_one}>
        <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
          <ChevronLeftIcon iconName="chevron-left" size="6" mx={3} />
          </TouchableOpacity>
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
            What are your values in a relationship? (Choose up to 5)
          </Text>
        </View>
        <View style={styles.view_two}>
          {data.map(item => {
            return (
              <TouchableOpacity onPress={() => handleClick(item)}>
                <View style={item.check ? [styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}] : styles.inner_view_two }>
                  <Text style={item.check ?  [styles.text_two,{color:'#ffff'}]:styles.text_two}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <LinearGradient
            colors={['#D72D79', '#9264F2']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
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
    backgroundColor:'#FFFFFF'
    
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
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    //  alignItems:'center',
justifyContent:'center'
  },
  inner_view_two: {
    //backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    // alignItems: 'center',
    marginVertical:8,
    paddingHorizontal:20,
    marginHorizontal:5,
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
