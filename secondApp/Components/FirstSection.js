import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const FirstSection = () => {
  return (
    <View  style={styles.container1} >
      <View>
        <Text style={styles.FirstSectionTextOne} >Hello , Devs</Text>
        <Text style={styles.FirstSectionTextTwo} >14 tasks today</Text>
      </View>
      <View style={styles.imageCircle} >
        <Image source={require('../assets/person.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:52,
        marginTop:52,
        marginLeft:20,
        marginRight:20

    },
    FirstSectionTextOne:{
        fontSize:32,
        fontWeight:'700',
        lineHeight:38
    },
    FirstSectionTextTwo:{
        fontSize:12,
        fontWeight:'500',
        lineHeight:14
    },
    imageCircle:{
        borderRadius:50,
        backgroundColor:'white'
    }
})

export default FirstSection