import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import CustomMarker from './src/marker'
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0151;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class App extends Component<{}> {


  constructor(props) {
    super();
    this.state = {
      region: {
        latitude: 32.316468,
        longitude: -95.253870,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      whereAmI: {
        latitude: 0,
        longitude: 0,
      }
    };
  }
  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          whereAmI:{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });
        console.log('logging position')
      },
      (error) => console.log(error),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }
  takeMeHome() {

  }
  openMarkerTab() {

  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapContainer}
        initialRegion={this.state.region}

      >
        <MapView.Marker
          coordinate={ this.state.region }
        >
          <TouchableWithoutFeedback onPress={() => openMarkerTab()}>
            <CustomMarker
            availableSpots={100}
            totalSpots={100}
            id={0}
            />
          </TouchableWithoutFeedback>
        </MapView.Marker>

        <MapView.Marker
          coordinate={{
            latitude: 32.317957,
            longitude: -95.253234,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
          }}
        >
          <CustomMarker
            availableSpots={20}
            totalSpots={100}
            id={0}
            name={'Parking Log A'}
          />
        </MapView.Marker>
        <MapView.Marker
          coordinate={{
            latitude: this.state.whereAmI.latitude,
            longitude: this.state.whereAmI.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
          }}
        >
          <CustomMarker
            me={true}
          />
        </MapView.Marker>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
