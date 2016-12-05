import React, { Component } from 'react';
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = require('react-native');
var SearchPage = require('./SearchPage');

class HomeFinder extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home Finder',
          component: SearchPage
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    backgroundColor: '#F5FCFF',
    margin: 80,
    fontSize: 30,
  },
});

AppRegistry.registerComponent('HomeFinder', () => HomeFinder);
