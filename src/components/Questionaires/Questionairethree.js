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

const Questionairethree = (props) => {
    const icon = require('../../assets/Vector.png');
    const mainicon = require('../../assets/Vectors.png');
    const [data, setData] = useState([
      {
        id: 1,
        title: 'Meditation',
      },
      {
        id: 2,
        title: 'Physical exercise',
      },
      {
        id: 3,
        title: 'Reading and podcasts',
      },
      {
        id: 4,
        title: 'Vacations',
      },
      {
        id: 5,
        title: 'Classes',
      },
      {
        id: 6,
        title: 'Time with family and friends',
      },
      {
        id: 7,
        title: 'Creative pursuits',
      },
      {
        id: 8,
        title: 'Volunteering',
      },
      {
        id: 9,
        title: 'Watching TV',
      },
      {
        id: 10,
        title: 'Sleeping',
      },
    ]);
    const handleClick = (item) =>{
      const findLength = data?.filter((item)=>item.check)
      const updateValues = data.map((content)=>{
       if (item?.id === content?.id){

        if(findLength?.length >= 3 && !item?.check) return content;

       return {...content, check: !item?.check}
       }
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
         <ChevronLeftIcon iconName="chevron-left" size="6" mx={3}/>
        </TouchableOpacity>
        <Progress
          mx="10"
          mt="6"
          mb="6"
          colorScheme="red"
          value={55}
          height="1.5"
          background="#D0D0D0"
        />
        <Text style={styles.innertext}>
        What do you do during your free time? (Choose up to 3)
        </Text>
      </View>
      <View style={styles.view_two}>
          {/* <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}> */}     
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
                    handleCheckButton()
                    props.navigation.navigate('questionariesfour');
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
    flex: 0.3,
    //backgroundColor:'red'
  },
  innertext: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth:250,
    alignSelf:'center'
    
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
export default Questionairethree;
