import React, { Component } from 'react'
import { View, Text,FlatList,TouchableOpacity,StyleSheet} from 'react-native'
import { addDecks } from '../actions'
import { getDecks} from '../utils/api'
import { connect } from 'react-redux'
import DeckList from './DeckList'

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

})
function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(DeckListView)