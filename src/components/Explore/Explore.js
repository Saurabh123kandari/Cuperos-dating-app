import * as React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import {ScrollView} from 'native-base';

import { Text,} from 'native-base';

const bgpattern = require('../../assets/bg_pattern.png');
const image = require('../../assets/Man.png');
const imagetwo = require('../../assets/Mantwo.png');
const imagefive = require('../../assets/image5.png');
const imageeight = require('../../assets/image8.png');
const imagesix = require('../../assets/image6.png');
const imageseven = require('../../assets/image7.png');

const searchimage = require('../../assets/Search.png');
const filterimage = require('../../assets/filter.png');

const Explore = () => {
  const data = [
    {
      id: 1,
      profileimage: image,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#00FD19',
    },
    {
      id: 2,
      profileimage: imagefive,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#C4C4C4',
    },
    {
      id: 3,
      profileimage: imageseven,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#C4C4C4',
    },
    {
      id: 4,
      profileimage: imagesix,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#00FD19',
    },
    {
      id: 5,
      profileimage: imagetwo,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#00FD19',
    },

    {
      id: 6,
      profileimage: imageeight,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#C4C4C4',
    },
    {
      id: 7,
      profileimage: image,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#00FD19',
    },
    {
      id: 8,
      profileimage: imagefive,
      textone: 'Lucasz Pl',
      texttwo: 'Male, 28',
      textthree: 'New York',
      iconcolor: '#C4C4C4',
    },
  ];

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={searchimage}
            size={7}
            style={{marginTop: 20}}
            resizeMode="contain"></Image>
          <Text style={styles.main_header}>Explore</Text>
          <Image
            source={filterimage}
            style={{marginTop: 20}}
            size={10}
            resizeMode="contain"></Image>
        </View>
        <ImageBackground source={bgpattern} resizeMode="contain" style={{}}>
          <View style={styles.view}>
            {data.map(item => {
              return (
                <>
                  <View style={styles.main_card}>
                    <Image
                      source={item.profileimage}
                      resizeMode="contain"
                      style={styles.image}
                    />
                    <View style={styles.main_inner_view}>
                      <View style={styles.innerview}>
                        <Text style={styles.card_heading}>{item.textone} </Text>
                        <View
                          style={[
                            styles.online_view,
                            {backgroundColor: item.iconcolor},
                          ]}></View>
                        <View style={styles.percent}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#FF0000',
                              fontSize: 11,
                              fontWeight: '600',
                            }}>
                            75%
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.card_subheading}>{item.texttwo}</Text>
                      <Text style={styles.card_subheading}>
                        {item.textthree}
                      </Text>
                    </View>
                  </View>
                </>
              );
            })}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
  },
  main_header: {
    fontSize: 22,
    fontWeight: '500',

    marginTop: 25,
    color: '#FF0000',
  },

  view: {
    flex: 0.9,
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  image: {
    borderRadius: 20,
  },

  card_heading: {
    fontSize: 14,
    fontWeight: '500',
  },
  card_subheading: {
    fontSize: 12,
    fontWeight: '400',
  },

  online_view: {
    backgroundColor: '#00FD19',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 6,
  },

  mainview: {
    display: 'flex',
    flexDirection: 'row',
  },

  main_card: {
    position: 'relative',
    marginHorizontal: 10,
    marginVertical: 20,
    shadowColor: '#000000',
    shadowOffset: {width: -10, height: 20},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 16,
  },
  main_inner_view: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: -20,
    padding: 10,
    borderRadius: 11,
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: {width: -10, height: 20},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
  },
  innerview: {
    display: 'flex',
    flexDirection: 'row',
  },
  percent: {
    borderWidth: 1,
    borderColor: '#FF0000',
    width: 40,
    borderRadius: 12,
    marginLeft: 15,
  },
});
export default Explore;
