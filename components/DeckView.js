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
export default connect(mapStateToProps)(DeckView)

