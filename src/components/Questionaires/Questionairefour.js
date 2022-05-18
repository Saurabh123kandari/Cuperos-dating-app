import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ChevronLeftIcon, Progress, ScrollView} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

const Questionairefour = props => {
  const iconone = require('../../assets/Group1.png');
  const icontwo = require('../../assets/Group2.png');

  const iconthree = require('../../assets/Group.png');

  const iconfour = require('../../assets/Photo.png');

  const iconfive = require('../../assets/Vector4.png');

  const iconsix = require('../../assets/Group4.png');

  const icons = require('../../assets/Frame1.png');

  const [data, setData] = useState([
    {
      id: 1,
      text: 'Sports',
      image: iconone,
     
    },
    {
      id: 2,
      text: 'Dancing',
      image: icontwo,
      
    },
    {
      id: 3,
      text: 'Photography',
      image: iconthree,
      
    },
    {
      id: 4,
      text: 'Film/Video',
      image: iconfour,
      
    },
    {
      id: 5,
      text: 'Literature',
      image: iconfive,
    },
    {
      id: 6,
      text: 'Art',
      image: iconsix,
    },
  ]);
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
            value={35}
            height="1.5"
            background="#D0D0D0"
          />
          <Text style={styles.innertext}>
            What type of hobbies do you have?
          </Text>
        </View>
        <View style={styles.view_two}>
          {
          data.map(item => {
            return (
              <TouchableOpacity onPress={() => handleClick(item)}>
                <View
                  style={item?.check ? [styles.inner_view_two, {backgroundColor: '#FF0000'}] : styles.inner_view_two}>
                  <View
                    style={ item?.check ? [styles.inner_view, {backgroundColor: '#C70000'}] : styles.inner_view }>
                    <Image
                      source={item.image}
                      style={{width: 32, height: 32, color: '#9D9D9D'}}
                      alt="Alternate Text"></Image>
                  </View>
                  <Text style={item?.check ? [styles.texttwo, {color: '#FFFFFF'}] : styles.texttwo}>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
          }

          <LinearGradient
            colors={['#D72D79', '#9264F2']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                handleCheckButton()
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
    backgroundColor: '#FFFFFF',
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
    marginVertical: 20,
  },
  inner_view_two: {
    backgroundColor: '#FFFFFF',
    //paddingVertical:30,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    marginVertical: 10,
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
    fontWeight: '600',
    // backgroundColor: 'transparent',
  },
  anotherview: {
    backgroundColor: 'pink',
    display: 'flex',
    //flexDirection:'row',
    //width:'100%'
  },
});

export default Questionairefour;
