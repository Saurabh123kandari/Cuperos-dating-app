import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  ScrollView,
  Checkbox,
  Select,
} from 'native-base';
import {CheckIcon, ChevronLeftIcon, Progress} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {ARROW_ICON, ARROW_RIGHT} from '../../constant/App_Constant';

const EditProfile = () => {
  const iconn = require('../../assets/Group6.png');
  const [service, setService] = React.useState('');
  const [belongTo, setBelongTo] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [maritalStatus, setMaritalStatus] = React.useState('');
  const [qualification, setQualification] = React.useState('');
  const [country, setCountry] = React.useState('');

  const backimg = require('../../assets/BackgroundIcon.png');
  const profilelogo = require('../../assets/ProfileIcon.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView >
        <View style={styles.view_one}>
          <View style={styles.firstview}>
            <Image source={ARROW_ICON} style={{}} alt="Alternate Text"></Image>
            <Text style={styles.faqtext}>My Profile</Text>
          </View>
          <Image source={profilelogo} style={{borderRadius:100,alignSelf:'center',top:50}}></Image>
        <View>
        <Image source={backimg} style={{alignSelf:'center',opacity:0.3,bottom:20}}></Image>
        <View style={{position:'absolute',alignSelf:'center',bottom:80}}>
          <Text style={{fontSize:24,fontWeight:'600',color:'#FFFFFF'}}>Aarianna Barnes</Text>
         
        </View>
        </View>
         
          </View>

        
        <View style={styles.view_two}>
          <Text style={styles.text}>About</Text>
          <View style={styles.inner_view}>
            <Text>
              Hello! I am Aarianna and I am a product designer at one of the
              biggest non-profits in the USA. I am a passionate person,
              customer-obsessed, and enjoy always helping people design new
              products/ experiences for their customers!
            </Text>
          </View>
          <Box style={styles.form_view}>
            <VStack space={3}>
              <FormControl mt="3">
                <FormControl.Label>
                  <Text style={styles.text}>Name</Text>
                </FormControl.Label>
                <Input
                  type="firstName"
                  name="firstName"
                  //   onChangeText={'firstName'}
                  //   onBlur={'firstName'}
                  //value={'firstName'}
                  placeholder="First Name"
                  backgroundColor="#F8F8F8"
                  py="3.5"
                  borderRadius="10"
                  borderColor="#C4C4C4"
                  fontSize="16"
                  fontWeight="400"
                />{' '}
                <Input
                  type="firstName"
                  name="firstName"
                  //   onChangeText={'firstName'}
                  //   onBlur={'firstName'}
                  //value={'firstName'}
                  placeholder="Last Name"
                  backgroundColor="#F8F8F8"
                  py="3.5"
                  borderRadius="10"
                  borderColor="#C4C4C4"
                  fontSize="16"
                  fontWeight="400"
                />
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Date of Birth</Text>
                  <Image
                    source={iconn}
                    style={{width: 18, height: 18, marginLeft: 10}}></Image>
                </FormControl.Label>
                <Input
                  type="firstName"
                  name="firstName"
                  //   onChangeText={'firstName'}
                  //   onBlur={'firstName'}
                  //value={'firstName'}
                  placeholder="DOB"
                  backgroundColor="#F8F8F8"
                  py="3.5"
                  borderRadius="10"
                  borderColor="#C4C4C4"
                  fontSize="16"
                  fontWeight="400"
                />
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Gender</Text>
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
                    placeholder="Select your gender"
                    _selectedItem={{
                      bg: '#F8F8F8',

                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setBelongTo(selectedOption);
                    }}
                    // onValueChange={itemValue => setBelongTo(itemValue)}
                  >
                    <Select.Item label="Asian" value="Asian" />
                    <Select.Item label="African" value="African" />
                    <Select.Item label="Western" value="Western" />
                    <Select.Item label="American" value="American" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Height</Text>
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
                    placeholder="Select your height"
                    _selectedItem={{
                      bg: '#F8F8F8',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setMaritalStatus(selectedOption);
                    }}
                    // onValueChange={itemValue => setMaritalStatus(itemValue)}
                  >
                    <Select.Item label="Married" value="Married" />
                    <Select.Item label="Unmarried" value="Unmarried" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>
                    Why do you want to be in a relationship?
                  </Text>
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
                    placeholder="Love"
                    _selectedItem={{
                      bg: '#F8F8F8',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setQualification(selectedOption);
                    }}
                    // onValueChange={itemValue => setQualification(itemValue)}
                  >
                    <Select.Item label="Love " value="B Tech " />
                    <Select.Item label="BCA" value="BCA" />
                    <Select.Item label="B.Ed" value="B.Ed" />
                    <Select.Item label="B.Com" value="B.Com" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>
                    What are your valuble in a relationship?
                  </Text>
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
                    placeholder="Love"
                    _selectedItem={{
                      bg: '#F8F8F8',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setQualification(selectedOption);
                    }}
                    // onValueChange={itemValue => setQualification(itemValue)}
                  >
                    <Select.Item label="B Tech " value="B Tech " />
                    <Select.Item label="BCA" value="BCA" />
                    <Select.Item label="B.Ed" value="B.Ed" />
                    <Select.Item label="B.Com" value="B.Com" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>
                    What do you do during your free time?
                  </Text>
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
                    placeholder="Music"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="Music" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>
                    What type of hobbies do you have?
                  </Text>
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
                    placeholder="Love"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="Love" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>
                    What type of sports do you like?
                  </Text>
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
                    placeholder="Basket Ball"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="India" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>
                    What type of music do you like?
                  </Text>
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
                    placeholder="Rock"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="India" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Highest Degree</Text>
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
                    placeholder="University/College"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="India" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Ethnicity</Text>
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
                    placeholder="Black"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="India" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>

              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Region</Text>
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
                    placeholder="Black"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="India" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Occupation</Text>
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
                    placeholder="Designer"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={selectedOption => {
                      setCountry(selectedOption);
                    }}
                    // onValueChange={itemValue => setCountry(itemValue)}
                  >
                    <Select.Item label="India" value="India" />
                    <Select.Item label="Pakistan" value="Pakistan" />
                    <Select.Item label="Sri Lanka" value="Sri Lanka" />
                    <Select.Item label="Bhutan" value="Bhutan" />
                  </Select>
                </Box>
              </FormControl>
            </VStack>
          </Box>
          <Text style={[styles.text, {marginTop: 30, marginBottom: 20}]}>
            I am
          </Text>
          <View style={styles.last_view}>
            <View style={styles.one}>
              <Text style={[styles.last_text, {color: '#FFFFFF'}]}>Smoker</Text>
            </View>
            <View style={[styles.two, {marginLeft: 20}]}>
              <Text style={styles.last_text}>Non-Smoker</Text>
            </View>
          </View>
          <LinearGradient
            colors={['#D72D79', '#9264F2']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            {/* <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('signuptwo');
                      }}> */}
            <TouchableOpacity>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            {/* </TouchableOpacity> */}
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EF7272',
  },
  view_one: {
    flex: 0.5,
    //maxHeight: 800,
    //backgroundColor: 'yellow',
    paddingHorizontal: 20,
  },
  view_two: {
    flex: 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    marginTop: 40,
  },
  inner_view: {
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  one: {
    backgroundColor: '#FF0000',
    padding: 20,
    borderRadius: 10,
  },
  two: {
    backgroundColor: '#FFDFDF',
    padding: 20,
    borderRadius: 10,
  },
  last_view: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  last_text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  linearGradient: {
    width: '100%',
    marginTop: 40,
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
  firstview: {
    display: 'flex',
    //flexDirection:'row',
    //justifyContent:'space-between',
    padding: 15,
    marginTop:10,
   // backgroundColor: 'green',
  },
  faqtext: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -20,
  },
  inner: {
    marginTop: 30,
  },
});

export default EditProfile;
