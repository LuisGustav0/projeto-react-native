import React, { 
    Component 
} from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import BarraNavegacao from './barra-navegacao';

const imgDetalheCliente = require('../imgs/detalhe_cliente.png');
const imgCliente1 = require('../imgs/cliente1.png');
const imgCliente2 = require('../imgs/cliente2.png');

const styles = StyleSheet.create({
    painel: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    row: {
        flexDirection: 'row',
        margin: 20
    },
    txtTiulo: {
        color: '#B9C941',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente: {
        marginLeft: 20,
        fontSize: 18
    }
});

export default class TelaCliente extends Component {
    render() {
        return (             
            <View style={styles.painel}>
                <StatusBar backgroundColor='#B9C941' />

                <BarraNavegacao isExibirBtnVoltar navigator={this.props.navigator} corDeFundo={'#B9C941'} />

                <View style={styles.row}>
                    <Image source={imgDetalheCliente} />
                    <Text style={styles.txtTiulo}>
                        Nossos clientes
                    </Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={imgCliente1} />
                    <Text style={styles.txtDetalheCliente}>
                        Lorem ipsum dolorem
                    </Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={imgCliente2} />
                    <Text style={styles.txtDetalheCliente}>
                        Lorem ipsum dolorem
                    </Text>
                </View>
            </View>
        );
    }
} 