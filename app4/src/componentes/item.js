import React, { 
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    foto: {
        width: 102,
        height: 102
    },
    detalheItem: {
        flex: 1,
        marginLeft: 20
    },
    titulo: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    txtTitulo: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    }
});

export default class Item extends Component {
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: this.props.item.foto }} />
                </View>

                <View style={styles.detalheItem}>
                    <Text style={styles.txtTitulo}>
                        {this.props.item.titulo}
                    </Text>

                    <Text>
                        <Text style={styles.titulo}>
                            R$ 
                        </Text>
                        {this.props.item.valor}
                    </Text>
                    
                    <Text>
                        <Text style={styles.titulo}>
                            Local:
                        </Text>
                        {this.props.item.local_anuncio}
                    </Text>

                    <Text>
                        <Text style={styles.titulo}>
                            Dt publicação:
                        </Text>
                         {this.props.item.data_publicacao}
                    </Text>
                </View>
            </View>
        );
    }  
}