import React , {Component} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'

class AddDeck extends Component{
    state = {
        deck : 'Deck Titile'
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.textContent}>
                    <Text style={styles.deckText}>
                        What is the name of the title of your new deck ?
                    </Text>
                    <TextInput />
                </View>
                <View style={styles.buttonContent}>
                    <CardButton 
                        btnStyle={{backgroundColor:'black'}}
                        textStyle={{color:'white'}}>
                            Create Deck
                    </CardButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContent: {
        flex:5,
        alignItems:'center'
    },
    buttonContent: {
        flex:4,
        alignItems:'center'
    },
    deckText: {
        fontSize:30
    }
})

export default connect()(AddDeck)