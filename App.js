import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  DeckListView  from './components/DeckListView'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import DeckView from './components/DeckView'
import Quiz from './components/Quiz'
import AddQuiz from './components/AddQuiz'
import AddDeck from './components/AddDeck'

const NavigationStack = createStackNavigator({
   Home : {
     screen : DeckListView,
   },
   DeckDetail : {
     screen: DeckView,
   },
   Quiz: {
     screen: Quiz
   },
   AddQuiz : {
     screen: AddQuiz
   }
}, {
  initialRouteName: 'Home'
},
{defaultNavigationOptions : {
    headerTintColor: 'white',
    headerStyle:{
    backgroundColor:'black'
  }
}})

const TabNavigation = createBottomTabNavigator({
  Decks : {
    screen : NavigationStack,
    navigationOptions: {
      title: 'Decks'
    }
  },
  AddDeck : {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add Deck'
    }
  }
})

const AppNavigation = createAppContainer(TabNavigation)

export default class extends Component {
render( ) {
  return (
    <Provider store={createStore(Reducer)}>
        <View style={styles.container}>
          <AppNavigation />
        </View>
    </Provider>
  );
}
