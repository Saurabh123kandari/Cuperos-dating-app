import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';
import {ChevronLeftIcon,Progress, ScrollView} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const Questionairefive = () => {
 
  
    const plusicon = require('../../assets/Vector3.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
        <ScrollView>
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
         What type of sports do you like? (Choose all that applies)
        </Text>
        

</View>
<View style={styles.view_two}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
            <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Tennis</Text>
          
        </View>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
       
              style={{width: 14, height: 14, color:'#FFFFFF'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Table Tennis</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Handball</Text>
          
        </View>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Hocky</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#FFFFFF'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Rowing</Text>
          
        </View>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Volleyball</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={[styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}]}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={[styles.text_two,{color:'#FFFFFF'}]}>Basketball</Text>
          
        </View>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Soccer</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Golf</Text>
          
        </View>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Yoga/Pilates</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Badminton</Text>
          
        </View>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Fitness</Text>
          
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={[styles.inner_view_two,{backgroundColor:'#FF0000',borderColor:'#FFFFFF'}]}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#FFFFFF'}}
              alt="Alternate Text"></Image>
          <Text style={[styles.text_two,{color:'#FFFFFF'}]}>Cricket</Text>
          
        </View>
        <View style={styles.inner_view_two}>
        <Image source={plusicon}
              style={{width: 14, height: 14,color:'#9D9D9D'}}
              alt="Alternate Text"></Image>
          <Text style={styles.text_two}>Fishing</Text>
          
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
      </View></ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    MainContainer:{
    flex:1,
    //backgroundColor:'yellow'
    },
    icon_view_one: {
        marginTop:10,
        flex: 0.25,
        //backgroundColor:'red'
      },
      innertext: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        maxWidth:280,
        alignSelf:'center'
        
      },
      view_two: {
        flex: 0.75,
        paddingHorizontal:20,
       //backgroundColor: 'red',
      },
      inner_view_two: {
        //backgroundColor: '#F8F8F8',
        //width:'40%',
        //flexWrap:'wrap',
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


})

export default Questionairefive;