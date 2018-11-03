import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'

import axios from 'axios'
import {
    server,
    showError
} from '../../common'

import backgroundImage from '../../../assets/imgs/login.jpg'
import InputText from '../../componentes/inputText/InputText'

import CustomStyle from '../../CustomStyle';

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

    onCadastrarUsuario = async () => {
        try {
            await axios.post(`${server}/user`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })

            Alert.alert('Sucesso!', 'Usuário cadastrado.')
            this.setState({
                stageNew: false
            })
        } catch (err) {
            showError(err)
        }
    }

    onSignup = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            })

            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.navigation.navigate('Home')
        } catch (err) {
            showError(err)
        }
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.onCadastrarUsuario()
        } else {
            this.onSignup()
        }
    }

    render() {
        const validations = [];
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim())
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)
        }        

        const validForm = validations.reduce((all, v) => all && v)

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
                        <InputText
                            icon='user'
                            placeholder='Nome'
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    }

                    <InputText
                        icon='at'
                        placeholder='E-Mail'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />

                    <InputText
                        icon='lock'
                        secureTextEntry={true}
                        placeholder='Senha'
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />

                    {
                        this.state.stageNew &&
                        <InputText
                            icon='lock'
                            secureTextEntry={true}
                            placeholder='Confirmação'
                            style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        />
                    }

                    <TouchableOpacity 
                        disabled={!validForm}
                        onPress={this.signinOrSignup}>
                        <View 
                            style={[styles.button,
                                     !validForm ? { backgroundColor: '#AAA' } : {}
                            ]}>
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