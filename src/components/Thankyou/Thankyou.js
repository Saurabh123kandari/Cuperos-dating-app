import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet,View ,Text,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Thankyou = (props) => {
    const image=require('../../assets/Pattern.png')
  return (
    <View style={styles.MainContainer}>
      <ImageBackground
        source={image}
        resizeMode= 'cover'
        style={{
        //width: '100%',
          height: '100%',
          
         // backgroundColor:'rgba(255, 255, 255, 0.6)',
        // opacity: 0.4,
        //backgroundColor: 'yellow',
        }}>
            
        <View style={{flex: 0.3}}></View>
        <View style={styles.inner_view}>
          <Text style={styles.inline_text}>Thank You for signing up</Text>
        </View>
        <View style={{flex: 0.18}}></View>

        <View style={styles.view_two}>
          <Text style={styles.inner_text}>
            We just have a few more questions to get to know you better
          </Text>
          <LinearGradient
            colors={['#D72D79', '#9264F2']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            <TouchableOpacity  onPress={() => {
                    // console.log(props.navigation, 'e..');
                    props.navigation.navigate('questionariesone');
                  }}>
              <Text style={styles.buttonText}>Lets’s Start</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ef7272',

    // (239,114,114)

    opacity: 1,
  },
  view_one: {
    //flex:0.7,
    //backgroundColor:'red',
  },
  view_two: {
    flex: 0.3,
    //backgroundColor:'#888',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  inner_text: {
    fontSize: 21,
    fontWeight: '400',
    textAlign: 'center',
    maxWidth: 270,
    alignSelf: 'center',
    color: '#000000',
    //display:'flex',
    //justifyContent:'center'
  },
  linearGradient: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    //fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: '600',
    // backgroundColor: 'transparent',
  },
  inner_view: {
    flex: 0.23,
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor:'#FFFFFF',
    opacity: 0.8,
    marginHorizontal: 40,
    borderRadius: 38,
  },

  inline_text: {
    color:'black',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: 200,
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default Thankyou;