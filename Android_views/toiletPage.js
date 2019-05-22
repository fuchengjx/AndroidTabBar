import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';

import TwebView from './twebview'

class toiletPage extends Component{
  constructor(props) {
    super(props);
      this.state = {
        content: 'i am toiletPage'
      }
  }
  render() {
    return(
      <View style={styles.contaniner}>
        {/* <Text>{this.state.content}</Text> */}
        <TwebView url="https://www.baidu.com"> </TwebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contaniner: {
    flex: 1
  },
  text: {
    fontSize:60,
    
  }
});

module.exports = toiletPage;
