import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet } from 'react-native'


function DeckList({title,questions,listviewContent}){
    
    return (
        <TouchableOpacity>
           <View style={listviewContent}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.total}> {questions.length} Cards</Text>
           </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    title : {
        padding:10,
        fontSize:30,
        color:'black'
    },
    total : {
        color:'black',
        opacity: 0.5,
        fontSize: 18
    }
})
export default DeckList;