
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  TextInput
} from 'react-native';

var dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
import {GLOBALS} from './src/globals';
import Drawer from './src/screens/drawer'
import SlideLeft from 'react-native-drawer'
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Map from './Map'
import Polygon from './src/screens/polygon'
export default class App extends Component<{}> {

  state = {
    whereAmI: {
      latitude: 0,
      longitude: 0,
    },
    region: {
      latitude: 32.316468,
      longitude: -95.253870
    }
  }
  takeMeHome(){
    this.setState({
      region:{
        latitude: this.state.whereAmI.latitude,
        longitude: this.state.whereAmI.longitude,
      }
    })
  }
  render() {
    return (
      <SlideLeft
        type="overlay"
        ref={(ref) => this._drawer = ref}
        content={<Drawer _drawer={this._drawer}/>}
        tapToClose={true}
        style={styles.drawer}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0,2}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
        <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableWithoutFeedback onPress={() => {this._drawer.open()}}>
              <IonIcon name="ios-menu" size={30} color={GLOBALS.iconColor} style={styles.leftIcon}/>
            </TouchableWithoutFeedback>
            <TextInput
            style={styles.input}
            placeholder='Find Parking'
            />
            <MaterialCommunityIcons name="microphone" size={30} color={GLOBALS.iconColor} style={styles.rightIcon}/>
          </View>
          <Map/>
          <View style={styles.bottomBar}>
            <TouchableWithoutFeedback onPress={() => this.takeMeHome()}>
              <IonIcon name="md-navigate" size={30} color={GLOBALS.iconColor} style={styles.leftIcon}/>
            </TouchableWithoutFeedback>
            <View style={styles.locationContainer}>
              <Text style={styles.text}>UT Tyler Campus</Text>
            </View>
            <View style={styles.lotContainer}>
              <Text style={styles.lotText}> - Lot A</Text>
            </View>
          </View>
        </View>
      </SlideLeft>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: GLOBALS.color,
    backgroundColor: GLOBALS.secondaryColor,
    borderTopWidth: 1,
    height: 50,
    width: dimensions.width,
    borderBottomWidth: .5,
    borderBottomColor: '#a2d164',
  },
  bottomBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: GLOBALS.color,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width: dimensions.width,
    borderColor: GLOBALS.color,
    backgroundColor: GLOBALS.secondaryColor,
    borderWidth: 1,
  },
  leftIcon: {
    position: 'absolute',
    left: 10
  },
  rightIcon: {
    position: 'absolute',
    right: 10
  },
  text: {
    color: GLOBALS.textColor,
    fontSize: 24
  },
  lotText: {
    color: GLOBALS.textColor,
    fontSize: 24
  },
  logo: {
  },
  input: {
    backgroundColor: 'white',
    width: dimensions.width*.8,
    height: 45,
    padding: 5,

  },
  locationContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GLOBALS.color,
    padding: 10,
    paddingVertical: 5
  },
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
});
