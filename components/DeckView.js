import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DeckList from './DeckList'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class DeckView extends Component {
    render() {
        return (
            <View style={styles.deckviewContent}>
                <View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckviewContent : {
        flex:1
    },
    decktitle: {
        
    },
    listviewContent: {
        flex : 4
    },
    total : {

    }
})
export default connect()(DeckView)

