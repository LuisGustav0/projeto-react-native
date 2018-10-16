import React, { 
  Component
} from 'react';
import {
  AppRegistry
} from 'react-native';
import ListaItens from './src/componentes/lista-itens';

export default class App extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('app4', () => App);
