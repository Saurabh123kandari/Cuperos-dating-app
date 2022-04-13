import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
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

const SignupOne = (props) => {
  let [service, setService] = React.useState('');
  const image = {
    uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/bg_pattern.png',
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        {/* <ScrollView> */}
          <View style={styles.icon_view_one}>
            {/* <ChevronLeftIcon iconName="chevron-left" size="8" /> */}
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
                  placeholder="First Name"
                  backgroundColor="#F8F8F8"
                  py="3.5"
                  borderRadius="10"
                  fontSize="16"
                  fontWeight="400"
                />
                <Input
                  placeholder="Last Name"
                  backgroundColor="#F8F8F8"
                  fontSize="16"
                  fontWeight="400"
                  py="3.5"
                  mt="4"
                  borderRadius="10"
                />
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Date of Birth</Text>
                </FormControl.Label>
                <Input
                  placeholder="DOB"
                  backgroundColor="#F8F8F8"
                  fontSize="16"
                  fontWeight="400"
                  py="3.5"
                  borderRadius="10"
                />
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Gender</Text>
                </FormControl.Label>
                <Box>
                  <Select
                    py="3.5"
                    borderRadius="10"
                    backgroundColor="#F8F8F8"
                    fontSize="16"
                    fontWeight="400"
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Select your gender"
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
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Height</Text>
                </FormControl.Label>
                <Box>
                  <Select
                    backgroundColor="#F8F8F8"
                    borderRadius="10"
                    fontSize="16"
                    fontWeight="400"
                    py="3.5"
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Select your height"
                    _selectedItem={{
                      bg: 'red',
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
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                </Box>
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
                  <TouchableOpacity
                  onPress={() => {
                    // console.log(props.navigation, 'e..');
                    props.navigation.navigate('signuptwo');
                  }}>
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </LinearGradient>
            </VStack>
          </Box>
        {/* </ScrollView> */}
      </ImageBackground>
    </SafeAreaView>
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
