import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'native-base';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import {LOGO, BGPATTERN} from '../../constant/App_Constant';
import LinearGradient from 'react-native-linear-gradient';
import Signin from '../Auth/Signin/Signin'

const Onboarding1 = (props) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };
  const renderSkipButton = () => {
    return (
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#000000',
          position: 'relative',
          textAlign: 'center',
          marginBottom: 100,
        }}>
        Skip
      </Text>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={{paddingHorizontal: 60}}>
        <LinearGradient
          colors={['#D72D79', '#9264F2']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.linearGradient}>
           <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('signin');
                  }}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  };
  const RenderItem = ({item}) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:'#fff'
        }}>
        <View style={{flex: 0.05}}></View>

        <View style={styles.viewone}>
          <Image style={styles.logo} source={item.logo} alt="Alternate Text" />
          <Text style={styles.introTitleStyle}>{item.text}</Text>
          <Text style={[styles.TitleStyle,{maxWidth:item.width}]}>{item.title}</Text>
        </View>
        <View style={styles.viewtwo}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              resizeMode: 'contain',
            }}>
             
            </Image>
            <Image  source={item.innerimage}
            style={{
              width: '80%',
              height: '80%',
              alignSelf: 'center',
              resizeMode: 'contain',
              position:'absolute',
              marginTop:25,
              
              
            }}></Image>
        </View>
        <View style={styles.viewthree}>
          <Image
            source={item.bottomimage}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              marginTop: 50,
             

            }}></Image>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <>
      {showRealApp ? (
        <Signin {...props} />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderDoneButton={renderDoneButton}
          //skipLabel={{color:'red'}}
          //bottomButton={true}
          // skipLabel={{color:'black'}}
          bottomButton={true}
          showNextButton={false}
          dotStyle={{backgroundColor: '#C4C4C4', marginBottom: 40}}
          activeDotStyle={{
            backgroundColor: 'red',
            paddingHorizontal: 13,
            paddingVertical: 6,
            marginBottom: 40,
          }}
          renderSkipButton={renderSkipButton}
          //style={{marginBottom:20}}
        />
      )}
    </>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '500',
  },
  logo: {
    alignSelf: 'center',
    width: '45%',

    resizeMode: 'contain',
  },
  viewone: {
    flex: 0.25,
  },
  viewtwo: {
    flex: 0.4,
  },
  viewthree: {
    flex: 0.3,
    position: 'relative',
  },
  TitleStyle: {
    marginTop: 10,
    fontSize: 18,
    color: '#5E5E5E',
    textAlign: 'center',
    fontWeight: '400',
  
    alignSelf: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    width: '100%',

    //marginTop: 20,
    marginBottom: 80,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    //fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: '600',
    // backgroundColor: 'transparent',
  },
});

const slides = [
  {
    key: 's1',
    logo: LOGO,
    text: 'Find your soulmate',
    title: 'Swipe Right To Like  Someone or Swipe Left To Pass',
    image: require('../../assets/bgpattern1.png'),
    innerimage:require('../../assets/img_1.png'),
    bottomimage: require('../../assets/heart_pattern.png'),
    width:250,
  },
  {
    key: 's2',
    logo: LOGO,
    text: 'Create a connection',
    title: 'Cheers! If they also swipe right, it’s a Match!',
    image: require('../../assets/Group11.png'),
    innerimage:require('../../assets/img_2.png'),
    bottomimage: require('../../assets/heart_pattern.png'),
    width:275,
  },
  {
    key: 's3',
    logo: LOGO,
    text: 'Let’s do a conversation',
    title: 'Now, You can do message, call & video call with your connection',
    image: require('../../assets/pattern3.png'),
    innerimage:require('../../assets/conversation.png'),
    bottomimage: require('../../assets/heart_pattern.png'),
    width:275,
    
  },
  {
    key: 's4',
    logo: LOGO,
    text: 'Discover Nearby People',
    title: 'Discover new and interesting people nearby you',
    image: require('../../assets/bgpattern1.png'),
    bottomimage: require('../../assets/heart_pattern.png'),
    innerimage:require('../../assets/Map.png'),
    width:275,
  },
];
