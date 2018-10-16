import React, { 
    Component
} from 'react';
import {
    ScrollView,
    StyleSheet
} from 'react-native';
import Axios from 'axios';
import Item from './item';
  
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#E0E0E0'
    }
});

export default class ListaItens extends Component {    
    constructor(props) {
        super(props);

        console.log('iniciando constructor...');
        this.state = {
            listaItens: []
        };
    }

    componentWillMount() {
        console.log('iniciando componentWillMount...');
        Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then(response => {
            if (!response.data) {
                return;
            }
            
            this.setState({
                listaItens: response.data
            });
        })
        .catch(() => {
            console.log('Não foi possui conexão com servidor...');
        });
    } 
    
    componentDidMount() {
        console.log('iniciando componentDidMount...');
    }

    render() {
        console.log('iniciando render...');

        return (
            <ScrollView style={styles.scrollView}>
                {
                    this.state.listaItens.map(itemTO => (
                        <Item key={itemTO.titulo} 
                               item={itemTO}/>
                    ))
                }
            </ScrollView>
        );
    }  
}
  