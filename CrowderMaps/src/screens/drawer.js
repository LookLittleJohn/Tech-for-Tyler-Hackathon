import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
var dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {this.props._drawer.close()}}>
          <View>
            <Text>back</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.loginContainer}>
          <View style={styles.profilePic}></View>
        </View>
        <View style={styles.itemContainer}>

        </View>
        <View style={styles.itemContainer}>

        </View>
        <View style={styles.itemContainer}>
          <Text>Settings</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  loginContainer: {
    borderColor: '#cfcfcf',
    borderBottomWidth: 1,
    height: 375,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic:{
    height: 200,
    width: 200,
    borderRadius: 500,
    borderWidth: .5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    borderColor: '#cfcfcf',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Drawer;
