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

const imgMensagem = require('../imgs/detalhe_contato.png');

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
        color: '#61BD8C',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 35
    },
    detalheContato: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheContato: {
        fontSize: 18
    }
});

export default class TelaContato extends Component {
    render() {
        return (             
            <View style={styles.painel}>
                <StatusBar backgroundColor='#61BD8C' />

                <BarraNavegacao isExibirBtnVoltar navigator={this.props.navigator} corDeFundo={'#61BD8C'} />

                <View style={styles.row}>
                    <Image source={imgMensagem} />
                    <Text style={styles.txtTiulo}>
                       Contatos
                    </Text>
                </View>

                <View style={styles.detalheContato}>
                    <Text style={styles.txtDetalheContato}>
                        TEL: (11) 1234-1234
                    </Text>

                    <Text style={styles.txtDetalheContato}>
                        TEL: (11) 91234-1234
                    </Text>

                    <Text style={styles.txtDetalheContato}>
                        EMAIL: contato@atmconsultoria.com
                    </Text>
                </View>
            </View>
        );
    }
} 