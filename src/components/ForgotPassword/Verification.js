import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  VStack,
  FormControl,
  Input,
  Button,
  ScrollView,
  ChevronLeftIcon,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const Verification = props => {
  const image = require('../../assets/bg_pattern.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <ImageBackground
          source={image}
          style={{width: '100%', height: '100%', paddingTop: 30}}>
          <View style={{flex: 0.05, backgroundColor: 'red'}}></View>
          <TouchableOpacity
            style={{marginHorizontal: 10, height: 30, width: 30, zIndex: 10}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <ChevronLeftIcon style={{}} iconName="chevron-left" size="5" />
          </TouchableOpacity>

          <Text style={styles.text}>Get Verified</Text>

          <View style={styles.secondview}>
            <Text style={styles.secondtext}>
              Carry out the free eharmony SMS verification now to receive SMS
              verified symbol for your profile!
            </Text>
          </View>
          <View style={styles.viewthree}>
            <VStack space={3}>
              <FormControl mt={4}>
                <FormControl.Label>
                  <Text style={styles.inlinetext}>
                    Enter your mobile number
                  </Text>
                </FormControl.Label>

                <View style={{marginTop: 10}}>
                  <Input
                    py="4"
                    backgroundColor="#F8F8F8"
                    borderRadius="10"
                    style={{borderTopLeftRadius: 10}}
                    rightElement={
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FF0000',
                          paddingHorizontal: 15,
                          paddingVertical: 19,
                          borderRadius: 6,
                        }}>
                        <Text
                          style={{
                            alignSelf: 'center',
                            color: '#FFFFFF',
                            fontSize: 15,
                            fontWeight: '600',
                          }}>
                          Send OTP
                        </Text>
                      </TouchableOpacity>
                    }
                  />
                </View>
              </FormControl>

              <FormControl mt={5}>
                <FormControl.Label>
                  <Text style={styles.inlinetext}>OTP</Text>
                </FormControl.Label>
                <Input
                  backgroundColor="#F8F8F8"
                  py="4"
                  mt={2}
                  borderRadius="10"
                />
              </FormControl>
            </VStack>
            <LinearGradient
              colors={['#D72D79', '#9264F2']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}>
              <TouchableOpacity
                onPress={() => {
                  // console.log(props.navigation, 'e..');
                }}>
                <Text style={styles.buttonText}>
                  Start the SMS verification
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  firstview: {
    flex: 1,
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: '-10%',
    textAlign: 'center',
    color: '#000000',
  },
  secondview: {
    marginVertical: 30,
    flex: 0.15,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  secondtext: {
    color: '#5E5E5E',
    fontSize: 18,
    fontWeight: '400',
    maxWidth: 350,
    textAlign: 'center',
    lineHeight: 27,
  },
  viewthree: {
    flex: 0.45,
    paddingHorizontal: 20,
  },
  inlinetext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  linearGradient: {
    width: '100%',
    marginTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Verification;
