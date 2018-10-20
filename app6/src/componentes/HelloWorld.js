import React from 'react'
import { Text } from 'react-native'
import styles from '../styles/sistema'

//export default function(props) {
     //return <Text>{props.texto}</Text>
//}

export default props => 
    <Text style={styles.textView}>
      Row 1: {props.texto}
    </Text>