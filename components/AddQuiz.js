import React, { Component}from 'react'
import { View, Text,StyleSheet,TextInput } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'

class AddQuiz extends Component{
    state = {
        isFocused: false,
        question:'',
        answer:''
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
      // todo add card redux
      // add card to asyncStorage
    }
    static navigationOptions = ({ navigation })=>{
        const {pageTitle,quizTitle } = navigation.state.params

        return {
            title:`${quizTitle}${pageTitle}`
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
                        placeholder="Enter card question"
                    />
                    <TextInput
                        style={[styles.textInput,
                        {backgroundColor : this.state.isFocused ? 'white' : 'rgba(0,0,0)'}]}
                        onFocus={this.handleFocus}
                        onBlur={this.handleOnBlur}
                        onChangeText={(text)=> this.setState({answer:text})}
                        placeholder="Enter card Answer"/>
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

function mapStateToProps(decks){
    return {
        decks
    }
}
export default connect(mapStateToProps)(AddQuiz)