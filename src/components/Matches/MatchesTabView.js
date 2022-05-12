import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, Text, Center, useColorModeValue, Image} from 'native-base';

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

const profileimage = require('../../assets/ProfileIcon.png');
const newimage = require('../../assets/NewImage.png');
const image = require('../../assets/Man.png');
const imageone = require('../../assets/Manone.png');
const imagetwo = require('../../assets/Mantwo.png');
const imagethree = require('../../assets/Manthree.png');
const blankimage = require('../../assets/Blank.png');
const imagefive = require('../../assets/image5.png');
const imageeight = require('../../assets/image8.png');
const imagesix = require('../../assets/image6.png');
const imageseven = require('../../assets/image7.png');
const close = require('../../assets/CloseNew.png');
const like = require('../../assets/Likes.png');



const FirstRoute = () => (
  <ScrollView style={{}}>
     <View style={styles.matchesview}>
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

    
  </ScrollView>
);

const SecondRoute = () => (
<ScrollView style={{flex: 1,paddingLeft:10}}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 20,
      }}>
          
      <Image
        size={50}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#1A0566'}}>
        5 hrs ago
        </Text>
      </View>
<View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'50%',}}>
<Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={like}
        alt="Alternate Text"
      />
       <Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={close}
        alt="Alternate Text"
        style={{marginHorizontal:20}}
      />
</View>
     
      
    </View>
    <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
      <Image
        size={50}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#787878'}}>
        5 hrs ago
        </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'50%',}}>
<Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={like}
        alt="Alternate Text"
      />
       <Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={close}
        alt="Alternate Text"
        style={{marginHorizontal:20}}
      />
</View>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
      <Image
        size={50}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#787878'}}>
        5 hrs ago
        </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'50%',}}>
<Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={like}
        alt="Alternate Text"
      />
       <Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={close}
        alt="Alternate Text"
        style={{marginHorizontal:20}}
      />
</View>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
      <Image
        size={50}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#787878'}}>
        5 hrs ago
        </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'50%',}}>
<Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={like}
        alt="Alternate Text"
      />
       <Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={close}
        alt="Alternate Text"
        style={{marginHorizontal:20}}
      />
</View>
      <View style={{backgroundColor:'#FF0000',width:40,height:40,borderRadius:10,marginLeft:20}}><Text style={{textAlign:'center',marginTop:10,color:'#ffffff'}}>3</Text></View>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
      <Image
        size={50}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#787878'}}>
        5 hrs ago
        </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'50%',}}>
<Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={like}
        alt="Alternate Text"
      />
       <Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={close}
        alt="Alternate Text"
        style={{marginHorizontal:20}}
      />
</View>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
      <Image
        size={50}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#787878'}}>
        5 hrs ago
        </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'50%',}}>
<Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={like}
        alt="Alternate Text"
      />
       <Image
        size={50}
        resizeMode={'contain'}
        // borderRadius={100}
        source={close}
        alt="Alternate Text"
        style={{marginHorizontal:20}}
      />
</View>
      
    </View>
  </ScrollView>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function MatchesTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Matches(24)',
    },
    {
      key: 'second',
      title: 'Requests(6)',
    },
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" mx={3}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color =
            index === i
              ? useColorModeValue('#000000', '#e5e5e5')
              : useColorModeValue('#8181817', '#a1a1aa');
              const fontWeight =
            index === i
              ? useColorModeValue('700', '700')
              : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor =
            index === i ? '#FF0000' : useColorModeValue('#ffffff');
          return (
            <Box
              borderBottomWidth="4"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text
                  style={{
                    color,fontWeight
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
}

const styles=StyleSheet.create({
   viewone:{
backgroundColor:'#FFFFFF',
borderRadius:11,position:'absolute',
bottom:0,
padding:10
   } ,
   view: {
    flex: 0.7,
    display: 'flex',
    flexDirection: 'row',
  //  justifyContent: 'center',
   flexWrap: 'wrap',
  },
  maincard:{
    elevation: 5,
    // alignItems: 'center', 
  },
  image: {
    zIndex: 99,
    // margin: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  card:{
    zIndex: 100,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    borderRadius: 11,
    alignItems:'center',
    padding:10,
    marginTop: -50,
    marginBottom: 10,
  },
  percentbox:{
    marginTop:-20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF0000',
    paddingHorizontal: 10,
    margin:15,
    // left:15
  },
  card_heading:{
    fontSize: 14,
    fontWeight: '500',
   
    // margin: 20,
  },
  card_subheading:{
    fontSize: 12,
    fontWeight: '400',
   
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
  matchesview:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
    flexWrap: 'wrap',
  }
})
export default  MatchesTabView;
