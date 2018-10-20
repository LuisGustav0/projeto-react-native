import React, { Component } from 'react'
import {
  View
 } from 'react-native'
 import styles from './styles/sistema'
import HelloWorld from './componentes/HelloWorld';
import ParOuImpar from './componentes/ParOuImpar';
//import Inverter  from './componentes/Multi'; import por export padrao
import Inverter, { MegaSena } from './componentes/Multi';

 export default class App extends Component {
   render() {
      return (
        <View style={styles.container}>
          <HelloWorld texto='Hello World!' />

          <ParOuImpar numero={15} />

          <Inverter texto='React Nativo!' />
				  <MegaSena numeros={6} />
        </View>
      );
   }
 }