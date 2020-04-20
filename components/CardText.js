import React from 'react'
import { TextInput,StyleSheet } from 'react-native'

export default function CardText({value, onChangeText,onFocus,isFocused,onBlur}) {
    return (
        <TextInput
            style={[styles.textInput,
            {backgroundColor : isFocused ? 'white' : 'rgba(0,0,0)'}]}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}/>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width:'80%',
        height:60,
        borderWidth:2,
        borderColor:'black',
        fontSize:28,
        borderRadius:6,
        margin:10,
        padding:3,
    }
})