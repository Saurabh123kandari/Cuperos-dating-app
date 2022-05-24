import React from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';
import {ARROW_ICON, ARROW_RIGHT} from '../../constant/App_Constant';
import {ChevronLeftIcon, Progress} from 'native-base';
import LikedBy from '../LikedBy/LikedBy';
import NewMatches from '../NewMatches/NewMatches';
import LinearGradient from 'react-native-linear-gradient';
const HEADER_HEIGHT = 250;

const image = require('../../assets/Man.png');
const imageone = require('../../assets/Manone.png');
const imagetwo = require('../../assets/Mantwo.png');
const imagethree = require('../../assets/Manthree.png');
const blankimage = require('../../assets/Blank.png');
const EditProfileIcon = require('../../assets/EditIcon.png');
const imagefive = require('../../assets/image5.png');
const imageeight = require('../../assets/image8.png');
const imagesix = require('../../assets/image6.png');
const imageseven = require('../../assets/image7.png');
const crossimage = require('../../assets/cross.png');
const plusimage = require('../../assets/plus.png');

const galleryData = [
  {
    id: 1,
    profileimage: image,
    cross: crossimage,
  },
  {
    id: 2,
    profileimage: imageone,
    cross: crossimage,
  },
  {
    id: 3,
    profileimage: imagetwo,
    cross: crossimage,
  },
  {
    id: 4,
    profileimage: imagethree,
    cross: crossimage,
  },
  {
    id: 5,
    profileimage: blankimage,
    cross: plusimage,
  },
  {
    id: 6,
    profileimage: blankimage,
    cross: plusimage,
  },
];
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

const likedByData = [
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

const header = (e, props) => {
  const backimg = require('../../assets/BackgroundIcon.png');
  const profilelogo = require('../../assets/ProfileIcon.png');
  const settinglogo = require('../../assets/cog.png');
  const rewardlogo = require('../../assets/gift.png');
  const supportlogo = require('../../assets/support.png');
  return (
    <View style={styles.view_one}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{padding: 5, zIndex: 100}}>
        <ChevronLeftIcon
          iconName="chevron-left"
          size="5"
          mx={3}
          marginTop={5}
        />
      </TouchableOpacity>
      <Text style={styles.faqtext}>My Profile</Text>
      {/* <View style={{backgroundColor:'orange',marginTop:20,paddingVertical:20}}> */}
      <Image
        source={profilelogo}
        style={{borderRadius: 100, alignSelf: 'center', top: 20}}></Image>
      <View>
        <Image
          source={backimg}
          style={{alignSelf: 'center', opacity: 0.3, bottom: 50}}></Image>
        <View style={{marginLeft: 280}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              bottom: 210,
              position: 'absolute',
            }}
            onPress={() => {
              props.navigation.navigate('editprofile');
            }}>
            <View>
              <Image source={EditProfileIcon}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', alignSelf: 'center', bottom: 80}}>
          <Text style={{fontSize: 24, fontWeight: '600', color: '#FFFFFF'}}>
            Aarianna Barnes
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Profile Visits 65%
          </Text>
        </View>
      </View>
      <View style={styles.view_three}>
        <View>
          {/* {alert(JSON.stringify(props))} */}
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('rewards');
            }}>
            <Image source={rewardlogo}></Image>
          </TouchableOpacity>
          <Text style={styles.innertext}>Invite Friends</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('contactus');
            }}>
            <Image source={supportlogo}></Image>
          </TouchableOpacity>
          <Text style={styles.innertext}>Contact Us</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('settings');
            }}>
            <Image source={settinglogo}></Image>
          </TouchableOpacity>
          <Text style={styles.innertext}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const MyProfileDemo = props => {
  console.log(props);
  return (
    <Tabs.Container
      containerStyle={{width: '100%', height: '100%'}}
      renderHeader={e => header(e, props)}
      initialTabName="Gallery"
      tabBarHeight={10}
      pressColor="#DDDDDD"
      //   headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab pressColor="#DDDDDD" label="About" name="About">
        <Tabs.ScrollView>
          <View style={styles.boxA}>
            <Text style={{color: '#686868', fontSize: 17}}>
              Hello! I am Aarianna and I am a product designer at one of the
              biggest non-profits in the USA. I am a passionate person,
              customer-obsessed, and enjoy always helping people design new
              products/ experiences for their customers!
            </Text>
          </View>
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Gallery" label="Gallery">
        <Tabs.ScrollView>
          <View style={styles.boxB}>
            {galleryData.map(item => {
              return (
                <View style={styles.gallercard}>
                  <Image
                    source={item.profileimage}
                    style={styles.image}></Image>
                  <Image
                    source={item.cross}
                    style={[
                      styles.image,
                      {position: 'absolute', bottom: 10, right: 10},
                    ]}></Image>
                </View>
              );
            })}
            <LinearGradient
              colors={['#D72D79', '#9264F2']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}>
              <TouchableOpacity>
                <Text style={styles.buttonText}>Add Media</Text>
              </TouchableOpacity>
              {/* </TouchableOpacity> */}
            </LinearGradient>
          </View>
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Liked By" label="Liked By">
        <Tabs.ScrollView>
          <View>
            <LikedBy />
          </View>
          {/* <View style={[styles.box, styles.boxB]} /> */}
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="New Matches" label="New Matches">
        <Tabs.ScrollView>
          <View>
            <NewMatches />
          </View>
          {/* <View style={[styles.box, styles.boxB]} /> */}
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};
export default MyProfileDemo;

const styles = StyleSheet.create({
  box: {
    height: 200,
    // width: '100%',
    backgroundColor: '#ffffff',
  },
  boxA: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    paddingTop: 30,
  },
  // css for gallary view
  boxB: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // flex: 1,
  },
  gallercard: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    borderRadius: 10,
  },
  linearGradient: {
    width: '90%',
    marginVertical: 20,
    paddingVertical: 4,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },

  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
  view_one: {
    // flex: 0.7,
    backgroundColor: '#ef7272',
  },
  firstview: {
    display: 'flex',
    //flexDirection:'row',
    //justifyContent:'space-between',
    // padding: 10,
    //backgroundColor: 'pink',
    marginTop: 5,
  },
  view_three: {
    display: 'flex',
    flexDirection: 'row',
    //alignSelf:'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // marginVertical:20,
    marginBottom: 20,
    marginTop: -15,
  },
  faqtext: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -25,
  },
  innertext: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
