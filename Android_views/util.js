import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, PixelRatio } from 'react-native';

//封装的工具类
// fetch
// 获取屏幕的宽高
// 获去最小线宽

module.exports = {
  size: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  pixel: 1 / PixelRatio.get(),

  //fetch <=> ajax
  get: function(url, successCallback, failCallback) {
   fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      successCallback(responseJson)
    })
    .catch((error) => {
      failCallback(error)
    });
 }

};