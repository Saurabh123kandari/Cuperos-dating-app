import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
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
  Checkbox,
  Link,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
// import ButtonGrad from './ButtonGrad';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('First Name is required'),
  password: Yup.string().required('Last Name is required'),
});
const Signin = props => {
  const [gender, setGender] = React.useState('');
  const [height, setHeight] = React.useState('');
  const image = require('../../../assets/logo.png');
  const imageRed = require('../../../assets/Rectanglered.png');
  const imageBlue = require('../../../assets/Rectangleblue.png');
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      // validationSchema={SignupSchema}
      onSubmit={values => {
        let payload = {
          email: values.email,
          password: values.password,
        };
        // props.navigation.navigate('signuptwo', {
        //   payload,
        // });
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <SafeAreaView style={styles.MainContainer}>
          <View style={{flex: 0.03}}></View>
          {/* <Box style={styles.form_view}> */}
          <View style={styles.viewone}>
            <Image style={styles.tinyLogo1} source={image} />

            <View>
              <Heading style={styles.heading_one}>Hello!</Heading>
              <Heading style={styles.heading_two}>
                Signin to your account
              </Heading>
            </View>
          </View>
          <View style={styles.form_view}>
            <FormControl mt={5}>
              <Input
                type="email"
                name="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Email"
                backgroundColor="#F8F8F8"
                py="3.5"
                borderRadius="10"
                borderColor="#FF0000"
                fontSize="16"
                fontWeight="400"
              />
              {errors.email && (
                <Text style={{fontSize: 15, color: 'red'}}>{errors.email}</Text>
              )}
              <Input
                type="password"
                name="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                backgroundColor="#F8F8F8"
                borderColor="#C4C4C4"
                fontSize="16"
                fontWeight="400"
                py="3.5"
                mt="4"
                borderRadius="10"
              />
              {errors.password && (
                <Text style={{fontSize: 15, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
            </FormControl>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Checkbox value="one">Stay Signin</Checkbox>
              <Link>Forgot Password</Link>
            </View>
            <LinearGradient
              colors={['#D72D79', '#9264F2']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.buttonText}>Signin</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          {/* </Box> */}
          <View style={{flex: 0.1, alignItems: 'center'}}>
            <Text style={{color: '#000000', margin: 10}}>Or Signup with</Text>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.tinyLogo} source={imageRed} />
              <Image style={styles.tinyLogo} source={imageBlue} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 15,
              }}>
              <Text style={{color: '#000000'}}>Don't have an account ? </Text>
              <TouchableOpacity
                  onPress={() => {
                    // console.log(props.navigation, 'e..');
                    props.navigation.navigate('signupone');
                  }}>
              {/* <TouchableOpacity
                onPress={props.navigation.navigate('signuptwo', {
                  payload,
                })}> */}
                <Text style={{color: '#FF0000', fontWeight: 'bold'}}>
                  Signup now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* </ImageBackground> */}
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    fontFamily: 'Poppins',
  },

  icon_view_one: {
    flex: 0.1,
  },
  viewone:{
flex:0.3,
  },
  form_view: {
    flex: 0.4,
    paddingHorizontal: 20,
  },
  
  tinyLogo1: {
    marginVertical:40,
    alignSelf: 'center',
  },
  tinyLogo: {
    margin: 8,
    alignSelf: 'center',
  },
  heading_one: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  heading_two: {
    fontSize: 16,
    fontWeight: '400',
    color: '#5E5E5E',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  linearGradient: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 4,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Signin;
