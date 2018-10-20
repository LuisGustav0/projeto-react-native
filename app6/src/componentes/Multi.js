import React from 'react'
import { Text } from 'react-native'
import styles from '../styles/sistema'

const Inverter = props => {
    const strInvertido = props.texto.split('').reverse().join('')
    
    return <Text style={styles.textView}>
                {strInvertido}
            </Text>
}

const MegaSena = props => {
    const [min, max] = [1, 60]
    const numero = Array(props.numero || 6).fill(0)

    for (let i = 0; i < numero.length; i++) {
        let novo = 0
        while (numero.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numero[i] = novo
    }

    numero.sort((a, b) => a - b)
    return <Text style={styles.textView}>
                {numero.join(', ')}
            </Text>
}

export default Inverter
export { Inverter, MegaSena }