import { ScrollView,VStack, FormControl, Input, Button } from 'native-base'
import React from 'react'
import { SafeAreaView,StyleSheet,ImageBackground ,View,Image,Text,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup'

const ResetPassword = props => {
    const image = require('../../assets/bg_pattern.png')
    const ArrowIcon = require('../../assets/Vector_4.png');
  return (
    <Formik
       initialValues={{
        newpassword: '',
        confirmpassword: ''
    }}
   
    onSubmit={values => {
      console.log(values,"val Reset")
      let payload = {
        newpassword: values.newpassword,
        confirmpassword: values.confirmpassword
      };
      props.navigation.navigate('signin', {
        payload,
      });
    }}
    >
    {({handleChange, handleBlur, handleSubmit, values, errors}) => (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
      <View style={{flex:0.05}}></View>
      <View style={styles.firstview}>
      <Image
          source={ArrowIcon}
          style={{width: 16, height: 16, color: '#9D9D9D'}}
          alt="Alternate Text"></Image>
          <Text style={[styles.text,{marginLeft:80}]}>Reset Password</Text>
      </View>
      <View style={styles.viewtwo}>
      <VStack space={3} >
      <FormControl mt={2}>
        <FormControl.Label>
            <Text style={styles.inlinetext}>New Password</Text>
                
        </FormControl.Label>
        <Input 
        type="password" 
        value={values.newpassword}
        onChangeText={handleChange('newpassword')}
        onBlur={handleBlur('newpassword')}
        background="#F8F8F8" 
        py="4"/>
        {errors.newpassword && (
          <Text style={{fontSize: 15, color: 'red'}}>{errors.newpassword}</Text>
        )}
      </FormControl>
      <FormControl mt={2}>
      <FormControl.Label>
      <Text style={styles.inlinetext}>Confirm Password</Text>
      </FormControl.Label>
        <Input 
        type="password" 
        value={values.confirmpassword}
        onChangeText={handleChange('confirmpassword')}
        onBlur={handleBlur('confirmpassword')}
        background="#F8F8F8" 
        py="4"/>
        {errors.confirmpassword && (
          <Text style={{fontSize: 15, color: 'red'}}>{errors.confirmpasswordß}</Text>
        )}
        </FormControl>
     
    </VStack>
    <LinearGradient
            colors={['#D72D79', '#9264F2']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
          <TouchableOpacity
              onPress={() => {
                handleSubmit()
                // console.log(props.navigation, 'e..');
                props.navigation.navigate('signin');
              }}>
              <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
    </LinearGradient>
</View>
</ImageBackground> 
</SafeAreaView>
    )}
    </Formik>
  )
}

const styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        
        
    },
    firstview:{
        flex:0.15,
        display:'flex',
        flexDirection:'row',
        //justifyContent:'space-evenly',
        paddingHorizontal:20,
       
    },
    text:{
fontSize:22,
fontWeight:'600',
marginTop:-5
//alignContent:'center'

    },
    viewtwo:{
        flex:0.4,
        paddingHorizontal:20
        //backgroundColor:'yellow'
    },
    inlinetext:{
fontSize:16,
fontWeight:'600',
color:'#000000'
    },
    linearGradient: {
        width: '100%',
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        paddingVertical: 4,
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        fontWeight:'600',
        color: '#ffffff',
        // backgroundColor: 'transparent',
      },

})
export default ResetPassword;