import React, { Component } from 'react'
import { View, Text,FlatList,TouchableOpacity} from 'react-native'
import { decks} from '../utils/api'

function DeckList({title,questions}){
    return (
        <TouchableOpacity>
            <Text>
              this is the title : {title}
            </Text>
            <Text>
                this is the : {questions.answer}
            </Text>
        </TouchableOpacity>
    )
}

class DeckListView extends Component{
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList 
                    data={Object.keys(decks)} 
                    renderItem={({item})=> <DeckList {...decks[item]} key={item}/>}
                />
            </View>
        )
    }
}

export default DeckListView;