import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';
  import {
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    Progress,
    ChevronLeftIcon,
    ScrollView,
    
  } from 'native-base';

const Questionaire1 = () => {
  return (
      <SafeAreaView style={styles.MainContainer}>
          <View style={styles.icon_view_one}>
          <Progress
              mx="10"
              mt="4"
              mb="4"
              colorScheme="red"
              value={15}
              height="1.5"
              background="#D0D0D0"
            /> 
            <Text>Why do you want to be 
in a relationship?</Text> 
          </View>

      </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'yellow'
    },
    icon_view_one: {
        flex: 0.1,
      },
});
export default Questionaire1