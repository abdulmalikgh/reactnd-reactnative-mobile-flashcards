import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardButton from './CardButton'
import { connect } from 'react-redux'

class Quiz extends Component{
    static navigationOptions = ({ navigation })=>{
        const { pageTitle } = navigation.state.params

        return {
            title: pageTitle
        }
    }
    render(){
        const { quizTitle } = this.props.navigation.state.params
        const { decks } = this.props
        console.log('decks')
        return (
            <View style={styles.quizcontainer}>
                <View style={styles.qntAndAns}>
                    <Text>{}</Text>
                </View>
                <View style={styles.buttons}>
                    <CardButton 
                        btnStyle={{backgroundColor:'green'}}
                        textStyle={{color:'white'}}>
                        Correct
                    </CardButton>
                    <CardButton 
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
    quizcontainer : {
        flex: 1,
    },
    qntAndAns:{
        flex:5,
        margin:5,
        alignItems:'center'
    },
    buttons: {
        flex:4,
        alignItems:'center'
    },
})

function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(Quiz)