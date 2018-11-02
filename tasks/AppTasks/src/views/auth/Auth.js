import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'

import CustomStyle from '../../CustomStyle';
import backgroundImage from '../../../assets/imgs/login.jpg'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: CustomStyle.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: CustomStyle.fontFamily,
        color: '#FFF',
        fontSize: 20
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: CustomStyle.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})

export default class Auth extends React.Component {
    state = {
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso!', 'Criar conta')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground
                source={backgroundImage}
                style={styles.background}>
                <Text style={styles.title}>
                    Tasks
                </Text>

                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie sua conta' : 'Informe sua conta'}
                    </Text>
                    {
                        this.state.stageNew && 
                        <TextInput
                            placeholder='Nome'
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    }

                    <TextInput
                        placeholder='E-Mail'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />

                    <TextInput
                        placeholder='Senha'
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />

                    {
                        this.state.stageNew && 
                        <TextInput
                            placeholder='Confirmação'
                            style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        />
                    }

                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>    
                </View>

                <TouchableOpacity 
                    style={{ padding: 10 }}
                    onPress={() => {
                       this.setState({
                            stageNew: !this.state.stageNew
                       }) 
                    }}>
                    <View>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Ja possui uma conta?' : 'Ainda não possui uma conta?'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}