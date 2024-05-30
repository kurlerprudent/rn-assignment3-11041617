import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const SecondSection = () => {
  return (
    <View style={styles.secondContainer} >
        <AntDesign name="search1" size={24} color="black" />
        <TextInput style={styles.searchBox} placeholder='Search' placeholderTextColor='black' />
      
      <View style={styles.slider}>
      <Feather name="sliders" height={40} size={34} color="white" style={{transform:[{rotate:'90deg'}],}} />
      </View>
    </View>
  )
}

export default SecondSection

const styles = StyleSheet.create({
    secondContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        marginHorizontal:20,
        height:'auto'
    },
    searchBox:{
        width:'75%',
        backgroundColor:'white',
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        padding:12,
        fontSize:20,
        fontWeight:'700'
        
        
    },
    slider:{
        borderRadius:15,
        backgroundColor: '#F0522F',
        paddingVertical:5,
        paddingHorizontal:8
        
    }
})