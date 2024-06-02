import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const data = [
    { name: 'Mobile App Development', key: '1' },
    { text: 'Web Development', key: '2' },
    { text: 'Push Ups', key: '3' },
  ];
  
  
  const FourthSection = () => {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.flatListBox}>
            <Text style={styles.textEdit} key={item.key}>{item.text || item.name}</Text>
          </View>
          
        )}
      />
    );
  };
export default FourthSection

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        
    },
    flatListBox:{
        marginVertical:20,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'#E8D1BA',
        borderRadius:15,
        width:'90%',
        height:128,
        justifyContent:'center',
        backgroundColor:'white'
        
    },
    textEdit:{
        fontSize:20,
        fontWeight:'600',
        marginLeft:20
    }
    
})