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
      <View style={styles.container}>
        <Text style={styles.font}>{this.state.content}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 30,
    color: 'green'
  }
})
// AppRegistry.registerComponent('Setting', () => Setting);
module.exports = Setting;