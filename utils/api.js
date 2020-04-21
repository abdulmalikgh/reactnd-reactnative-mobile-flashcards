import { AsyncStorage } from 'react-native'

export const CARD_STORAGE_KEY = 'UDACICARDS'

const CARD_DATA = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

 _storeData = async () => {
     try {
         return await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(CARD_DATA))
     } catch (error) {
         console.warn('Error saving data to the database', error)
     }
 }

 export const getDecks = async()=> {
    try{
      return await  AsyncStorage.getItem(CARD_STORAGE_KEY)
    }catch(error) {
        console.warn(error)
    }
 }

 export const addDeck = async(deck)=>{
  try {
    AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then( (decks)=> {
      const data = JSON.parse(decks)
      const newDecks = {...data,deck}
      return await AsyncStorage.setItem(CARD_STORAGE_KEY,JSON.stringify(newDecks))
    })
  }catch( err ) {
    console.warn(err)
  }
 }

 export const removeDeck = async(deckTitle)=> {
   try{
       AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then(decks => {
          const data = JSON.parse(decks)
          data[deckTitle] = undefined
          delete data[deckTitle]
          return await AsyncStorage.setItem(CARD_STORAGE_KEY,JSON.stringify(data))
        })
   }catch(err) {
     console.warn(err)
   }
 }
 _storeData()