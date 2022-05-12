import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
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
  
} from 'native-base';
import moment from 'moment'
import DatePicker from 'react-native-date-picker'
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
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const selectedDate = moment(date).format('MMMM Do YYYY')
  const image = require('../../../assets/bg_pattern.png');
  const datePickerImg = require('../../../assets/datepicker.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            dob: '',
            height: '',
            gender: '',
          }}
          // validationSchema={SignupSchema}
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
            });
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <ImageBackground
              source={image}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}>
              <View style={styles.icon_view_one}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack();
                  }}>
                  <ChevronLeftIcon
                    iconName="chevron-left"
                    size="5"
                    mx={3}
                    my={7}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.form_view}>
              <Progress
                  mx="5"
                  mb="4"
                  colorScheme="red"
                  value={15}
                  height="1.5"
                  background="#D0D0D0"
                />
                <Heading style={styles.heading_one}>
                  Let’s know each other better!
                </Heading>
                <Heading style={styles.heading_two}>
                  Tell us a few things about yourself.
                </Heading>
                <VStack space={3}>
                  <FormControl mt={7}>
                    <FormControl.Label>
                      <Text style={styles.text}>Name</Text>
                    </FormControl.Label>
                    <Input
                      type="firstName"
                      name="firstName"
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      value={values.firstName}
                      placeholder="First Name"
                      backgroundColor="#F8F8F8"
                      py="3"
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
                      py="3"
                      mt="4"
                      borderRadius="10"
                    />
                    {errors.lastName && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.lastName}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>
                      <Text style={styles.text}>Date of Birth</Text>
                    </FormControl.Label>
                    {/* <Input
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
                      py="3"
                      borderRadius="10"
                    /> */}
                    <TouchableOpacity onPress={() => setOpen(true)}>
                      <View style={styles.datePicker}>
                        <Text>{selectedDate}</Text>
                        <Image
                          source={datePickerImg}
                          resizeMode="contain"
                          style={{width: 40, height: 40}}></Image>
                      </View>
                    </TouchableOpacity>
                    <DatePicker
                      modal
                      mode="date"
                      open={open}
                      date={date}
                      maximumDate={new Date('2022-01-01')}
                      onConfirm={date => {
                        setOpen(false);
                        setDate(date);
                      }}
                      onCancel={() => {
                        setOpen(false);
                      }}
                    />
                    {/* {errors.dob && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.dob}
                      </Text>
                    )} */}
                    <Image></Image>
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>
                      <Text style={styles.text}>Gender</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        py="3"
                        px="4"
                        name="gender"
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
                          setGender(selectedOption);
                          handleChange('gender')(selectedOption);
                        }}>
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
                  <FormControl mt="3">
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
                        py="3"
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
                          setHeight(selectedOption);
                          handleChange('height')(selectedOption);
                        }}>
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

                  <LinearGradient
                    colors={['#D72D79', '#9264F2']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.linearGradient}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </VStack>
              </View>
            </ImageBackground>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    
    backgroundColor: '#ffffff',
  },
  icon_view_one: {
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
  },
  heading_two: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    color: '#5E5E5E',
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

    // marginTop: 20,
  },
  button_text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  linearGradient: {
    marginTop: 20,

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
  datePicker: {
    display: 'flex',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:'#C4C4C4'
  },
});

export default SignupOne;
