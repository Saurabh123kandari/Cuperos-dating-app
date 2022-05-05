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
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, Text, Center, useColorModeValue, Image} from 'native-base';

const data = [
  {
    id: 1,
    name: 'Mary Burgess',
    description: '20 March, 5:18 p.m',
    profileimage: require('../../assets/Video.png'),
  },
  {
    id: 2,
    name: 'Mary Burgess',
    description: '20 March, 5:18 p.m',
    profileimage: require('../../assets/Call.png'),
  },
  {
    id: 3,
    name: 'Mary Burgess',
    description: '20 March, 5:18 p.m',
    profileimage: require('../../assets/Video.png'),
  },
  {
    id: 4,
    name: 'Mary Burgess',
    description: '20 March, 5:18 p.m',
    profileimage: require('../../assets/Call.png'),
  },
  {
    id: 5,
    name: 'Mary Burgess',
    description: '20 March, 5:18 p.m',
    profileimage: require('../../assets/Call.png'),
  },
  {
    id: 6,
    name: 'Mary Burgess',
    description: '20 March, 5:18 p.m',
    profileimage: require('../../assets/Video.png'),
  },
];

const profileimage = require('../../assets/ProfileIcon.png');

const FirstRoute = () => (
  <ScrollView style={{flex: 1}}>
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
          Hello!, how are you?
        </Text>
      </View>
      <View style={{backgroundColor:'#FF0000',width:40,height:40,borderRadius:10,marginLeft:20}}><Text style={{textAlign:'center',marginTop:10,color:'#ffffff'}}>1</Text></View>
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
          Hello!, how are you?
        </Text>
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
          Hello!, how are you?
        </Text>
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
          Hello!, how are you?
        </Text>
      </View>
      <View style={{backgroundColor:'#FF0000',width:40,height:40,borderRadius:10,marginLeft:20}}><Text style={{textAlign:'center',marginTop:10,color:'#ffffff'}}>3</Text></View>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
      <Image
        size={5}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#787878'}}>
          Hello!, how are you?
        </Text>
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
          Hello!, how are you?
        </Text>
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
          Hello!, how are you?
        </Text>
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
          Hello!, how are you?
        </Text>
      </View>
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={{flex:1,paddingHorizontal:20}}>
    {data.map(item=>{
      return(
        <>
         <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 10,
        marginTop: 20,
      }}>
        <View style={{display:'flex',flexDirection:'row'}}>
        <Image
        size={50}
        style={{marginTop:-5}}
        resizeMode={'contain'}
        borderRadius={100}
        source={profileimage}
        alt="Alternate Text"
      />

      <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        <Text style={{fontWeight: '500', fontSize: 18}}>Mary Burgess</Text>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#1A0566'}}>
          {item.description}
        </Text>
      </View>
        </View>
     
     <Image
     style={{marginTop:-5}}
        size={7}
        resizeMode="contain"
        // borderRadius={100}
        source={item.profileimage}
        alt="Alternate Text"
      />
    </View>
        </>

      )


    })}
  

  
  </ScrollView>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function ChatTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Messages',
    },
    {
      key: 'second',
      title: 'Call',
    },
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
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
              ? useColorModeValue('600', '600')
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

export default ChatTabView;
