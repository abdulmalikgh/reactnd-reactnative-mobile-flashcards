import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  DeckListView  from './components/DeckListView'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers'

export default function App() {
  return (
    <Provider store={createStore(Reducer)}>
        <View style={{flex: 1}}>
          <DeckListView />
        </View>
    </Provider>
  );
}

