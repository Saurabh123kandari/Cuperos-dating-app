import React, {useState, useEffect} from 'react';
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,} from 'react-native';
import {ChevronLeftIcon,Progress, ScrollView} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const Questionairesix = (props) => {

  const [data, setData] = useState([
    {
      id: 1,
      text: 'Opera',
    },
    {
      id: 2,
      text: 'Afrobeats',
    },
    {
      id: 3,
      text: 'Musicals',
    },
    {
      id: 4,
      text: 'Orchestra',
    },
    {
      id: 5,
      text: 'Chamber Music',
    },
    {
      id: 6,
      text: 'Folk',
    },
    {
      id: 7,
      text: 'Spiritual',
    },
    {
      id: 8,
      text: 'Gospel',
    },
    {
      id: 9,
      text: 'Jazz',
    },
    {
      id: 10,
      text: 'Rock',
    },
    {
      id: 11,
      text: 'Hard rock',
    },
    {
      id: 12,
      text: 'Rap',
    },
    {
      id: 13,
      text: 'Dance',
    },
    {
      id: 14,
      text: 'Blues',
    },
    {
      id: 15,
      text: 'Hip-Hop',
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
    console.log(finalData, 'finaldata')
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
            value={85}
            height="1.5"
            background="#D0D0D0"
          />
          <Text style={styles.innertext}>
            What type of music do you like? (Select all that applies)
          </Text>
        </View>
        <View style={styles.view_two}>
          {data.map(item => {
            return (
              <TouchableOpacity onPress={() => handleClick(item)}>
                <View style={item.check ? [styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}] : styles.inner_view_two }>
                  <Text style={styles.text_two}>{item.text}</Text>
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
                props.navigation.navigate('questionariesseven');
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
    flex: 0.2,
  },
  innertext: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: 300,
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
    //backgroundColor: 'red',
  },
  inner_view_two: {
    backgroundColor: '#A4A4A4',
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginVertical: 9,
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  text_two: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
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

export default Questionairesix;