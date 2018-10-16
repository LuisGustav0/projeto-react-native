import React, { 
    Component 
} from 'react';
import {
    ScrollView,
    View,
    Image,
    StatusBar,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import BarraNavegacao from './barra-navegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

const styles = StyleSheet.create({
    painel: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    logo: {
        alignItems: 'center',
        margin: 20
    },
    menu: {
        alignItems: 'center'        
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imagem: {
        margin: 15
    }
});

export default class TelaPrincipal extends Component {
    render() {
        return ( 
            <ScrollView style={styles.painel}>
                <StatusBar backgroundColor='#E0E0E0' />

                <BarraNavegacao />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({
                                    id: 'tela-cliente'
                                });
                            }}
                        >
                            <Image style={styles.imagem} source={menuCliente} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({
                                    id: 'tela-contato'
                                });
                            }}
                        >
                            <Image style={styles.imagem} source={menuContato} />
                        </TouchableHighlight>
                    </View>                    
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({
                                    id: 'tela-empresa'
                                });
                            }}
                        >
                            <Image style={styles.imagem} source={menuEmpresa} />
                        </TouchableHighlight>

                        <TouchableHighlight
                                underlayColor={'#19D1C8'}
                                activeOpacity={0.3}
                                onPress={() => {
                                    this.props.navigator.push({
                                        id: 'tela-servico'
                                    });
                                }}
                        >
                            <Image style={styles.imagem} source={menuServico} />
                        </TouchableHighlight>                        
                    </View>                
                </View>
            </ScrollView>
        );
    }
} 