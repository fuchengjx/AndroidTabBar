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
      header: "我是Home的Header",
      content: '我是首页',
      footer: '我是Home的 底部'
    } 
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{this.state.header}</Text>
        </View>
        <View style={styles.content}>
          <Text>{this.state.content}</Text>
        </View>
        <View style={styles.header}>
          <Text>{this.state.footer}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 300
  },
  header: {
    flex: 1,
    backgroundColor: 'red'
  },
  content: {
    flex: 1,
    backgroundColor: 'blue'
  },
  footer: {
    flex: 1,
    backgroundColor: 'black'
  }
})
// AppRegistry.registerComponent('Home', () => Home);
module.exports = Home;