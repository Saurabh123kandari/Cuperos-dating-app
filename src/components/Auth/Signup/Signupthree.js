import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
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
  Checkbox
} from 'native-base';
import {Select, CheckIcon, ChevronLeftIcon, Progress} from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
import ButtonGrad from './ButtonGrad';

const Signupthree = () => {
  let [service, setService] = React.useState('');
  const image = {
    uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/bg_pattern.png',
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <View style={styles.icon_view_one}>
            <ChevronLeftIcon iconName="chevron-left" size="8" />
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
            <VStack space={3} >
              <FormControl mt="3">
                <FormControl.Label>
                  <Text style={styles.text}>Spirituality/Religion</Text>
                </FormControl.Label>
                <Box>
                  <Select
                    py="3.5"
                    borderRadius="10"
                    borderColor="#C4C4C4"
                    backgroundColor="#F8F8F8"
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Select your Religion"
                    fontSize="16"
                    fontWeight="400"
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
                  <Text style={styles.text}>Belong to</Text>
                </FormControl.Label>
                <Box>
                  <Select
                    py="3.5"
                    borderColor="#C4C4C4"
                    borderRadius="10"
                    backgroundColor="#F8F8F8"
                    fontSize="16"
                    fontWeight="400"
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Asian"
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
                  <Text style={styles.text}>Maritial Status</Text>
                </FormControl.Label>
                <Box>
                  <Select
                    py="3.5"
                    borderColor="#C4C4C4"
                    fontSize="16"
                    fontWeight="400"
                    borderRadius="10"
                    backgroundColor="#F8F8F8"
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Select your maritial Status"
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
                  <Text style={styles.text}>Qualification</Text>
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
                    placeholder="Select your Education Level"
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
                  <Text style={styles.text}>Where do you live</Text>
                </FormControl.Label>
                <Box>
                  <Select
                   borderColor="#C4C4C4"
                    backgroundColor="#F8F8F8"
                    borderRadius="10"
                    py="3.5"
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Select your Country"
                    fontSize="16"
                    fontWeight="400"
                    _selectedItem={{
                      bg: 'teal.600',
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
              <Input
               borderColor="#C4C4C4"
                placeholder="Postal/Zipcode"
                backgroundColor="#F8F8F8"
                py="3.5"
                borderRadius="10"
                fontSize="16"
                fontWeight="400"
              />
              <FormControl mt="4">
                <FormControl.Label>
                  <Text style={styles.text}>Password</Text>
                </FormControl.Label>
                <Input
                 borderColor="#C4C4C4"
                  placeholder="Password"
                  backgroundColor="#F8F8F8"
                  py="3.5"
                  borderRadius="10"
                  fontSize="16"
                  fontWeight="400"
                />
                <Input
                  mt="4"
                  borderColor="#C4C4C4"
                  placeholder="Confirm Password"
                  backgroundColor="#F8F8F8"
                  py="3.5"
                  borderRadius="10"
                  fontSize="16"
                  fontWeight="400"
                />
              </FormControl>
              <View style={styles.outerview}>
              <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
              <Text style={styles.textthree}>I agree to cuperos’s terms and conditions 
to continue to the sign up page</Text>
                </View>
             
              {/* <LinearGradient
              colors={['#D72D79', '#9264F2']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Signup</Text>
            </LinearGradient> */}
              <ButtonGrad title="Signup" />
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

export default Signupthree;
