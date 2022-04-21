import React from 'react';
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
  Slider,
} from 'native-base';
import {Select, CheckIcon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ARROW_ICON} from '../../constant/App_Constant';
const Filter = props => {
  const [education, setEducation] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [showMe, setShowMe] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [ethnicity, setEthnicity] = React.useState('');
  return (
    <Formik
      initialValues={{
        firstName: '',
        showMe: '',
        height: '',
        gender: '',
      }}
      // validationSchema={SignupSchema}
      onSubmit={values => {
        let payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          showMe: values.showMe,
          gender: values.gender,
          height: values.height,
        };
        props.navigation.navigate('signuptwo', {
          payload,
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <SafeAreaView style={styles.MainContainer}>
          <ScrollView>
            <View style={{flex: 1}}>
              {/* <View style={{flex: 0.1, backgroundColor:'red'}}></View> */}
              <View style={styles.header}>
                <Image
                  source={ARROW_ICON}
                  style={{}}
                  alt="Alternate Text"></Image>
                <Text style={styles.heading_one}>Filter</Text>
              </View>
              <View style={styles.anotherview}>
                <FormControl>
                  <FormControl.Label>
                    <Text style={styles.text}>Location</Text>
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
                </FormControl>
                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>Distance</Text>
                  </FormControl.Label>
                  <View style={{}}>
                    <Slider
                      // w="3/4"
                      colorScheme="red"
                      maxW="600"
                      defaultValue={45}
                      minValue={0}
                      maxValue={100}
                      accessibilityLabel="hello world"
                      step={10}>
                      <Slider.Track>
                        <Slider.FilledTrack />
                      </Slider.Track>
                      <Slider.Thumb />
                    </Slider>
                  </View>
                </FormControl>
                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>Interested In</Text>
                  </FormControl.Label>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={[
                        styles.option_button,
                        {backgroundColor: '#FF0000'},
                      ]}>
                      <Text>Men</Text>
                    </View>
                    <View
                      style={[
                        styles.option_button,
                        {backgroundColor: '#FFDFDF'},
                      ]}>
                      <Text>Women</Text>
                    </View>
                    <View
                      style={[
                        styles.option_button,
                        {backgroundColor: '#FFDFDF'},
                      ]}>
                      <Text>Both</Text>
                    </View>
                  </View>
                </FormControl>
                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>Age Range</Text>
                  </FormControl.Label>
                  <View style={{}}>
                    <Slider
                      // w="3/4"
                      colorScheme="red"
                      maxW="600"
                      defaultValue={35}
                      minValue={0}
                      maxValue={100}
                      accessibilityLabel="hello world"
                      step={10}>
                      <Slider.Track>
                        <Slider.FilledTrack />
                      </Slider.Track>
                      <Slider.Thumb />
                    </Slider>
                  </View>
                </FormControl>
                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>Show me</Text>
                  </FormControl.Label>
                  <Box>
                    <Select
                      name="showMe"
                      backgroundColor="#F8F8F8"
                      borderRadius="10"
                      borderColor="#C4C4C4"
                      fontSize="16"
                      fontWeight="400"
                      py="3.5"
                      selectedValue={showMe}
                      // value={showMe}
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Women"
                      _selectedItem={{
                        bg: 'red',
                        endIcon: <CheckIcon size="5" />,
                      }}
                      onValueChange={selectedOption => {
                        setShowMe(selectedOption);
                        handleChange('showMe')(selectedOption);
                      }}>
                      <Select.Item label="Women" value="Women" />
                      <Select.Item label="Men" value="Men" />
                    </Select>
                  </Box>
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
                </FormControl>

                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>Education level</Text>
                  </FormControl.Label>
                  <Box>
                    <Select
                      name="education"
                      backgroundColor="#F8F8F8"
                      borderRadius="10"
                      borderColor="#C4C4C4"
                      fontSize="16"
                      fontWeight="400"
                      py="3.5"
                      selectedValue={education}
                      // value={education}
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Highest Degree"
                      _selectedItem={{
                        bg: 'red',
                        endIcon: <CheckIcon size="5" />,
                      }}
                      // onValueChange={itemValue => seteducation(itemValue)}
                      onValueChange={selectedOption => {
                        setEducation(selectedOption);
                        handleChange('education')(selectedOption);
                      }}>
                      <Select.Item label="edu 1" value="edu 1" />
                      <Select.Item label="edu 2" value="edu 2" />
                    </Select>
                  </Box>
                </FormControl>
                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>I Like</Text>
                  </FormControl.Label>
                  <View style={styles.like_option}>
                    <View
                      style={[
                        styles.option_button,
                        {backgroundColor: '#FF0000'},
                      ]}>
                      <Text>Smoker</Text>
                    </View>
                    <View
                      style={[
                        styles.option_button,
                        {backgroundColor: '#FFDFDF', marginHorizontal: 10},
                      ]}>
                      <Text>Non Smoker</Text>
                    </View>
                  </View>
                </FormControl>
                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>Religion</Text>
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
                </FormControl>
                <FormControl mt="4">
                  <FormControl.Label>
                    <Text style={styles.text}>Ethnicity</Text>
                  </FormControl.Label>
                  <Box>
                    <Select
                      py="3.5"
                      px="4"
                      name="ethnicity"
                      borderRadius="10"
                      backgroundColor="#F8F8F8"
                      borderColor="#C4C4C4"
                      fontSize="16"
                      fontWeight="400"
                      selectedValue={ethnicity}
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Select your ethnicity"
                      _selectedItem={{
                        bg: '#F8F8F8',
                        endIcon: <CheckIcon size="5" />,
                      }}
                      // onValueChange={itemValue => setGender(itemValue)}
                      onValueChange={selectedOption => {
                        setEthnicity(selectedOption);
                        handleChange('ethnicity')(selectedOption);
                      }}>
                      <Select.Item label="Male" value="Male" />
                      <Select.Item label="Female" value="Female" />
                      <Select.Item label="Other" value="Other" />
                    </Select>
                  </Box>
                </FormControl>
                <LinearGradient
                  colors={['#D72D79', '#9264F2']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}
                  style={styles.linearGradient}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Apply</Text>
                  </TouchableOpacity>
                  {/* </TouchableOpacity> */}
                </LinearGradient>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    // flex: 1,
    fontFamily: 'Poppins',
    //backgroundColor: 'red',
    //paddingHorizontal: 20,
  },

  heading_one: {
    fontSize: 24,
    marginTop: -24,
    color: 'red',
    fontWeight: '500',
    // color: '#000000',
    textAlign: 'center',
    //alignSelf:'center'
  },
  header: {
    // flex:0.2,
    flex: 0.1,
    display: 'flex',
    paddingHorizontal: 20,
    marginVertical: 20,
    //flexDirection:'row',
    //justifyContent:'flex-start',
    // backgroundColor:'red'
  },
  anotherview: {
    flex: 0.9,
    padding: 15,
    // paddingHorizontal:10,

    //backgroundColor:'pink',
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
  option_button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffff',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  like_option: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default Filter;
