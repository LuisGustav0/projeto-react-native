import React, { 
    Component
  } from 'react';
  
  import {
    View,
    Image,
    Text,
    StyleSheet
  } from 'react-native';

const imagemPedra = require('../../imgs/pedra.png');
const imagemPapel = require('../../imgs/papel.png');
const imagemTesoura = require('../../imgs/tesoura.png');
  
const IMAGEM_ESCOLHA = {
  pedra: imagemPedra,
  papel: imagemPapel,
  tesoura: imagemTesoura
};

const styles = StyleSheet.create({
        icone: {
        alignItems: 'center',
        marginBottom: 20
        },
        txtJogador: {
        fontSize: 20
        }
    });

export default class Icone extends Component {
    render() {
      const strImage = IMAGEM_ESCOLHA[this.props.escolha];
  
      if (this.props.escolha) {
        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>
             {this.props.jogador}
            </Text> 
  
            <Image source={strImage} />
          </View>
        );
      }
        
      return false;
    }
}