import { AsyncStorage } from 'react-native'

export const CARD_DATA_KEY = 'UDACITYCARD'

 const decks = {
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

  const _SetData = async()=>{
    try {
     return await AsyncStorage.setItem(CARD_DATA_KEY,JSON.stringify(decks))
    } catch(error){
      console.warn(error)
    }
  }

 export const getDecks = async()=>{
    try {
      return await AsyncStorage.getItem(CARD_DATA_KEY)
    }catch(error){
      console.warn(error)
    }
  }

  