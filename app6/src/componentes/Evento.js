import React, { Component } from 'react'
import { 
    View,
    Text,
    TextInput
} from 'react-native'
import styles from '../styles/sistema'

export default class Evento extends Component {
    state = {
        texto: ''
    }

    onChangeTexto = texto => {
        this.setState({
           texto
        })
    }

    render() {
        return (
            <View> 
                <Text style={styles.fonte40}> 
                    {this.state.texto}
                </Text>
                
                <TextInput 
                    style={styles.input}
                    value={this.state.texto}
                    onChangeText={this.onChangeTexto}
                />
            </View>
        );
    }
}