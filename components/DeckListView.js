import React, { Component } from 'react'
import { View, Text,FlatList,TouchableOpacity,StyleSheet} from 'react-native'
import { addDecks } from '../actions'
import { getDecks} from '../utils/api'
import { connect } from 'react-redux'

function DeckList({title,questions,listviewContent}){
    
    return (
        <TouchableOpacity>
           <View style={listviewContent}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.total}> {questions.length} Cards</Text>
           </View>
        </TouchableOpacity>
    )
}
class DeckListView extends Component{
componentDidMount(){
    return getDecks().then((decks)=> {
        this.props.dispatch(addDecks(JSON.parse(decks)))
        
    })
}

    render() {
        const { decks } = this.props
        console.log(Object.keys(decks))
        return (
           <View style={styles.listContainer}>
               <FlatList 
                   data={Object.keys(decks)}
                   keyExtractor={(item,index) => item[index] }
                   renderItem={ ({ item })=><DeckList {...decks[item]} listviewContent={styles.listviewContent}/>}
               />
           </View>
        )
    }
}
const styles = StyleSheet.create({
    listContainer : {
        flex :1,
    }, 
    listviewContent: {
        marginTop:70,
        justifyContent:'center',
        alignItems:'center'
    },
    title : {
        padding:10,
        fontSize:30,
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
export default connect(mapStateToProps)(DeckListView)