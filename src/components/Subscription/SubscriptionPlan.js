import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'native-base';
import {style} from 'dom-helpers';
import {ChevronLeftIcon} from 'native-base';
import Collapsible from 'react-native-collapsible';

const SubscriptionPlan = (props) => {
  const [isBasicDetails, setIsBasicDetails] = useState(true);
  const [isStandardDetails, setIsStandardDetails] = useState(true);
  const [isPremiumDetails, setIsPremiumDetails] = useState(true);
  const subsimage = require('../../assets/Rectangle142.png');
  const innerimage = require('../../assets/Maskgroup.png');
  const arrowicon = require('../../assets/Vector7.png');
  const downarrow = require('../../assets/Vector6.png');
  const downArrowWhite = require('../../assets/Vector8.png');
  const data = [
    {
      id: 0,
      title: 'Standard Plan',
      text: 'Most Populer',
      heading: 'Ability to create profile and upload only 2 profile photos',
    },
    {
      id: 1,
      title: 'Standard Plan',
      text: 'Most Populer',
      heading: 'Ability to create profile and upload only 2 profile photos',
    },
  ];
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={{flex: 0.1, marginVertical: 20, paddingHorizontal: 20}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <ChevronLeftIcon iconName="chevron-left" size="5" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewone}>
          <ImageBackground
            style={{width: '100%', resizeMode: 'contain'}}
            source={subsimage}>
            <View style={{marginTop: 20}}>
              <Text style={styles.innertext}>Membership Plans</Text>
              <Text style={styles.innertexttwo}>
                Explore Love, one swipe at a time 1111
              </Text>
            </View>
            <Image
              style={{
                width: '100%',
                //height:'100%',
                resizeMode: 'contain',
                //position: 'absolute',
                bottom: -6,
              }}
              source={innerimage}></Image>
          </ImageBackground>
        </View>

        <View style={styles.viewtwo}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('tabview')}}>
          <View style={styles.inner_view_one}>
            <Text style={styles.textone}>Free Basic Plan</Text>
            <Text style={styles.texttwo}>
              Ability to create profile and upload only 2 profile photos
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#000000'}}>
                $ 0
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 70,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setIsBasicDetails(!isBasicDetails);
                  }}>
                <View style={{ flexDirection: 'row',}}>
                  <Text
                    style={{color: '#F14E53', fontSize: 14, fontWeight: '400'}}>
                    Details
                  </Text>
                  <Image style={{margin: 7}} source={downarrow}></Image>
                </View>
                </TouchableOpacity>
              </View>
            </View>
            <Collapsible collapsed={isBasicDetails}>
              <Text>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur a mi elementum, fermentum dolor quis, rutrum nisi. Sed
                posuere neque in mauris molestie.
              </Text>
            </Collapsible>
          </View>
          </TouchableOpacity>
          <View style={styles.inner_view_two}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.textthree}>Standard Plan</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: ' rgba(255, 255, 255, 0.3)',
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 13,
                }}>
                <Text style={styles.populartext}>Most Populer</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text_two}>
              Ability to create profile and upload only 2 profile photos
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#FFFFFF'}}>
                $ 15
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 70,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setIsStandardDetails(!isStandardDetails);
                  }}>
                <View style={{ flexDirection: 'row',}}>
                  <Text
                    style={{color: '#FFFFFF', fontSize: 14, fontWeight: '400'}}>
                    Details
                  </Text>
                  <Image style={{margin: 7}} source={downArrowWhite}></Image>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Collapsible collapsed={isStandardDetails}>
              <Text style={{color:'#ffff'}}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur a mi elementum, fermentum dolor quis, rutrum nisi. Sed
                posuere neque in mauris molestie.
              </Text>
            </Collapsible>
            <Button background="#FFFFFF" my={7} p={3} borderRadius={10}>
              <Text style={{color: '#F14E53', fontSize: 18, fontWeight: '600'}}>
                Choose Plan
              </Text>
            </Button>
          </View>
          <View style={styles.inner_view_three}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.textthree, {color: '#000000'}]}>
                Premium Plan
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F14E534D',
                  padding: 5,
                  paddingHorizontal: 20,
                  borderRadius: 13,
                }}>
                <Text
                  style={[
                    styles.populartext,
                    {color: '#F14E53', textAlign: 'center'},
                  ]}>
                  Best Value
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.text_two, {color: '#A4A4A4'}]}>
              Ability to create profile and upload only 2 profile photos
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#000000'}}>
                $ 15
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 70,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setIsPremiumDetails(!isPremiumDetails);
                  }}>
                 <View style={{ flexDirection: 'row',}}>
                  <Text
                    style={{color: '#F14E53', fontSize: 14, fontWeight: '400'}}>
                    Details
                  </Text>
                  <Image style={{margin: 7}} source={downarrow}></Image>
                </View>
                </TouchableOpacity>
              </View>
            </View>
            <Collapsible collapsed={isPremiumDetails}>
              <Text>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur a mi elementum, fermentum dolor quis, rutrum nisi. Sed
                posuere neque in mauris molestie.
              </Text>
            </Collapsible>
            <Button background="#F14E53" my={7} p={3}>
              <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
                Choose Plan
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  viewone: {
    flex: 0.3,
    //backgroundColor:'green'
  },

  inner_view_one: {
    marginHorizontal: 30,
    margin: 20,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  inner_view_two: {
    backgroundColor: '#F14E53',
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingTop: 25,
    marginHorizontal: 30,
  },
  inner_view_three: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingTop: 25,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  innertext: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 20,
  },
  innertexttwo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    maxWidth: 180,
    textAlign: 'center',
    alignSelf: 'center',
  },
  textone: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  texttwo: {
    color: '#A4A4A4',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 16,
  },
  text_two: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 16,
  },
  viewtwo: {
    flex: 0.6,
    //backgroundColor: 'green',
  },
  textthree: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  populartext: {
    fontSize: 10,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default SubscriptionPlan;
