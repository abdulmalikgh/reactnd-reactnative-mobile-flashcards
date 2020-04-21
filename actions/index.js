export const ADD_DECKS = 'ADD_DECKS'
export const ADD_CARD = 'ADD_CARD'

export function addDecks(decks){
    return {
        type : ADD_DECKS,
        decks
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