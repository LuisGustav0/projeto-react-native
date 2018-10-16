import React, { 
  Component 
} from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import TelaPrincipal from './src/componentes/tela-principal';
import TelaCliente from './src/componentes/tela-cliente';
import TelaContato from './src/componentes/tela-contato';
import TelaEmpresa from './src/componentes/tela-empresa';
import TelaServico from './src/componentes/tela-servico';

const MENU_TELA_PRINCIPAL = 'tela-principal';
const MENU_TELA_CLIENTE = 'tela-cliente';
const MENU_TELA_CONTATO = 'tela-contato';
const MENU_TELA_EMPRESA = 'tela-empresa';
const MENU_TELA_SERVICO = 'tela-servico';

export default class App extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ id: MENU_TELA_PRINCIPAL }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case MENU_TELA_PRINCIPAL:
              return (<TelaPrincipal navigator={navigator} />);
              
            case MENU_TELA_CLIENTE:
              return (<TelaCliente navigator={navigator} />);
            
            case MENU_TELA_CONTATO:
              return (<TelaContato navigator={navigator} />);

             case MENU_TELA_EMPRESA:
              return (<TelaEmpresa navigator={navigator} />);

            case MENU_TELA_SERVICO:
              return (<TelaServico navigator={navigator} />);

            default:
              return (<TelaPrincipal navigator={navigator} />);
          }
        }}
      />       
    );
  }
}

AppRegistry.registerComponent('app5', () => App);
