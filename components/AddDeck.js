import React , {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardButton from './CardButton'
import CardText from './CardText'
import { connect} from 'react-redux'
import { addDeck } from '../actions'
import { addDeckToDecks } from '../utils/api'

class AddDeck extends Component{
    state = {
        deck : 'Deck Title',
        isfocused: 'false'
    }

   createDeck = ()=>{
       const { deck } = this.state
        if(deck !== null && deck !== 'Deck Title') {
            addDeckToDecks(deck)
            this.props.dispatch(addDeck(deck))
            this.props.navigation.navigate('DeckDetail',{title: deck})
        } else { 
            console.warn('No data entered')
        }
        this.setState({
            deck : "Deck Title"
        })
    }
    handleFocus = event => {
        this.setState({ isfocused: 'true'})
        
        if(this.props.onFocus){
            this.props.onFocus(event)
        }
    }
    handleOnBlur = event => {
        this.setState({isfocused: 'false'})
        
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
                        value={this.state.deck} 
                        onBlur={this.handleOnBlur}
                        onFocus={this.handleFocus}
                        isfocused={this.state.isfocused}
                        onChangeText={(text) => this.setState({deck: text})}
                        />
                </View>
                <View style={styles.buttonContent}>
                    <CardButton 
                        btnStyle={{backgroundColor:'black'}}
                        textStyle={{color:'white'}}
                        onPress={this.createDeck}>
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
        textAlign:'center',
        margin: 50
    }
})

export default connect()(AddDeck)