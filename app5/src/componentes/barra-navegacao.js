import React, { 
    Component 
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

const imgBtnVoltar = require('../imgs/btn_voltar.png');

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#E0E0E0',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    txtTitulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center'        
    } 
});

export default class BarraNavegacao extends Component {
    render() {
        if (this.props.isExibirBtnVoltar) {
            return (
                <View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
                    <TouchableHighlight
                        underlayColor={this.props.corDeFundo}
                        activeOpacity={0.3}
                        onPress={() => {
                            this.props.navigator.pop();
                        }}
                    >
                        <Image source={imgBtnVoltar} />
                    </TouchableHighlight>                    
                
                    <Text style={styles.txtTitulo}> 
                        ATM Consultoria
                    </Text>
                </View>
            );
        } 
        
        return (
            <View style={styles.barraTitulo}>
                <Text style={styles.txtTitulo}> 
                    ATM Consultoria
                </Text>
            </View>
        );       
    }
} 