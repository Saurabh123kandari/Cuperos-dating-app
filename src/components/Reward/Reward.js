import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Radio, Stack, Input, Image} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const Reward = () => {
  const ShareImage = require('../../assets/Share.png');
  const WhatsappImage = require('../../assets/Whatsapp.png');
  const MessageImage = require('../../assets/Message.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.view_one}>
        <Text style={styles.heading}>Referral Reward</Text>
        <Text style={styles.innerheading}>
          Invited your friends to Cuperos. Once they start using the app, you’ll
          get reward.
        </Text>
      </View>

      <LinearGradient
        colors={['#D72D79', '#9264F2']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.view_two}>
        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="pick a size">
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            alignItems={{
              base: 'flex-start',
              md: 'center',
            }}
            space={4}
            w="75%"
            maxW="300px">
            <Radio value="1" colorScheme="red" size="sm" my={1}>
              <Text style={styles.radiotext}>Lorem ipsum dolor sit </Text>
            </Radio>
            <Radio value="1" colorScheme="red" size="sm" my={1}>
              <Text style={styles.radiotext}>
                Contrary to popular belief, Lorem Ipsum is not simply
              </Text>
            </Radio>
            <Radio value="1" colorScheme="red" size="sm" my={1}>
              <Text style={styles.radiotext}>
                There are many variations of passages of Lorem Ipsum available,
                but the majoritys
              </Text>
            </Radio>
          </Stack>
        </Radio.Group>
      </LinearGradient>

      <View style={styles.view_three}>
        <Text style={[styles.inlinetext, {marginVertical: 0}]}>
          Referral Code
        </Text>
        <View style={{marginTop: 10}}>
          <Input
            background="#FFFFFF"
            py="4"
            borderRadius="10"
            style={{borderTopLeftRadius: 10}}
            rightElement={
              <TouchableOpacity style={{}}>
                <LinearGradient
                  style={styles.linearGradient}
                  colors={['#D72D79', '#9264F2']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: '#FFFFFF',
                      fontSize: 15,
                      fontWeight: '600',
                    }}>
                    Tap to copy
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            }></Input>
        </View>
        <Text style={styles.inlinetext}>Or Invite Via</Text>
        <View style={styles.innerview}>
          <View>
            <Image  size={75}
                 resizeMode={'contain'} source={WhatsappImage} alt="Alternate Text" />
            <Text style={styles.imagetext} size={75}
                 resizeMode={'contain'}>Whatsapp</Text>
          </View>
          <View>
            <Image
                size={75}
                 resizeMode={'contain'}

              source={MessageImage}
              alt="Alternate Text"
            />
            <Text style={styles.imagetext}>Mail</Text>
          </View>
          <View>
            <Image size={75}
                 resizeMode={'contain'} source={ShareImage} alt="Alternate Text" />
            <Text style={styles.imagetext}>Share</Text>
          </View>
        </View>
        <LinearGradient
          colors={['#D72D79', '#9264F2']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={[styles.linearGradient, {paddingVertical: 7, marginTop: 20}]}>
          {/* <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('signuptwo');
                      }}> */}
          <TouchableOpacity>
            <Text style={styles.buttonText}>Invite Now</Text>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fceded',
  },
  view_one: {
    flex: 0.21,
  },
  view_two: {
    flex: 0.31,
    backgroundColor: 'yellow',
    marginHorizontal: 30,
    padding: 30,
    borderRadius: 10,
  },
  view_three: {
    flex: 0.48,
    padding: 20,
    paddingHorizontal:30
    // backgroundColor: 'orange',
  },
  radiotext: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
    color: '#FFFFFF',
  },
  heading: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FF0000',
    textAlign: 'center',
    paddingTop: 20,
  },
  innerheading: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    maxWidth: 300,
    alignSelf: 'center',
    marginTop: 10,
  },
  innerview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   backgroundColor:'red',
  },
  linearGradient: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 15,
    paddingVertical: 19,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
  imagetext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  inlinetext: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 15,
  },
});
export default Reward;
