import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,} from 'react-native';
import {ChevronLeftIcon,Progress, ScrollView} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const Questionairesix = (props) => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.icon_view_one}>
          <ChevronLeftIcon iconName="chevron-left" size="7" mx={3} />
          <Progress
            mx="10"
            mt="6"
            mb="6"
            colorScheme="red"
            value={35}
            height="1.5"
            background="#D0D0D0"
          />
          <Text style={styles.innertext}>
            What type of music do you like? (Select all that applies)
          </Text>
        </View>
        <View style={styles.view_two}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Opera</Text>
            </View>
            <View
              style={[
                styles.inner_view_two,
                {backgroundColor: '#FF0000', borderColor: '#FFFFFF'},
              ]}>
              <Text style={[styles.text_two, {color: '#FFFFFF'}]}>
                Afrobeats
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Musicals</Text>
            </View>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Orchestra</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Chamber Music</Text>
            </View>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Folk</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Spiritual</Text>
            </View>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Gospel</Text>
            </View>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Jazz</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={[
                styles.inner_view_two,
                {backgroundColor: '#FF0000', borderColor: '#FFFFFF'},
              ]}>
              <Text style={[styles.text_two, {color: '#FFFFFF'}]}>Rock</Text>
            </View>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Hard rock</Text>
            </View>
            <View
              style={[
                styles.inner_view_two,
                {backgroundColor: '#FF0000', borderColor: '#FFFFFF'},
              ]}>
              <Text style={[styles.text_two, {color: '#FFFFFF'}]}>Rap</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Dance</Text>
            </View>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Blues</Text>
            </View>
            <View style={styles.inner_view_two}>
              <Text style={styles.text_two}>Hip-Hop</Text>
            </View>
          </View>
          <LinearGradient
            colors={['#D72D79', '#9264F2']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                // console.log(props.navigation, 'e..');
                props.navigation.navigate('questionariesseven');
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
    MainContainer:{
    flex:1,
    backgroundColor:'#FFFFFF'
    },
    icon_view_one: {
        marginTop:10,
        flex: 0.2,
        //backgroundColor:'red'
      },
      innertext: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        maxWidth:300,
        alignSelf:'center'
        
      },
      view_two: {
        flex: 0.8,
        paddingHorizontal:20,
        marginTop:20
       //backgroundColor: 'red',
      },
      inner_view_two: {
        backgroundColor: '#A4A4A4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 21,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        alignItems: 'center',
        marginVertical:10,
        paddingHorizontal:25,
      },
      text_two: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize:16
      },
      linearGradient: {
        width: '100%',
        marginTop: 20,
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
        fontWeight:'600'
        // backgroundColor: 'transparent',
      },


})

export default Questionairesix;