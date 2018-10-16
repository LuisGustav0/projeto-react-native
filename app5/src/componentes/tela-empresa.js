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

const imgMensagem = require('../imgs/detalhe_empresa.png');

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
        color: '#EC7148',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheEmpresa: {
        fontSize: 14
    }
});

export default class TelaEmpresa extends Component {
    render() {
        return (             
            <View style={styles.painel}>
                <StatusBar backgroundColor='#EC7148' />

                <BarraNavegacao 
                    isExibirBtnVoltar navigator={this.props.navigator} 
                    corDeFundo={'#EC7148'} 
                />

                <View style={styles.row}>
                    <Image source={imgMensagem} />
                    <Text style={styles.txtTiulo}>
                       A Empresa
                    </Text>
                </View>

                <View style={styles.detalheEmpresa}>
                    <Text style={styles.txtDetalheEmpresa}>
                        A ATM Consultoria está no mercado a mais de 20 anos...
                    </Text>
                </View>
            </View>
        );
    }
} 