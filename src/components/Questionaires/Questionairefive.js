import React, {useState, useEffect} from 'react';
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';
import {ChevronLeftIcon,Progress, ScrollView} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const Questionairefive = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      text: 'Tennis',
    },
    {
      id: 2,
      text: 'Table Tennis',
      
    },
    {
      id: 3,
      text: 'Handball',
      
    },
    {
      id: 4,
      text: 'Hockey',
      
    },
    {
      id: 5,
      text: 'Rowing',
    },
    {
      id: 6,
      text: 'Volleyball',
    },
    {
      id: 7,
      text: 'Basketball',
    },
    {
      id: 8,
      text: 'Soccer',
    },
    {
      id: 9,
      text: 'Golf',
    },
    {
      id: 10,
      text: 'Yoga/Pilates',
    },
    {
      id: 11,
      text: 'Badminton',
    },
    {
      id: 12,
      text: 'Fitness',
    },
    {
      id: 13,
      text: 'Cricket',
    },
    {
      id: 14,
      text: 'Fishing',
    },
  ]);
const plusicon = require('../../assets/Vector3.png');
const whitePlusIcon = require('../../assets/Frame.png')

const handleClick = (item) =>{
  const updateValues = data.map((content)=>{
   if (item?.id === content?.id)
   return {...content, check: !item?.check}
   else return content;
  })
  setData(updateValues)
 }
 const handleCheckButton=()=>{
  const finalData = data.filter((ques)=>{
    if(ques?.check){
      return ques
    }
  })
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
            mt="6"
            mb="6"
            colorScheme="red"
            value={75}
            height="1.5"
            background="#D0D0D0"
          />
          <Text style={styles.innertext}>What type of sports do you like?</Text>
          <Text style={styles.innertextt}>(Choose all that applies)</Text>
        </View>
        <View style={styles.view_two}>
          {data.map(item => {
            return (
              <TouchableOpacity onPress={() => handleClick(item)}>
              
              <View style={item.check ? [styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}] : styles.inner_view_two }>
                    <Image
                      source={item?.check ? whitePlusIcon : plusicon}
                      style={{width: 14, height: 14, color: '#9D9D9D', marginTop:4}}
                      alt="Alternate Text"></Image>
                   <Text style={item.check ?  [styles.text_two,{color:'#ffff'}]:styles.text_two}>{item.text}</Text>
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
                handleCheckButton()
                // console.log(props.navigation, 'e..');
                props.navigation.navigate('questionariessix');
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  icon_view_one: {
    marginTop: 10,
    flex: 0.25,
    //backgroundColor:'red'
  },
  innertext: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: 210,
    alignSelf: 'center',
  },
  innertextt: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: 250,
    alignSelf: 'center',
  },
  view_two: {
    marginTop: 20,
    flex: 0.8,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  inner_view_two: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginVertical: 8,
    paddingHorizontal: 22,
    marginHorizontal: 8,
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
    fontSize: 16,
    marginLeft: 10,
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
    fontWeight: '600',
    // backgroundColor: 'transparent',
  },
});

export default Questionairefive;