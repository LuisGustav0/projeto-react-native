import React, { Component } from 'react';
import {
  View,
  Button  
} from 'react-native';
import firebase from 'firebase';

const AUTH_INVALID_EMAIL = 'auth/invalid-email';
const AUTH_USER_DISABLED = 'auth/user-disabled';
const AUTH_USER_NOT_FOUND = 'auth/user-not-found';
const AUTH_WRONG_PASSWORD = 'auth/wrong-password';
const AUTH_WEAK_PASSWORD = 'auth/weak-password';

export default class App extends Component {
  constructor(props) {
    super(props);
  } 

  componentDidMount() {  
    var config = {
      apiKey: "AIzaSyCbSfviYLIY7b_vZ4e2AjEzPVJk4vZqb14",
      authDomain: "projeto-teste-454b6.firebaseapp.com",
      databaseURL: "https://projeto-teste-454b6.firebaseio.com",
      projectId: "projeto-teste-454b6",
      storageBucket: "projeto-teste-454b6.appspot.com",
      messagingSenderId: "40153458616"
    };

    firebase.initializeApp(config);
  }

  onCadastrarUsuario() {
    var email = 'luis.gustav0@live.com';
    var senha = 'luis12345';

    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(
        email, 
        senha
    ).catch((erro) => {
      var mensagemError = '';

      switch (erro.code) {
        case AUTH_WEAK_PASSWORD:
          mensagemError = 'A senha precisa ter no mínimo 6 caracteres!';
        break;
      }

      alert(mensagemError);
    });
  }

  onVerificarUsuarioLogado() {
    const usuario = firebase.auth();
    usuario.onAuthStateChanged((usuarioLogado) => {
      alert(usuarioLogado ? 'Usuário logado: ' + usuarioLogado.email : 'Usuário não logado!');
    });
  }

  render() {
    return (
      <View>
        <Button
          title="Cadastrar usuário"
          onPress={() => {
            this.onCadastrarUsuario();
          }}
        />

        <Button
          title="Verificar usuário"
          onPress={() => {
            this.onVerificarUsuarioLogado();
          }}
        />
      </View>
    );
  }
}