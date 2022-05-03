import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  ScrollView,
  Checkbox
} from 'native-base';
import {Select, CheckIcon, ChevronLeftIcon, Progress} from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
import ButtonGrad from './ButtonGrad';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../store/user/userActions';

const SignupSchema = Yup.object().shape({
  religion: Yup.string().required('Religion is required'),
  belongTo: Yup.string().required('Required belong to'),
  martialStatus: Yup.string().required('Marital Status is required'),
  qualification: Yup.string().required('Qualification is required'),
  country: Yup.string().required('Country is required'),
  postal: Yup.string().required('Required postal code'),
  password: Yup.string().required('Required password'),
  confirmPassword: Yup.string().required('Required Confirm password'),
  contactNumber: Yup.string().required('Required'),
});
const Signuptwo = (props) => {
  const [service, setService] = React.useState('');
  const [belongTo, setBelongTo] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [maritalStatus, setMaritalStatus] = React.useState('');
  const [qualification, setQualification] = React.useState('');
  const [country, setCountry] = React.useState('');
  const authUser = useSelector(state => state.user) 
  const dispatch = useDispatch();
  const image = require('../../../assets/bg_pattern.png');
  const iconn = require('../../../assets/Group6.png');
  const prevPayload = props.route.params?.payload;  
  //  useEffect(() => {
  //   alert(JSON.stringify(authUser?.isAuth))
  // }, [authUser])
  console.log(authUser, 'authUser')
  return (
    <Formik
      initialValues={{
        religion: '',
        belongTo: '',
        maritalStatus: '',
        qualification: '',
        country: '',
        postal: '',
        password: '',
        confirmPassword: '',
        contactNumber: '',
      }}
      // validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values, 'val');
        let payload = {
          religion: religion,
          belongTo: belongTo,
          martialStatus: maritalStatus,
          qualification: qualification,
          country: country,
          postal: values.postal,
          password: values.password,
          confirmPassword: values.confirmPassword,
          contactNumber: values.contactNumber,
        };
        console.log(payload, 'payyy');
        dispatch(setAuth(true))
        props.navigation.navigate('thankyou')
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <SafeAreaView style={styles.MainContainer}>
          <ImageBackground
            source={image}
            style={{width: '100%', height: '100%'}}>
            <ScrollView>
              <View style={styles.icon_view_one}>
                {/* <ChevronLeftIcon iconName="chevron-left" size="7" mx={3} /> */}
                <Progress
                  mx="10"
                  mt="4"
                  mb="4"
                  colorScheme="red"
                  background="#D0D0D0"
                  value={15}
                  height="1.5"
                />
              </View>
              <Box style={styles.form_view}>
                <VStack space={3}>
                  <FormControl mt="3">
                    <FormControl.Label>
                      <Text style={styles.text}>Spirituality/Religion</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        name="religion"
                        py="3.5"
                        borderRadius="10"
                        borderColor="#C4C4C4"
                        backgroundColor="#F8F8F8"
                        selectedValue={religion}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Select your Religion"
                        fontSize="16"
                        fontWeight="400"
                        _selectedItem={{
                          bg: '#F8F8F8',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        // onValueChange={itemValue => setReligion(itemValue)}
                        onValueChange={selectedOption => {
                          setReligion(selectedOption);
                          handleChange('religion')(selectedOption);
                        }}>
                        <Select.Item label="Hindu" value="Hindu" />
                        <Select.Item label="Muslim" value="Muslim" />
                        <Select.Item label="Christian" value="Christian" />
                        <Select.Item label="Sikh" value="Sikh" />
                      </Select>
                    </Box>
                    {errors.religion && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.religion}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Belong to</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        name="belongTo"
                        py="3.5"
                        borderColor="#C4C4C4"
                        borderRadius="10"
                        backgroundColor="#F8F8F8"
                        fontSize="16"
                        fontWeight="400"
                        selectedValue={belongTo}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Asian"
                        _selectedItem={{
                          bg: '#F8F8F8',

                          endIcon: <CheckIcon size="5" />,
                        }}
                        onValueChange={selectedOption => {
                          setBelongTo(selectedOption);
                          handleChange('belongTo')(selectedOption);
                        }}
                        // onValueChange={itemValue => setBelongTo(itemValue)}
                      >
                        <Select.Item label="Asian" value="Asian" />
                        <Select.Item label="African" value="African" />
                        <Select.Item label="Western" value="Western" />
                        <Select.Item label="American" value="American" />
                      </Select>
                    </Box>
                    {errors.belongTo && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.belongTo}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Maritial Status</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        name="martialStatus"
                        py="3.5"
                        borderColor="#C4C4C4"
                        fontSize="16"
                        fontWeight="400"
                        borderRadius="10"
                        backgroundColor="#F8F8F8"
                        selectedValue={maritalStatus}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Select your maritial Status"
                        _selectedItem={{
                          bg: '#F8F8F8',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        onValueChange={selectedOption => {
                          setMaritalStatus(selectedOption);
                          handleChange('martialStatus')(selectedOption);
                        }}
                        // onValueChange={itemValue => setMaritalStatus(itemValue)}
                      >
                        <Select.Item label="Married" value="Married" />
                        <Select.Item label="Unmarried" value="Unmarried" />
                      </Select>
                    </Box>
                    {errors.martialStatus && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.martialStatus}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Qualification</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        name="qualification"
                        py="3.5"
                        fontSize="16"
                        fontWeight="400"
                        borderRadius="10"
                        backgroundColor="#F8F8F8"
                        borderColor="#C4C4C4"
                        selectedValue={qualification}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Select your Education Level"
                        _selectedItem={{
                          bg: '#F8F8F8',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        onValueChange={selectedOption => {
                          setQualification(selectedOption);
                          handleChange('qualification')(selectedOption);
                        }}
                        // onValueChange={itemValue => setQualification(itemValue)}
                      >
                        <Select.Item label="B Tech " value="B Tech " />
                        <Select.Item label="BCA" value="BCA" />
                        <Select.Item label="B.Ed" value="B.Ed" />
                        <Select.Item label="B.Com" value="B.Com" />
                      </Select>
                    </Box>
                    {errors.qualification && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.qualification}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Where do you live</Text>
                      <Image
                        source={iconn}
                        style={{width: 18, height: 18, marginLeft: 10}}></Image>
                    </FormControl.Label>
                    <Box>
                      <Select
                        name="country"
                        borderColor="#C4C4C4"
                        backgroundColor="#F8F8F8"
                        borderRadius="10"
                        py="3.5"
                        selectedValue={country}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder="Select your Country"
                        fontSize="16"
                        fontWeight="400"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        onValueChange={selectedOption => {
                          setCountry(selectedOption);
                          handleChange('country')(selectedOption);
                        }}
                        // onValueChange={itemValue => setCountry(itemValue)}
                      >
                        <Select.Item label="India" value="India" />
                        <Select.Item label="Pakistan" value="Pakistan" />
                        <Select.Item label="Sri Lanka" value="Sri Lanka" />
                        <Select.Item label="Bhutan" value="Bhutan" />
                      </Select>
                    </Box>
                    {errors.country && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.country}
                      </Text>
                    )}
                  </FormControl>
                  <Input
                    type="postal"
                    name="postal"
                    onChangeText={handleChange('postal')}
                    onBlur={handleBlur('postal')}
                    value={values.postal}
                    borderColor="#C4C4C4"
                    placeholder="Postal/Zipcode"
                    backgroundColor="#F8F8F8"
                    py="3.5"
                    borderRadius="10"
                    fontSize="16"
                    fontWeight="400"
                  />
                  {errors.postal && (
                    <Text style={{fontSize: 15, color: 'red'}}>
                      {errors.postal}
                    </Text>
                  )}
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Password</Text>
                    </FormControl.Label>
                    <Input
                      type="password"
                      name="password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      borderColor="#C4C4C4"
                      placeholder="Password"
                      backgroundColor="#F8F8F8"
                      py="3.5"
                      borderRadius="10"
                      fontSize="16"
                      fontWeight="400"
                    />
                    {errors.password && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.password}
                      </Text>
                    )}
                    <Input
                      type="confirmPassword"
                      name="confirmPassword"
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      mt="4"
                      borderColor="#C4C4C4"
                      placeholder="Confirm Password"
                      backgroundColor="#F8F8F8"
                      py="3.5"
                      borderRadius="10"
                      fontSize="16"
                      fontWeight="400"
                    />
                    {errors.confirmPassword && (
                      <Text style={{fontSize: 15, color: 'red'}}>
                        {errors.confirmPassword}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormControl.Label>
                      <Text style={styles.text}>Contact Number</Text>
                    </FormControl.Label>
                    <Box>
                      <Select
                        py="3.5"
                        fontSize="16"
                        fontWeight="400"
                        borderRadius="10"
                        backgroundColor="#F8F8F8"
                        borderColor="#C4C4C4"
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose Service"
                        placeholder=""
                        _selectedItem={{
                          bg: '#F8F8F8',
                          endIcon: <CheckIcon size="5" />,
                        }}
                        onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="UX Research" value="ux" />
                        <Select.Item label="Web Development" value="web" />
                        <Select.Item
                          label="Cross Platform Development"
                          value="cross"
                        />
                        <Select.Item label="UI Designing" value="ui" />
                        <Select.Item
                          label="Backend Development"
                          value="backend"
                        />
                      </Select>
                    </Box>
                  </FormControl>

                  <View style={styles.outerview}>
                    <Checkbox
                      value="test"
                      accessibilityLabel="This is a dummy checkbox"
                    />
                    <Text style={styles.textthree}>
                      I agree to cuperos’s terms and conditions to continue to
                      the sign up page
                    </Text>
                  </View>
                  {/* <LinearGradient
              colors={['#D72D79', '#9264F2']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Signup</Text>
            </LinearGradient> */}
                  <TouchableOpacity onPress={handleSubmit}>
                    <ButtonGrad title="Signup" />
                  </TouchableOpacity>
                </VStack>
                <View style={styles.last_view}>
                  <Text style={styles.last_view_text}>
                    Already have an account?
                  </Text>
                  <Text style={[styles.last_view_text, {color: 'red'}]}>
                    Signin Now
                  </Text>
                </View>
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
    backgroundColor: '#FFFFFF',
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
    fontSize: 24,
    fontWeight: '600',
    //textAlign: 'center',
  },
  heading_two: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
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
    //border: '1px solid #C4C4C4',
    //boxSizing: 'border-box',
    //borderRadius: 10,
  },
  button_view: {
    borderRadius: 10,

    marginTop: 20,
    //background:linearGradient(180deg),
  },
  last_view: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 30,
    //position: 'absolute',
    //width: 339
  },
  last_view_text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  linearGradient: {
    width: '100%',
    marginTop: 20,
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
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
  textthree:{
color:'#000000',
fontSize:16,
maxWidth:300,

  },
  outerview:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  }
});

export default Signuptwo;
