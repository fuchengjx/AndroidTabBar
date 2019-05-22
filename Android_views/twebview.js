import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView } from 'react-native';

class TWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url
    }
  }
  render() {
    return (
      <View>
        <Text>iiiiiiiiiiiiiii</Text>
        <WebView source={{uri: "https://www.baidu.com"}} style={{PmarginTop:-20}}/>
      </View>
      
    )
  }
}
module.exports = TWebView;