import React from 'react'
import { SafeAreaView, StyleSheet,ImageBackground,View,Image ,Text, ScrollView} from 'react-native';
import {BACKGROUND_IMAGE,ARROW_ICON} from '../../constant/App_Constant';

const TermsCondition = () => {
  
  return (
    <SafeAreaView style={styles.Main_Container}>
        <ImageBackground source={BACKGROUND_IMAGE} style={{width: '100%', height: '100%'}}>
        <View style={{flex: 0.06}}></View>

<View style={styles.firstview}>
  <Image source={ARROW_ICON}  alt="Alternate Text"></Image>
  <Text style={[styles.faqtext]}>Terms & Conditions</Text>
</View>
<View style={styles.anotherview}>
 
  <Text style={styles.conditiontext}>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie mauris nec facilisis imperdiet. Etiam laoreet lacus elit, at mattis nisi gravida non.</Text> 

<Text style={styles.conditiontext}>Duis tincidunt mauris eu mi maximus placerat. Fusce quis lorem vitae nunc pharetra elementum ac eget felis. Ut sit amet eleifend erat.</Text>

<Text style={styles.conditiontext}>Praesent nulla orci, rhoncus et posuere sit amet, hendrerit et eros. Vestibulum convallis diam sed erat commodo luctus. Proin pellentesque purus nec purus gravida, a imperdiet tortor lobortis.</Text> 

<Text style={styles.conditiontext}>Aenean eget arcu auctor lorem viverra tincidunt. Proin interdum ante at tellus auctor vulputate.
  </Text>


</View>

        </ImageBackground>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
 
  Main_Container:{
    flex:1,
  },
  firstview: {
    flex: 0.08,
    display: 'flex',
    //flexDirection:'row',
    //justifyContent:'space-between',
    paddingHorizontal: 20,
    //backgroundColor: 'yellow',
  },
  faqtext: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: -20,
  },
  anotherview:{
    backgroundColor:'#F8F8F8',
    flex:0.6,
   marginHorizontal:20,
   borderRadius:10,
   paddingVertical:6,
   paddingHorizontal:20
   
  },
  conditiontext:{
marginVertical:13,
fontSize:15,
fontWeight:'400',
color:'#909090',
//alignContent:'center',
//textAlign:'center',
justifyContent:'center'
  }


})
export default TermsCondition;