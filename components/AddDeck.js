import React , {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'
import CardText from './CardButton'

class AddDeck extends Component{
    state = {
        deck : 'Deck Titile',
        isFocused: false
    }
   createDeck = ()=>{
        console.log('Add deck to store')
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
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.textContent}>
                    <Text style={styles.deckText}>
                        What is the name of the title of your new deck ?
                    </Text>
                    <CardText
                       isFocused={this.state.isFocused}
                       value={this.state.deck}
                       onChangeText={(text) => his.state.setState({deck:text})}
                       onFocus={this.handleFocus}
                       onBlur={this.handleOnBlur}/>
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
        alignItems: 'center',
        marginTop:70    
    },
    buttonContent: {
        flex:2,
        alignItems:'center'
    },
    deckText: {
        fontSize:30,
        textAlign:'center'
    }
})

export default connect()(AddDeck)