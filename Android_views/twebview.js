import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';

class TWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      isError: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {
          // 条件判断，当WebView载入失败的时候，显示错误信息
          this.state.isError ? 
          <View style={styles.errorInfo}>
            <Text style={styles.font}>网络有问题，请检查网络情况，再刷新</Text>
          </View> 
          :
          <WebView onError={this._showError.bind(this)} startInLoadingState={true} source={{uri: this.state.url}} style={{marginTop:-20}}/>
        }
      </View>
    );
  }

  _showError() {
    this.setState({
      isError: true
    })
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorInfo: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize:20,
    color: 'red',
    fontWeight: '400',
  }
})
module.exports = TWebView;
