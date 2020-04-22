import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import CardButton from './CardButton'
import { removeDeckFromDecks } from '../utils/api'
import { removeDeck } from '../actions'

class DeckDetail extends Component {
    deleteDeck  = () =>{
        const { title } = this.props.navigation.state.params
        const { goBack } = this.props.navigation
           removeDeckFromDecks(title)
           this.props.dispatch(removeDeck(title))
           goBack('DeckListView')
      }
      
    static navigationOptions = ({ navigation })=>{
       const { title } = navigation.state.params
       return {
           title : title
       }
    }
    render() {
        const  title  = this.props.navigation.state.params.title
        const { decks } = this.props
        return (
            <View style={styles.deckviewContent}>
                <View style={styles.cardDetail}>
                    <View style={styles.listviewContent}>
                        <Text style={styles.title}> {title} </Text>
                        <Text style={styles.total}> {decks[title].questions.length} Cards</Text>
                    </View>
                </View>
                <View style={styles.cardBtns}>
                     <CardButton onPress={()=>this.props.navigation.navigate(
                             'AddCard',
                              {quizTitle:title,pageTitle: 'Add Card'}
                              )} 
                              btnStyle={{borderWidth:4}}>
                         Add Card
                     </CardButton>
                     <CardButton onPress={()=> this.props.navigation.navigate(
                         'Quiz', 
                         {pageTitle:'Quiz',quizTitle:title}
                         )} 
                         btnStyle={styles.btnStyle} 
                         textStyle={styles.textStyle}>
                         Start Quiz
                     </CardButton>
                     <CardButton 
                        textStyle={{color:'red'}}
                        onPress={this.deleteDeck}>
                         Delete Deck
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
        alignItems:'center'  
    },
    listviewContent: {
        marginTop:70,
        justifyContent:'center',
        alignItems:'center'
    },
    title : {
        padding:10,
        fontSize:35,
        color:'black'
    },
    total : {
        color:'black',
        opacity: 0.5,
        fontSize: 18
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(DeckDetail)

