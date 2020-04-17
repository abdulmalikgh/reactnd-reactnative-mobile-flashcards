import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  DeckListView  from './components/DeckListView'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

const NavigationStack = createStackNavigator({
   Home : {
     screen : DeckListView
   }
})

const AppNavigation = createAppContainer(NavigationStack)

export default function App() {
  return (
    <Provider store={createStore(Reducer)}>
        <View style={{flex: 1}}>
          <AppNavigation />
        </View>
    </Provider>
  );
}

