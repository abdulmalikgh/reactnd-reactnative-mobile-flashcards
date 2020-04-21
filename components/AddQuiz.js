import React, { Component}from 'react'
import { View, Text,StyleSheet,TextInput,Alert } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'
import { addCard} from '../actions'

class AddQuiz extends Component{
    state = {
        isFocused: false,
        question:'Question',
        answer:'Answer'
    }
    handleFocus = event => {
        this.setState({ isFocused: true})
        
        if(this.props.onFocus){
            this.props.onFocus(event)
        }
    }
    handleOnBlur = event => {
        this.setState({isFocused: false})
        
        if(this.props.onBlur){
            this.props.onBlur(event)
        }

    }
    submitCard = ()=>{
      const question = this.state.question
      const answer = this.state.answer
      const card = this.props.navigation.state.params.quizTitle
      if(question === 'Question' && answer === 'Answer'){
          Alert.alert(`You didn't enter question and answer,Try again`)
          console.log('No answer entered')
      }else {
        this.props.dispatch(addCard({ question,answer,card }))
      }
      
      // add card to asyncStorage

      this.setState({
          question: 'Question',
          answer: 'Answer'
      })
    }
    static navigationOptions = ({ navigation })=>{
        const {pageTitle,quizTitle } = navigation.state.params

        return {
            title:`${quizTitle}   ${pageTitle}`
        }
    }
    render(){
        return (
            <View style={styles.addCardContainer}>
                <View style={styles.cardQuestion}>
                  <TextInput 
                    style={[styles.textInput,
                        {backgroundColor : this.state.isFocused ? 'white' : 'rgba(0,0,0)'}]}
                        onFocus={this.handleFocus}
                        onBlur={this.handleOnBlur}
                        onChangeText={(text) => this.setState({question: text})}
                        value={this.state.question}
                    />
                    <TextInput
                        style={[styles.textInput,
                        {backgroundColor : this.state.isFocused ? 'white' : 'rgba(0,0,0)'}]}
                        onFocus={this.handleFocus}
                        onBlur={this.handleOnBlur}
                        onChangeText={(text)=> this.setState({answer:text})}
                        value={this.state.answer}/>
                </View>
                <View style={styles.submitBtn}>
                    <CardButton 
                        onPress={this.submitCard}
                        btnStyle={{backgroundColor:'black'}}
                        textStyle={{color:'white'}}>
                        Submit
                    </CardButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addCardContainer: {
        flex:1,
    },
    cardQuestion: {
        flex:6,
        alignItems:'center',
        marginTop:40
    },
    submitBtn:{
        flex:4,
        alignItems:'center'
    },

})

function mapStateToProps(decks){
    return {
        decks
    }
}
export default connect(mapStateToProps)(AddQuiz)