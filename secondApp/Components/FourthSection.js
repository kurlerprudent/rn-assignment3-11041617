import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const FourthSection = () => {

    const [things, setThings] = useState([
        {name:'Mobile App Devolopment', key:'1'},
        {text:'Web Devolopment', key:'2'},
        {text:'Push Ups', key:'3'}
    ])

  return (
    <View style={styles.container}>
      <FlatList
        data={things}
        renderItem={(item)=>(
            <View style={styles.flatListBox}>
                <Text>{item.name}</Text>
            </View>
            
        )}
      
      />

    </View>
  )
}

export default FourthSection

const styles = StyleSheet.create({
    container:{
        marginTop:40
    },
    flatListBox:{
        marginVertical:20,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'#E8D1BA',
        borderRadius:15,
        width:354,
        height:128
    },
    
})