import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import CardButton from './CardButton'

const startQuiz  = ()=>{
   console.log('start quiz')
   // todo : redirect user to add card
}

const addCard = ()=>{
    console.log('Add card')
    // todo : redirect user to start quiz
}

class DeckView extends Component {
    render() {
        return (
            <View style={styles.deckviewContent}>
                <View style={styles.cardDetail}>
                   <Text>{this.props.navigation.state.params.title}</Text>
                </View>
                <View style={styles.cardBtns}>
                     <CardButton onPress={addCard}>
                         Add Card
                     </CardButton>
                     <CardButton onPress={startQuiz} btnStyle={styles.btnStyle} textStyle={styles.textStyle}>
                         Start Quiz
                     </CardButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnStyle :{
    backgroundColor:'black'
    },
    textStyle:{
        color:'white'
    },
    deckviewContent : {
        flex:1,

    },
    cardDetail: {
        flex : 4
    },
    cardBtns:{
        flex: 4,
        alignContent:'center',
        justifyContent:'center',    
    }
})
export default connect()(DeckView)

