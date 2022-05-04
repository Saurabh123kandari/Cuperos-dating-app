import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import {Button} from 'native-base';

const ItsAMatch = props => {
  const background = require('../../assets/Background.png');
  const match = require('../../assets/Match.png');
  const likess = require('../../assets/Likess.png');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground
        resizeMode="contain"
        source={background}
        style={{height: '100%'}}>
        <View style={styles.view_one}></View>
        <View style={styles.view_two}>
          <Text style={styles.text_one}>It's a Match</Text>
          <Text style={styles.text_two}>You and Arianna liked each other.</Text>
        </View>
        <View style={styles.view_three}>
          <Image
            style={{alignSelf: 'center'}}
            resizeMode={'contain'}
            source={match}
            alt="Alternate Text"
          />
          <Image
            style={{position: 'absolute', alignSelf: 'center', top: 115}}
            size={70}
            resizeMode={'contain'}
            source={likess}
            alt="Alternate Text"
          />
        </View>
        <View style={styles.view_four}>
          <Button p={4} style={styles.buttonone}>
            <Text style={styles.buttontextone}>Send a Message</Text>
          </Button>
          <Button p={4} style={styles.buttontwo}>
            <Text style={styles.buttontextwo}>Keep Swiping</Text>
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EF7272',
  },
  view_one: {
    flex: 0.13,
  },
  view_two: {
    flex: 0.17,
  },
  view_three: {
    flex: 0.35,
  },
  view_four: {
    flex: 0.35,

    paddingHorizontal: 20,
  },
  text_one: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  text_two: {
    fontSize: 21,
    fontWeight: '400',
    textAlign: 'center',
    maxWidth: 220,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  buttonone: {
    backgroundColor: '#1A0566',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
  buttontwo: {
    backgroundColor: '#FF0000',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
  buttontextone: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttontextwo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default ItsAMatch;
