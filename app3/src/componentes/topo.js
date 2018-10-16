import React, { 
  Component
} from 'react';
import {
  View,
  Image
} from 'react-native';

const imagemTopo = require('../../imgs/jokenpo.png');

export default class Topo extends Component {
  render() {
  
    return (    
      <View>
        <Image source={imagemTopo} />
      </View>
    );
  }
}