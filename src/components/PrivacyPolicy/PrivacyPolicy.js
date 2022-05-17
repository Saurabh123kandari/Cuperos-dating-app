import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {BACKGROUND_IMAGE, ARROW_ICON} from '../../constant/App_Constant';

const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={styles.Main_Container}>
      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.firstview}>
          <Image
            source={ARROW_ICON}
            resizeMode="contain"
            size={79}
            alt="Alternate Text"></Image>
          <Text style={[styles.faqtext]}>Terms & Conditions</Text>
        </View>
        <View style={styles.anotherview}>
          <Text style={styles.conditiontext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie mauris nec facilisis imperdiet. Etiam laoreet lacus elit,
            at mattis nisi gravida non.
            {'\n'}
            {'\n'}
            {'\n'}
            Duis tincidunt mauris eu mi maximus placerat. Fusce quis lorem vitae
            nunc pharetra elementum ac eget felis. Ut sit amet eleifend erat.
            {'\n'}
            {'\n'}
            {'\n'}
            Praesent nulla orci, rhoncus et posuere sit amet, hendrerit et eros.
            Vestibulum convallis diam sed erat commodo luctus. Proin
            pellentesque purus nec purus gravida, a imperdiet tortor lobortis.
            {'\n'}
            {'\n'}
            {'\n'}
            Aenean eget arcu auctor lorem viverra tincidunt. Proin interdum ante
            at tellus auctor vulputate.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  firstview: {
    flex: 0.05,
    paddingHorizontal: 20,
    padding: 20,
    paddingTop:30
  },
  faqtext: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: -28,
  },
  anotherview: {
    backgroundColor: '#F8F8F8',
    flex: 0.75,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop:20
  },
  conditiontext: {
    fontSize: 16,
    fontWeight: '400',
    color: '#909090',
    justifyContent: 'center',
  },
});
export default PrivacyPolicy;
