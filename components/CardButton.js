import React from 'react'
import {TouchableOpacity, Text,StyleSheet } from 'react-native'

export default function CardButton({onPress,children, btnStyle={}, textStyle={}}){
return (
    <TouchableOpacity onPress={onPress} style={[styles.button,btnStyle]}>
        <Text style={[styles.btnText, textStyle]}>
           {children}
        </Text>
   </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    button: {
        width:'50%',
        heigth:'50%',
        borderColor:'black',
        borderRadius:10,
        borderWidth:4,
        marginBottom:10
    },
    btnText : {
        fontSize:28,
        padding:10,
        textAlign:'center'
    }
})