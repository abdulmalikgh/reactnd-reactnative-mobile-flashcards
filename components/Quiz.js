import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'

class Quiz extends Component{
    state = {
        correct: 0,
        incorrect: 0,
        isAnswer: false,
        showResult: false,
        questionCount:this.props.deck.questions.length
    }
    static navigationOptions = ({ navigation })=>{
        const { pageTitle } = navigation.state.params

        return {
            title: pageTitle
        }
    }
    toggleQuestion = ()=>{
        this.setState( (prevState) => (
            {isAnswer: !prevState.isAnswer}
        ))
    }
    handleCorrect = ()=>{
    
    }
    handleRestart = ()=>{
        this.setState({
            isAnswer:false,
            correct:0,
            incorrect:0,
            questionCount:this.props.deck.length
        })
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
        if(!this.state.showResult) {
            const { correct, questionCount } = this.state
            const percentage = ( (correct / questionCount) * 100).toFixed(0)

            return (
                <View style={{flex:1}}>
                    <View style={styles.qntAndAns}>
                        <Text style={[styles.answerText ,{fontSize : 30}]}>Quiz Complete !</Text>
                        <Text style={[styles.answerText, {fontSize:15}]}>{`${correct}/ ${questionCount}`} corrects</Text>
                        <Text style={[styles.answerText, {fontSize:15}]}>{'Percentage Correct'}</Text>
                        <Text style={[styles.answerText, {fontWeight:'bold', fontSize:20}]}>{`${percentage}%`}</Text>
                    </View>
                    <View style={styles.buttons}>
                    <CardButton onPress={this.handleRestart} 
                        btnStyle={{backgroundColor:'green'}}
                        textStyle={{color:'white'}}>
                         Restart
                     </CardButton>
                     <CardButton 
                        btnStyle={{backgroundColor:'red'}}
                        textStyle={{color:'white'}}
                        onPress={()=> this.props.navigation.navigate('Home')}>
                         go Back
                     </CardButton>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.quizcontainer}>
                <View style={styles.qntAndAnsContent}>
                    {deck.questions.map( (card, index )=> {
                        return (
                            <View key={index} style={{flex:1}}>
                                <Text style={styles.remainingQuestion}>{`${index + 1}/${this.state.questionCount}`}</Text>
                                <View style={styles.qntAndAns}> 
                                    <Text style={{fontSize:30, textAlign:'center'}}>
                                        {!this.state.isAnswer ? card.question : card.answer}
                                    </Text>
                                    <Text style={styles.title} onPress={this.toggleQuestion}>
                                        {!this.state.isAnswer ? 'Answer' : 'Question'}
                                    </Text>
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
     answerText: {
        padding:10
     },
    quizcontainer : {
        flex: 1,
    },
    title:{
        padding:10,
        fontSize:15,
        color:'red',
        fontWeight:'bold'
    }
    ,
    qntAndAnsContent:{
        flex:5,
        margin:10,
    },
    qntAndAns: {
        alignItems:'center',
        justifyContent:'center',
        flex:5
    },
    buttons: {
        flex:3,
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