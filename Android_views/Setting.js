import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,  
  Image,  
} from 'react-native';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '我是设置'
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
// AppRegistry.registerComponent('Setting', () => Setting);
module.exports = Setting;