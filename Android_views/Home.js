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
      header: "我是Home的 Header",
      content: '我是Home的 Content',
      footer: '我是Home的 footer'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{this.state.header}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.left}>
            <Text>left</Text>
          </View>
          <View style={styles.center}>
            <Text>{this.state.content}</Text>
          </View>
          <View style={styles.right}>
            <Text>right</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{textAlign: 'center'}}>{this.state.footer}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    textAlign: 'center'
  },
  header: {
    flex: 1,
    backgroundColor: 'red'

  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  center: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  left: {
    flex: 1,
    backgroundColor: 'blue'
  },
  right: {
    flex: 1,
    backgroundColor: 'green'
  },
  footer: {
    flex: 1,
    backgroundColor: 'pink',

  }
})
// AppRegistry.registerComponent('Home', () => Home);
module.exports = Home;
