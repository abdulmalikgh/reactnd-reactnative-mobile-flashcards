import {  ADD_DECKS, ADD_CARD } from '../actions'

export default function decks(state = {}, action ) {
    switch(action.type) {
        case ADD_DECKS: 
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD: 
           const { card, question,answer } = action
            return {
                ...state,
                [card] : {
                title : [card],
                questions: state[card].questions.concat({question:question,answer:answer})
                }
            }
        default : return state
    }
}