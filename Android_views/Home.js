import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,  
  Image,  
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '我是首页'
    } 
  }
  render() {
    return (
      <View>
        <Text>{this.state.content}</Text>
      </View>
    )
  }
}
// AppRegistry.registerComponent('Home', () => Home);
module.exports = Home;