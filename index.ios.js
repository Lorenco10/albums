// Index.android.js - place code in here for IOS!!!!

//Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
