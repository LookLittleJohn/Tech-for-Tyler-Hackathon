import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ParkingLotNode extends Component {
 constructor(props) {
   super(props);
   this.state = {
     id: '',
     totalSpots: '',
     availableSpots: '',
     type: '',
     name: ''
   };
 }

 componentWillMount() {
   this.setState({
     id: this.props.id,
     totalSpots: this.props.totalSpots,
     availableSpots: this.props.availableSpots,
     type: this.props.type,
     name: this.props.name,
   });
 }

 render() {
   if(this.props.me == true){


     let nodeStyle = {
       backgroundColor: 'blue',
       width: 25,
       height: 25,
       borderRadius: 15,
       alignItems: 'center',
       justifyContent: 'center',
       padding: 6,
       borderWidth: 3,
       borderColor: 'white',
     };
     let container = {
       alignItems: 'center',
       justifyContent: 'center',
       flex: 1,
     }
     return (
       <View style={container}>
       <Text>{this.state.name}</Text>
       <View style={nodeStyle}>
       <Text style={{ color: 'white'}}>{this.state.availableSpots}</Text>
       </View>
       </View>
     );
   } else {

     let color = () => {
       if (this.state.availableSpots / this.state.totalSpots >= 0.5) {
         return 'green';
       } else if (
         this.state.availableSpots / this.state.totalSpots >= 0.25 &&
         this.state.availableSpots / this.state.totalSpots < 0.5
       ) {
         return 'yellow';
       } else if (
         this.state.availableSpots / this.state.totalSpots >= 0.1 &&
         this.state.availableSpots / this.state.totalSpots < 0.25
       ) {
         return 'orange';
       } else {
         return 'red';
       }
     };

     let nodeStyle = {
       backgroundColor: color(),
       borderRadius: 15,
       alignItems: 'center',
       justifyContent: 'center',
       padding: 6,
       borderWidth: 1,
       borderColor: 'white',
     };
     let container = {
       alignItems: 'center',
       justifyContent: 'center',
       flex: 1,
     }
     return (
       <View style={container}>
       <Text>{this.state.name}</Text>
       <View style={nodeStyle}>
       <Text style={{ color: 'white'}}>{this.state.availableSpots}</Text>
       </View>
       </View>
     );
   }
 }
}
