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
         await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(CARD_DATA))
     } catch (error) {
         console.warn('Error saving data to the database', error)
     }
 }

 export const getDeck = async()=> {
    try{
      await  AsyncStorage.getItem(CARD_STORAGE_KEY)
    }catch(error) {
        console.warn(error)
    }
 }