//Import
import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';
//Formatações
const Estilos = {
  principal: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#FFF'
  }
};
//Functions 
const onGerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //Frases
  var frases = Array();
  frases[0] = 'Cuidado com as voltas que o mundo dá. Hoje você lança as palavras, amanhã sente o efeito delas';
  frases[1] = 'O tempo deixa perguntas, mostra respostas, esclarece dúvidas, mas, acima de tudo, o tempo traz verdades.';
  frases[2] = 'Cada escolha, uma oportunidade.';
  frases[3] = 'Cada queda, um aprendizado';
  frases[4] = 'Cada atitude, uma consequência.';

  Alert.alert('Frase do dia aleatório', frases[numeroAleatorio]);
};
//Criar componente
const App = () => {
    const {
      principal,
      botao,
      textoBotao
    } = Estilos;

    return (
      <View style={principal}>
        <Image
          source={require('./imgs/logo.png')}>          
        </Image>

        <TouchableOpacity 
          style={botao}
          onPress={onGerarNovaFrase}>          
          <Text style={textoBotao}>          
            Nova frase
          </Text>
        </TouchableOpacity>
      </View>
    );
};
//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
