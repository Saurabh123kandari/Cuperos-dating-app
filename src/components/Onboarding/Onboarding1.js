import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Button,
} from 'react-native';
import {Image} from 'native-base';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Onboarding1 = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          //justifyContent: 'center',
          //alignItems: 'center',
        }}>
        <View style={{flex: 0.1}}></View>

        <View style={styles.viewone}>
          <Image style={styles.logo} source={item.logo} alt="Alternate Text" />
          <Text style={styles.introTitleStyle}>{item.text}</Text>
          <Text style={styles.TitleStyle}>{item.title}</Text>
        </View>
        <View style={styles.viewtwo}>
          <Image
            source={item.image}
            style={{marginTop:20,width: '72%', height: '70%',alignSelf:"center"}}></Image>
        </View>
        <View style={styles.viewthree}>
        <Image
            source={item.bottomimage}
            style={{width: '100%', height: '80%',marginTop:33}}></Image>
        </View>

        {/* <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text> */}
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
        
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: 25,
    fontWeight: '500',
  },
  logo: {
    //marginTop:80,
    alignSelf: 'center',
    width: '45%',
    height: 40,
  },
  viewone: {
    flex: 0.2,
    //backgroundColor: 'yellow',
  },
  viewtwo: {
    flex: 0.5,
    //backgroundColor: 'pink',
    //alignItems:'center'
  },
  viewthree: {
    flex: 0.2,
   
    //backgroundColor: 'green',
  },
  TitleStyle: {
    marginTop: 10,
    fontSize: 18,
    color: '#5E5E5E',
    textAlign: 'center',
    fontWeight: '400',
    maxWidth: 250,
    alignSelf: 'center',
  },
});

const slides = [
  {
    key: 's1',
    logo: {
      uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/logo.png',
    },
    text: 'Find your soulmate',
    title: 'Swipe Right To Like  Someone or Swipe Left To Pass',
    image: {
      uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/bg pattern1.png',
    },
    bottomimage: {
        uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/heart_pattern.png',
      },
  },
  {
    key: 's2',
    logo: {
        uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/logo.png',
      },
      text: 'Create a connection',
      title: 'Cheers! If they also swipe right,it’s a Match!',
      image: {
        uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/bg pattern1.png',
      },
      bottomimage: {
          uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/heart_pattern.png',
        },
    //backgroundColor: '#febe29',
  },
  {
    key: 's3',
    logo: {
        uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/logo.png',
      },
      text: 'Let’s do a conversation',
      title: 'Now, You can do message, call & video call with your connection',
      image: {
        uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/bg pattern1.png',
      },
      bottomimage: {
          uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/heart_pattern.png',
        },
  },
  {
    key: 's4',
    logo: {
        uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/logo.png',
      },
      text: 'Discover Nearby People',
      title: 'Discover new and interesting people nearby you',
      image: {
        uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/bg pattern1.png',
      },
      bottomimage: {
          uri: '/Users/manojsinghnegi/Documents/Work/cuperos/src/assets/heart_pattern.png',
        },
  },
];
