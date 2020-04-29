import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'

class Quiz extends Component{
    state = {
        correct: 0,
        incorrect: 0
    }
    static navigationOptions = ({ navigation })=>{
        const { pageTitle } = navigation.state.params

        return {
            title: pageTitle
        }
    }
    handleCorrect = ()=>{
        this.setState((prevState) => 
          { 
              return {
                  correct: prevState.correct + 1
              }
          }
        )
    }
    handleIncorrect = ()=>{
        this.setState( (prevState) => {
            return {
                incorrect: prevState.incorrect + 1
            }
        })
        console.log('incorrec', this.state.incorrect)
    }
    render(){
        const { deck } = this.props

        if(deck.questions.length === 0) {
            return (
                <View style={styles.cantStartQuiz}> 
                    <Text style={{fontSize:30}}>
                        Sorry, you cannot take a quiz because there are no cards in the deck 
                    </Text>
                </View>
            )
        }
        return (
            <View style={styles.quizcontainer}>
                <View style={styles.qntAndAns}>
                    {deck.questions.map( (card, index )=> {
                        return (
                            <View key={index} style={{flex:1}}>
                                <Text style={styles.remainingQuestion}>{`${index + 1}/${deck.questions.length}`}</Text>
                                <View style={{alignItems:'center'}}> 
                                    <Text>{card.question}</Text>
                                    <Text>{card.answer}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.buttons}>
                    <CardButton 
                        onPress={this.handleCorrect}
                        btnStyle={{backgroundColor:'green'}}
                        textStyle={{color:'white'}}>
                        Correct
                    </CardButton>
                    <CardButton 
                        onPress={this.handleIncorrect}
                        btnStyle={{backgroundColor:'red'}}
                        textStyle={{color:'white'}}>
                        Incorrect
                    </CardButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quizcontainer : {
        flex: 1,
    },
    qntAndAns:{
        flex:6,
        margin:5,
    },
    buttons: {
        flex:4,
        alignItems:'center',
        margin:10
    },
    cantStartQuiz: {
        margin:20,
        justifyContent:'center',
        alignItems:'center',
    },
    remainingQuestion : {
        padding:10,
        fontSize: 20
    }
})

function mapStateToProps(decks, { navigation }) {
    const title = navigation.getParam('title', 'undefined');
    const deck = decks[title]
    return {
        deck
    }
}
export default connect(mapStateToProps)(Quiz)