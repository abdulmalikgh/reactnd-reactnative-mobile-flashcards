import { AsyncStorage } from 'react-native'

const CARD_DATA_KEY = 'UDACITYCARD'

export const DECKS_DATA = {
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
      await AsyncStorage.setItem(CARD_DATA_KEY,JSON.stringify(DECKS_DATA))
    } catch(error){
      console.warn(error)
    }
  }

  const getDecks = async()=>{
    try {
      await AsyncStorage.getItem(CARD_DATA_KEY)
    }catch(error){
      console.warn(error)
    }
  }