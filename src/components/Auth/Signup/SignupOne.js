import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
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
} from 'native-base';
import {Select, CheckIcon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ButtonGrad from './ButtonGrad';
import { Formik } from 'formik';
import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
    //  .min(2, 'Too Short!')
    //  .max(10, 'Too Long!')
     .required('First Name is required'),
   lastName: Yup.string()
    //  .min(2, 'Too Short!')
    //  .max(50, 'Too Long!')
     .required('Last Name is required'),
   dob: Yup.string().required('Date of birth is required'),
   gender: Yup.string().required('Gender is required'),
   height: Yup.string().required('Height is required'),
 });
const SignupOne = props => {
  const [gender, setGender] = React.useState('');
  const [height, setHeight] = React.useState('');
  const image = require('../../../assets/bg_pattern.png');
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        dob: '',
        height: '',
        gender: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        let payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          dob: values.dob,
          gender: values.gender,
          height: values.height,
        };
        props.navigation.navigate('signuptwo', {
          payload,
        })
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <SafeAreaView style={styles.MainContainer}>
          <ImageBackground
            source={image}
            style={{width: '100%', height: '100%'}}>
            <ScrollView>
              <View style={styles.icon_view_one}>
                <ChevronLeftIcon iconName="chevron-left" size="7" mx={3} />
                <Progress
                  mx="10"
                  mt="4"
                  mb="4"
                  colorScheme="red"
                  value={15}
                  height="1.5"
                  background="#D0D0D0"
                />
              </View>
              {/* <View style={styles.icon_view_two}>
        <Text></Text>
      </View> */}
              <Box style={styles.form_view}>
                <Heading style={styles.heading_one}>
                  Let’s know each other better!
                </Heading>
                <Heading style={styles.heading_two}>
                  Tell us a few things about yourself.
                </Heading>
                <VStack space={3} mt="5">
                  <FormControl mt="5">
                    <FormControl.Label>
                      <Text style={styles.text}> Name</Text>
                    </FormControl.Label>
                    <Input
                      type="firstName"
                      name="firstName"
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      value={values.firstName}
                      placeholder="First Name"
                      backgroundColor="#F8F8F8"
                      py="3.5"
                      borderRadius="10"
                      borderColor="#FF0000"
                      fontSize="16"
                      fontWeight="400"
                    />
                    {errors.firstName && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.firstName}
                      </Text>
                    )}
                    <Input
                      type="lastName"
                      name="lastName"
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                      value={values.lastName}
                      placeholder="Last Name"
                      backgroundColor="#F8F8F8"
                      borderColor="#C4C4C4"
                      fontSize="16"
                      fontWeight="400"
                      py="3.5"
                      mt="4"
                      borderRadius="10"
                    />
                     {errors.lastName && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.lastName}
                      </Text>
                    )}
                     </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Date of Birth</Text>
                    </FormControl.Label>
                    <Input
                      type="dob"
                      name="dob"
                      onChangeText={handleChange('dob')}
                      onBlur={handleBlur('dob')}
                      value={values.dob}
                      placeholder="DOB"
                      backgroundColor="#F8F8F8"
                      borderColor="#C4C4C4"
                      fontSize="16"
                      fontWeight="400"
                      py="3.5"
                      borderRadius="10"
                    />
                   {errors.dob && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.dob}
                      </Text>
                    )}
                    <Image></Image>
                  </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Gender</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        py="3.5"
                        px="4"
                        name='gender'
                        borderRadius="10"
                        backgroundColor="#F8F8F8"
                        borderColor="#C4C4C4"
                        fontSize="16"
                        fontWeight="400"
                        selectedValue={gender}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Select your gender"
                        _selectedItem={{
                          bg: '#F8F8F8',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        // onValueChange={itemValue => setGender(itemValue)}
                        onValueChange={selectedOption => {
                          setGender(selectedOption)
                          handleChange("gender")(selectedOption);
                        }}
                        >
                        <Select.Item label="Male" value="Male" />
                        <Select.Item label="Female" value="Female" />
                        <Select.Item label="Other" value="Other" />
                      </Select>
                    </Box>
                    {errors.gender && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.gender}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Height</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        name="height"
                        backgroundColor="#F8F8F8"
                        borderRadius="10"
                        borderColor="#C4C4C4"
                        fontSize="16"
                        fontWeight="400"
                        py="3.5"
                        selectedValue={height}
                        // value={height}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Select your height"
                        _selectedItem={{
                          bg: 'red',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        // onValueChange={itemValue => setHeight(itemValue)}
                        onValueChange={selectedOption => {
                          setHeight(selectedOption)
                          handleChange("height")(selectedOption);
                        }}
                        >

                        <Select.Item label="4'4" value="4'4" />
                        <Select.Item label="4'5" value="4'5" />
                        <Select.Item label="4'6" value="4'6" />
                        <Select.Item label="4'7" value="4'7" />
                        <Select.Item label="4'8" value="4'8" />
                        <Select.Item label="4'9" value="4'9" />
                      </Select>
                    </Box>
                    {errors.height && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.height}
                      </Text>
                    )}
                  </FormControl>
                  {/* <TouchableOpacity
                  onPress={() => {
                    // console.log(props.navigation, 'e..');
                    props.navigation.navigate('signuptwo');
                  }}>
                   <ButtonGrad title="Next"  />
                </TouchableOpacity> */}

                  <LinearGradient
                    colors={['#D72D79', '#9264F2']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.linearGradient}>
                    {/* <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('signuptwo');
                      }}> */}
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                    {/* </TouchableOpacity> */}
                  </LinearGradient>
                </VStack>
              </Box>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    fontFamily: 'Poppins',
    backgroundColor: '#FFFFFF',
    //paddingHorizontal: 20,
  },
  icon_view_one: {
    flex: 0.1,
  },
  icon_view_two: {
    flex: 0.1,
  },
  form_view: {
    flex: 0.9,
    paddingHorizontal: 20,
  },
  heading_one: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    //textAlign: 'center',
  },
  heading_two: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    color: '#5E5E5E',
    //textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  label_heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  input_view: {
    background: '#F8F8F8',
  },
  button_view: {
    borderRadius: 10,

    marginTop: 20,
  },
  button_text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
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
    // backgroundColor: 'transparent',
  },
});

export default SignupOne;
