import React from 'react'
import { SafeAreaView ,StyleSheet,View,Image} from 'react-native';
import {Searchbar} from 'react-native-paper';
import MatchesTabView from './MatchesTabView';
import {Input} from 'native-base'

const MatchesList = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const searchimage=require('../../assets/SearchIcon.png')
    return (
       <SafeAreaView style={styles.MainContainer}>
           <View style={styles.view_one}>

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
          }></Input>
        {/* <Searchbar
       background="#C4C4C4"
          placeholder="Search by Name"
          onChangeText={onChangeSearch}
          value={searchQuery}
        /> */}
      </View>
      <View  style={styles.view_three}>
          <MatchesTabView />

      </View>
  

       </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'#ffffff'
        
    },
    view_one:{
        flex:0.05,
      
    },
    view_two:{
        flex:0.03,
       
        paddingHorizontal:30,
      
    },
    view_three:{

flex:0.92,

    }
})

export default MatchesList
