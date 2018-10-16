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

const imgMensagem = require('../imgs/detalhe_servico.png');

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
        color: '#19D1C8',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContato: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheContato: {
        fontSize: 18
    }
});

export default class TelaServico extends Component {
    render() {
        return (             
            <View style={styles.painel}>
                <StatusBar backgroundColor='#19D1C8' />

                <BarraNavegacao isExibirBtnVoltar navigator={this.props.navigator} corDeFundo={'#19D1C8'} />

                <View style={styles.row}>
                    <Image source={imgMensagem} />
                    <Text style={styles.txtTiulo}>
                       Nossos Serviços
                    </Text>
                </View>

                <View style={styles.detalheContato}>
                    <Text style={styles.txtDetalheContato}>
                        - Consultoria
                    </Text>

                    <Text style={styles.txtDetalheContato}>
                        - Processos
                    </Text>

                    <Text style={styles.txtDetalheContato}>
                        - Acompanhamento de projetos
                    </Text>
                </View>
            </View>
        );
    }
} 