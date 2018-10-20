import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableHighlight
} from 'react-native'
import styles from '../styles/sistema'

export default class Contador extends Component {    

    state = {
        numero: this.props.numero || 0
    }

    onIncrementar() {
        this.setState({
            numero: ++this.state.numero
        });
    }

    onLimpar() {
        this.setState({
            numero: 0
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textView}>
                    {this.state.numero}
                </Text>

                <TouchableHighlight 
                    style={styles.button}
                    onPress={() => this.onIncrementar()}
                    onLongPress={() => this.onLimpar()}
                >
                    <Text style={styles.textButton}>
                        Imcrementar/Zerar
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}