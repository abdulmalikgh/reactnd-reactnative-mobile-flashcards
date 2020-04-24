import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'

class Quiz extends Component{
    static navigationOptions = ({ navigation })=>{
        const { pageTitle } = navigation.state.params

        return {
            title: pageTitle
        }
    }
    render(){
        const { quizTitle } = this.props.navigation.state.params
        const { decks } = this.props

        if(decks[quizTitle].questions.length === 0) {
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
                    {decks[quizTitle].questions.map( card => {

                        return (
                            <View key={card.question}> 
                                <Text>{card.question}</Text>
                                <Text>{card.answer}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.buttons}>
                    <CardButton 
                        btnStyle={{backgroundColor:'green'}}
                        textStyle={{color:'white'}}>
                        Correct
                    </CardButton>
                    <CardButton 
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
        flex:5,
        margin:5,
        alignItems:'center'
    },
    buttons: {
        flex:4,
        alignItems:'center'
    },
    cantStartQuiz: {
        margin:20,
        justifyContent:'center',
        alignItems:'center',
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(Quiz)