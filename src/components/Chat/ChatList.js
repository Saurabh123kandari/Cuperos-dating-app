import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ChatTabView from './ChatTabView';
import {Image, ScrollView, Input} from 'native-base';

const ChatList = () => {
  const bgimage = require('../../assets/bg_pattern.png');
  const blueHeartImage = require('../../assets/blueheart.png')
  const data = [
    // {
    //   id: 1,
    //   profileimage: require('../../assets/blueheart.png'),
    //   text: 'Likes',
    // },
    {
      id: 1,
      profileimage: require('../../assets/ProfileIcon.png'),
      text: 'Rima',
    },
    {
      id: 2,
      profileimage: require('../../assets/ProfileIcon.png'),
      text: 'Anita',
    },
    {
      id: 3,
      profileimage: require('../../assets/ProfileIcon.png'),
      text: 'Anita',
    },
    {
      id: 4,
      profileimage: require('../../assets/ProfileIcon.png'),
      text: 'Anita',
    },
    {
      id: 5,
      profileimage: require('../../assets/ProfileIcon.png'),
      text: 'Anita',
    },
    {
      id: 6,
      profileimage: require('../../assets/ProfileIcon.png'),
      text: 'Anita',
    },
    {
      id: 7,
      profileimage: require('../../assets/ProfileIcon.png'),
      text: 'Anita',
    },
  ];

  const profileimage = require('../../assets/ProfileIcon.png');
  const searchimage = require('../../assets/ChatSearch.png');  
  return (
    <View style={styles.MainContainer}>
      <View style={styles.view_one}>
        <Text style={styles.text_one}>Chat</Text>
      </View>
      <View style={styles.view_two}>
        <Input
          placeholder="Search by Name"
          backgroundColor="#F8F8F8"
          py={2}
          leftElement={
            <Image
              source={searchimage}
              style={{marginHorizontal: 20}}
              size={5}
              resizeMode="contain"></Image>
               }>
             </Input>
      </View>

      <View style={styles.view_three}>
        <Text style={styles.text_two}>Matches</Text>
       
        <ScrollView horizontal>
        <View style={{marginTop: 20, padding: 10}}>
        <Image
          size={50}
          resizeMode={'contain'}
          borderRadius={100}
          source={blueHeartImage}
          alt="Alternate Text"
        />
        <Text style={{padding:5, marginLeft:3}}>Likes</Text>
      </View>
          {data.map(item => {
            return (
                <View style={{marginTop: 20, padding: 10}}>
                  <Image
                    size={50}
                    resizeMode={'contain'}
                    borderRadius={100}
                    source={item.profileimage}
                    alt="Alternate Text"
                  />
                  <Text style={{padding:5,marginLeft:3}}>{item.text}</Text>
                </View>           
            );
          })}
        </ScrollView>
      
      </View>
      <View style={styles.view_four}>
        <ChatTabView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  view_one: {
    flex: 0.1,
  },
  view_two: {
    flex: 0.1,
    paddingHorizontal: 20,
  },
  view_three: {
    flex: 0.2,
    paddingHorizontal: 20,
    display: 'flex',
  },
  view_four: {
    flex: 0.6,
    paddingHorizontal: 20,
  },
  text_one: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
  },
  text_two: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ChatList;
