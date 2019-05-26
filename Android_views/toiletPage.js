import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import TwebView from './twebview'

class toiletPage extends Component{
  constructor(props) {
    super(props);
      this.state = {
        url: 'https://www.baidu.com',
        isError: false,
        content: 'i am toiletPage'
      }
  }
  render() {
    return(
      <View style={styles.contaniner}>
        <TwebView url={this.state.url}> </TwebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contaniner: {
    flex: 1
  },
});

module.exports = toiletPage;
