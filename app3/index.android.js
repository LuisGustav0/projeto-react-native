import React, { 
  Component
} from 'react';

import {
  AppRegistry,
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import Topo from './src/componentes/topo';
import Icone from './src/componentes/icone';

const PEDRA = 'pedra';
const PAPEL = 'papel';
const TESOURA = 'tesoura';
const styles = StyleSheet.create({
    painel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
    },
    btnEscolha: {
    width: 90
    },
    palco: {
    alignItems: 'center',
    marginTop: 10
    },
    txtResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    height: 60
    }
});     

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  getEscolhaComputador() {
    //gerar numero aleatorio (0, 1, 3)
    const numeroAleatorio = Math.floor(Math.random() * 3);

    switch (numeroAleatorio) {
        case 0:
          return PEDRA;
        
        case 1:
          return PAPEL;

        case 2:
          return TESOURA;

        default:
          return '';
    }
  }

  getResultadoPorEscolha(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
      return 0;
    }

    switch (escolhaUsuario) {      
      case PEDRA:
        return (escolhaComputador === TESOURA ? 1 : -1);
      
      case PAPEL:
        return (escolhaComputador === PEDRA ? 1 : -1);
      
      case TESOURA:
        return (escolhaComputador === PAPEL ? 1 : -1);     
        
      default:
        return '';   
    }
  }

  getResultado(escolhaUsuario, escolhaComputador) {
    const indexResultado = this.getResultadoPorEscolha(escolhaUsuario, escolhaComputador);
    
    let resultado = '';
    if (indexResultado === 1) {
      resultado = 'Você ganhou!';
    } else if (indexResultado === -1) {
      resultado = 'Você perdeu!';
    } else {
      resultado = 'Empate!';
    }
    return resultado;
  }

  jokenpo(escolhaUsuario) {
    const escolhaComputador = this.getEscolhaComputador();
    const resultado = this.getResultado(escolhaUsuario, escolhaComputador);

    this.setState({
      escolhaUsuario, 
      escolhaComputador,
      resultado
    });
  }

  render() {
    return (    
      <View>   
        <Topo />

        <View style={styles.painel}>
          <View style={styles.btnEscolha}>
            <Button
              title="Pedra"
              onPress={() => {
                this.jokenpo(PEDRA);
                }
              }
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Papel"
              onPress={() => {
                this.jokenpo(PAPEL);
                }
              }
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Tesoura"
              onPress={() => {
                this.jokenpo(TESOURA);
                }
              }
            />
          </View>
        </View>

        <View style={styles.palco}>           
          <Text style={styles.txtResultado}>
            {this.state.resultado}
          </Text>            

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>        
     </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => App);
