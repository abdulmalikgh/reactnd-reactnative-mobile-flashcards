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

const NavigationStack = createStackNavigator({
   Home : {
     screen : DeckListView
   },
   DeckDetail : {
     screen: DeckView,
     navigationOptions : {
       headerTintColor: 'white',
       headerStyle:{
         backgroundColor:'black'
       }
     }
   }
}, {
  initialRouteName: 'Home'
})

const AppNavigation = createAppContainer(NavigationStack)

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
