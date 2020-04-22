import {  ADD_DECKS, ADD_CARD,ADD_DECK, REMOVE_TODO } from '../actions'

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
        case ADD_DECK: 
        const deck = action.deck
            return {
                ...state,
                [deck] : {
                    title: deck,
                    questions: []
                }
            }
        case REMOVE_TODO: 
            return state.filter( decks => decks.title !== action.ti)
             
        default : return state
    }
}