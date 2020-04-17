import React from 'react'
import {TouchableOpacity, Text,StyleSheet } from 'react-native'

export default function CardButton({onPress,children,style = {}}){
    <TouchableOpacity onPress={onPress} style={[styles.button,style]}>
        <Text>
            {children}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width:'50%',
        heigth:'50%',
        borderColor:'black',
        borderRadius:20,
        borderWidth:4,
        marginBottom:10
    },
    btnText : {
        fontSize:28,
        padding:10,
    }
})