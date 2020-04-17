import {  ADD_DECKS } from '../actions'

export default function decks(state = {}, action ) {
    switch(action.type) {
        case ADD_DECKS: 
            return {
                ...state,
                ...action.decks
            }
        default : return state
    }
}