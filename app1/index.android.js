import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button
  
} from 'react-native';

const gerarNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);

  alert('Numero aleatório gerado: ' + numeroAleatorio);
};

const App = () => {
    return (
      <View>
        <Text>
          My first project App1
        </Text>

        <Button
          title="Gerar um numero randômico!!!"
          onPress={gerarNumeroAleatorio}
        />
      </View>    
    );
};

AppRegistry.registerComponent('app1', () => App);
