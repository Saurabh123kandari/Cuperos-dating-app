import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {ARROW_ICON, ARROW_RIGHT} from '../../constant/App_Constant';

const ContactUs = () => {
  const data = [
    {
      id: 1,
      title: 'Terms & Conditions',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 2,
      title: 'How it works',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 3,
      title: 'How to block a person',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 4,
      title: 'How to report a person',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 5,
      title: 'How to deactivate my account',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 6,
      title: 'How to cancel a subscription',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 7,
      title: 'Want to stop auto renewal',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 8,
      title: 'Payment related query',
      ArrowRight: ARROW_RIGHT,
    },
    {
      id: 9,
      title: 'Other',
      ArrowRight: ARROW_RIGHT,
    },
  ];
  return (
    <SafeAreaView style={styles.Main_Container}>
      <ScrollView>
        <View style={{flex: 0.06}}></View>

        <View style={styles.firstview}>
          <Image source={ARROW_ICON} style={{}} alt="Alternate Text"></Image>
          <Text style={styles.faqtext}>FAQ</Text>
        </View>
        <View style={styles.Inner_View}>
          {data.map(item => {
            return (
              <View style={styles.view_two}>
                <Text style={styles.inner_text}>{item.title}</Text>
                <Image
                  source={item.ArrowRight}
                  
                  alt="Alternate Text"></Image>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  firstview: {
    flex: 0.06,
    display: 'flex',
    //flexDirection:'row',
    //justifyContent:'space-between',
    paddingHorizontal: 20,
    //backgroundColor: 'yellow',
  },
  faqtext: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: -20,
  },
  Inner_View: {
    flex: 0.7,
    //backgroundColor:'pink',
    paddingHorizontal: 20,
  },
  view_two: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A4A4A4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inner_text: {
    fontSize: 18,
    fontWeight: '400',
    color: '#383838',
  },
});
export default ContactUs;
