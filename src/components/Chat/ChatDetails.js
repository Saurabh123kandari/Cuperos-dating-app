import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {Image, Input} from 'native-base';

const ChatDetails = () => {
  const profileimage = require('../../assets/ProfileIcon.png');
  const teleimage = require('../../assets/teleone.png');
  const recordimage = require('../../assets/records.png');
  const bgimage = require('../../assets/bg_pattern.png');
  const aeroimage = require('../../assets/aero.png');

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground source={bgimage} style={{width: '100%', height: '100%'}}>
        <View style={styles.view_one}>
          <Text style={styles.text_one}>Chat</Text>
        </View>
        <View style={styles.view_two}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              marginTop: 25,
            }}>
            <Image
              size={50}
              resizeMode={'contain'}
              borderRadius={100}
              source={profileimage}
              alt="Alternate Text"
            />
            <View>
              <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '500'}}>
                Mary Burgess
              </Text>
              <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: '500'}}>
                online
              </Text>
            </View>

            <Image
              size={41}
              //resizeMode={'contain'}
              borderRadius={100}
              source={teleimage}
              alt="Alternate Text"
            />
            <Image
              size={41}
              resizeMode={'contain'}
              borderRadius={100}
              source={recordimage}
              alt="Alternate Text"
            />
          </View>
        </View>
        <View style={styles.view_three}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginBottom: 20,
            }}>
            <View style={styles.inner_view}>
              <Text style={styles.text_three}>Okay, See you there.</Text>
            </View>
            <Image
              size={41}
              ml={2}
              resizeMode={'contain'}
              borderRadius={100}
              source={profileimage}
              alt="Alternate Text"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginBottom: 20,
            }}>
            <Image
              size={41}
              resizeMode={'contain'}
              borderRadius={100}
              source={profileimage}
              alt="Alternate Text"
            />
            <View
              style={[
                styles.inner_view,
                {
                  backgroundColor: '#1A0566',
                  borderBottomRightRadius: 12,
                  borderBottomLeftRadius: 0,
                  marginLeft: 10,
                },
              ]}>
              <Text style={[styles.text_three, {maxWidth: 160, padding: 10}]}>
                Okay! Sound good. Let’s meet after 9 @ Blue Ocean (Sector 5)
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginBottom: 20,
            }}>
            <View style={styles.inner_view}>
              <Text style={[styles.text_three, {maxWidth: 140, padding: 10}]}>
                Hi Alex, Any plan for this weekend? Let’s go for a dinner!!
              </Text>
            </View>
            <Image
              ml={2}
              size={41}
              resizeMode={'contain'}
              borderRadius={100}
              source={profileimage}
              alt="Alternate Text"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginBottom: 20,
            }}>
            <Image
              size={41}
              resizeMode={'contain'}
              borderRadius={100}
              source={profileimage}
              alt="Alternate Text"
            />
            <View
              style={[
                styles.inner_view,
                {
                  backgroundColor: '#1A0566',
                  borderBottomRightRadius: 12,
                  borderBottomLeftRadius: 0,
                  marginLeft: 10,
                },
              ]}>
              <Text style={[styles.text_three, {maxWidth: 160, padding: 10}]}>
                Hey Adaora, How are you? Hope you are doing great.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.view_four}>
          <Input
            width="100%"
            placeholder="Type your text here...."
            borderColor="#C4C4C4"
            background="#F8F8F8"
            py={3}
          fontSize="17"
            InputRightElement={
              <Image
                size={7}
                resizeMode={'contain'}
                borderRadius={100}
                source={aeroimage}
                alt="Alternate Text"
                style={{marginRight: 10}}
              />
            }
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  view_one: {
    flex: 0.1,
    //backgroundColor:'yellow'
  },
  text_one: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
  },
  view_two: {
    backgroundColor: '#FF0000',
    flex: 0.18,
    borderRadius: 40,
    marginHorizontal: 10,
    // display:'flex',
    // flexDirection:'row'
  },
  view_three: {
    //backgroundColor: '#FF0000',
    flex: 0.57,
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  inner_view: {
    backgroundColor: '#D82B76',
    //marginHorizontal:60,
    padding: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  view_four: {
    //backgroundColor:'yellow',
    flex: 0.15,
    //alignSelf:'center'
    // textAlign:'center'
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  text_three: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 14,
  },
});
export default ChatDetails;
