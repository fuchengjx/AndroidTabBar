import React, { Component } from 'react';  
import {  
  StyleSheet,  
  Text,  
  View,  
} from 'react-native';


import Recommend from './read/recommend';
import Category from './read/category';
import Search from './read/search';
import Topic from './read/topic';

class ReadView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Topic/>
        <Category/>
        <Recommend/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
module.exports = ReadView;