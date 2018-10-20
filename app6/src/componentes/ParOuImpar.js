import React from 'react'
import { 
    View,
    Text 
} from 'react-native'
import styles from '../styles/sistema'

function parOuImpar(num) {
    // if(num % 2 == 0) {
    //     return <Text style={styles.textView}>Par</Text>
    // } else {
    //     return <Text style={styles.textView}>Impar</Text>
    // }
    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={styles.textView}>{v}</Text>
}

export default props =>
    <View>
        {parOuImpar(props.numero)}
        {/* {
            props.numero % 2 == 0
            ? <Text style={styles.textView}>Par</Text>
            : <Text style={styles.textView}>Impar</Text>
        } */}
    </View>