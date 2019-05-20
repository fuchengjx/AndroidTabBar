import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,  
  Image,  
} from 'react-native'; 

//引入tabbar支持包  
import TabNavigator from 'react-native-tab-navigator';  
  
const TabNavigatorItem = TabNavigator.Item;  

const TAB_NORMAL_1=require('./images/tabbar_1.png');  
const TAB_NORMAL_2=require('./images/tabbar_2.png');  
const TAB_NORMAL_3=require('./images/tabbar_3.png');  

  
const TAB_PRESS_1=require('./images/tabbar_1_press.png');  
const TAB_PRESS_2=require('./images/tabbar_2_press.png');  
const TAB_PRESS_3=require('./images/tabbar_3_press.png');  

import Home from './Android_views/Home'
import Setting from './Android_views/Setting'

 export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <TabNavigator>
        <TabNavigatorItem
        title="首页"
        selected={this.state.selectedTab==='Home'}
        renderIcon={() => <Image style={styles.tabIcon} source={TAB_NORMAL_1} />}
        renderSelectedIcon={() => <Image style={styles.tabIcon} source={TAB_PRESS_1} />}
        selectedTitleStyle={{color:'#f85959'}}
        onPress={()=> {
          console.log("i am Home")
          this.setState({
            selectedTab: 'Home'
          });
        }}
        >
        {this._renderView()}
        </TabNavigatorItem>
        <TabNavigatorItem
         title="设置"
         selected={this.state.selectedTab === 'Setting'}
         renderIcon={() => <Image source={TAB_NORMAL_2} style={styles.tabIcon}/>}
         renderSelectedIcon={() => <Image source={TAB_PRESS_2} style={styles.tabIcon}/>}
         selectedTitleStyle={{color:'#f85959'}}
         onPress={()=>{
          this.setState({
            selectedTab: 'Setting'
          })
        }}
        >
        {this._renderView()} 
        </TabNavigatorItem>
      </TabNavigator>

      </View>
     
    )
  }
  _renderView() {
    var view = null;
    console.log("state", this.state.selectedTab)
    switch(this.state.selectedTab) {
      case 'Home':
        view = <Home></Home>;
        break;
      case 'Setting':
        view = <Setting></Setting>
        break;
      default:
        view = <Home></Home>;
        break;
    }
    return view;
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff'
  },
  tab:{
    height: 52,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width: 25,
    height: 25,
  },
}) 
AppRegistry.registerComponent('App', () => App);