export const ADD_DECKS = 'ADD_DECKS'
export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_TODO = 'REMOVE_TODO'

export function addDecks(decks){
    return {
        type : ADD_DECKS,
        decks
    }
}
export function removeDeck(title) {
    return {
        type: REMOVE_TODO,
        title
    }
}
export function addCard({ card,question,answer }){
    return {
        type: ADD_CARD,
        card,
        question,
        answer
    }
}

export function addDeck(deck){
    return {
        type : ADD_DECK,
        deck
    }
}