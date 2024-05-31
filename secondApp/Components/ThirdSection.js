import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const ThirdSection = (props) => {


  return (
    <View style={styles.thirdCointainer}>
      <Text style={{fontSize:20, fontWeight:'700', lineHeight:24}}>Categories</Text>
      <View>
        <View style={styles.sectionBox}>
            <Text style={{fontSize:16, fontWeight:'700', lineHeight:19}}>{props.task}</Text>
            <Text style={{fontSize:14, fontWeight:'400', lineHeight:14}} >12 tasks</Text>
            <Image source={require('../assets/young woman working online.png')}/>
        </View>
        <View></View>
      </View>
    </View>
  )
}

export default ThirdSection

const styles = StyleSheet.create({
    thirdCointainer:{
        marginTop:30,
        marginHorizontal:20
    },
    sectionBox:{
        marginTop:10,
        width:186,
        height:192,
        borderWidth:1,
        borderColor:'blue',
        padding:15,
        backgroundColor:'white'
    }
})