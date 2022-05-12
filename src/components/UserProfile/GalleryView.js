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
  Image
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, Text, Center, useColorModeValue} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
const image=require('../../assets/Man.png');
const imageone=require('../../assets/Manone.png');
const imagetwo=require('../../assets/Mantwo.png');
const imagethree=require('../../assets/Manthree.png');
const blankimage=require('../../assets/Blank.png');
// const crossimage=require('../../assets/cross.png');
// const plusimage=require('../../assets/plus.png');
// const image = require('../../assets/Man.png');
// const imageone = require('../../assets/Manone.png');
// const imagetwo = require('../../assets/Mantwo.png');
// const imagethree = require('../../assets/Manthree.png');
// const blankimage = require('../../assets/Blank.png');
const imagefive = require('../../assets/image5.png');
const imageeight = require('../../assets/image8.png');
const imagesix = require('../../assets/image6.png');
const imageseven = require('../../assets/image7.png');
const crossimage = require('../../assets/cross.png');
const plusimage = require('../../assets/plus.png');

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

const galleryData=[{
  id:1,
  profileimage: image,
  cross:crossimage

},
{
  id:2,
  profileimage: imageone,
  cross:crossimage

},
{
  id:3,
  profileimage: imagetwo,
  cross:crossimage

},
{
  id:4,
  profileimage: imagethree,
  cross:crossimage

},
{
  id:5,
  profileimage: blankimage,
  cross:plusimage

},
{
  id:6,
  profileimage:blankimage,
  cross:plusimage

}]

const FirstRoute = () => (
  <View style={styles.firstview}>
    <Text style={styles.first_text}>Hello! I am Aarianna and I am a product designer at one of the biggest non-profits in the USA. I am a passionate person, customer-obsessed, and enjoy always helping people design new products/
experiences for their customers!</Text>
  </View>
);

const SecondRoute = () => (
  <ScrollView flex={1} my="4" >
      <View style={styles.view}>
        {galleryData.map((item)=>{
          return(
            <View style={styles.gallercard}>
            <Image source={item.profileimage} style={styles.image}></Image>
            <Image source={item.cross} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>
    
            </View>
          )
        })}
       
        {/* <View>
        <Image source={imageone} style={styles.image}></Image>
        <Image source={crossimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
        <View>
        <Image source={imagetwo} style={styles.image}></Image>
        <Image source={crossimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
        <View>
        <Image source={imagethree} style={styles.image}></Image>
        <Image source={crossimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
      
        <View>
        <Image source={blankimage} style={styles.image}></Image>
        <Image source={plusimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
        <View>
        <Image source={blankimage} style={styles.image}></Image>
        <Image source={plusimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View> */}
     
        <LinearGradient

                    colors={['#D72D79', '#9264F2']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.linearGradient}>
                    {/* <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('signuptwo');
                      }}> */}
                    <TouchableOpacity >
                      <Text style={styles.buttonText}>Add Media</Text>
                    </TouchableOpacity>
                    {/* </TouchableOpacity> */}
                  </LinearGradient>
      </View>
      
   
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView style={{flex:1,}} >  
  <View style={styles.header}>
    <Text style={styles.main_header}>Liked By</Text>
    <Text style={styles.sub_header}>Today</Text>
  </View>
  <View style={styles.view}>
            {likedByData.map(item => {
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
 {/* <View style={styles.view}>
    <View style={styles.maincard}>
      <Image source={image} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <View
                          style={[
                            styles.online_view,
                            {backgroundColor:'#00FD19' },
                          ]}></View>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
    <View style={styles.maincard}>
      <Image source={imageone} style={styles.image}></Image>
      <View
        style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
    
    <View style={styles.maincard}>
      <Image source={imagetwo} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
   
    <View style={styles.maincard}>
      <Image source={imagethree} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
   
    <View style={styles.maincard}>
      <Image source={imagefive} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
  
    <View style={styles.maincard}>
      <Image source={imagesix} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
   
    <View style={styles.maincard}>
      <Image source={imageseven} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
    
    <View style={styles.maincard}>
      <Image source={imageeight} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
  </View>  */}
</ScrollView>
);

const FourthRoute = () => (
  <ScrollView style={{flex:1}}>  
        <View style={styles.header}>
    <Text style={styles.main_header}>New Matches</Text>
    <Text style={styles.sub_header}>Today</Text>
  </View>
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
      </ScrollView>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

function GalleryView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'About',
    },
    {
      key: 'second',
      title: 'Gallery',
    },
    {
      key: 'third',
      title: 'Liked By',
    },
    {
      key: 'fourth',
      title: 'New Matches',
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
              ? ('#000', '#F14E53')
              : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor =
            index === i
              ? 'cyan.500'
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              //borderBottomWidth="3"
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
                    color,
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
        // marginTop: StatusBar.currentHeight
        paddingTop: 10,
      }}
    />
  );
}

const styles=StyleSheet.create({
    view:{
display:'flex',
flexDirection:'row',
flexWrap:'wrap',
justifyContent: 'center',

flex:0.8

    },
    image:{
    margin:10 ,
    borderRadius:10
  
    },
    linearGradient: {
         width: '90%',
        marginVertical: 20,
       
        paddingVertical: 4,
        borderRadius: 5,
         marginHorizontal:10
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
       
      },
      header: {
        flex: 0.2,
       
        paddingVertical:10,
       
        
        
      },
      main_header: {
        fontSize: 22,
        fontWeight: '500',
        textAlign:'center'
   
       
      },
      sub_header: {
        marginTop:10,
        fontSize: 18,
        fontWeight: '400',
      
        color: '#A4A4A4',
        textAlign:'center'
   
      },
      view: {
        flex: 0.7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      maincard:{
        // elevation: 5,
        alignItems: 'center', 
        shadowColor: '#FF0000',
    shadowOffset: {width: -10, height: 20},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
      },
      image: {
        zIndex: 99,
        margin: 10,
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
        shadowColor: '#000000',
    shadowOffset: {width: -10, height: 20},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
      },
      percentbox:{
        marginTop:-20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF0000',
        paddingHorizontal: 10,
        margin:15,
        left:15
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
      first_text:{
        color:'#686868'
      },
      firstview:{
        paddingHorizontal:30 
      },
      online_view: {
        backgroundColor: '#00FD19',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 6,
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
      gallercard:{
        marginHorizontal:10,
        marginVertical:10
      }
})
export default GalleryView;
