import React from 'react'
import { 
    View,
    Text 
} from 'react-native'

const fonte = { style: { fontSize: 30 } }

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props =>
    <View>
        <Text {...fonte}>
            Filho: {props.nome} {props.sobrenome}
        </Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>
            Pai: {props.nome} {props.sobrenome}
        </Text>
        {/* {props.children} */}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>
            Avô: {props.nome} {props.sobrenome}
        </Text>
        <Pai nome='Cicero' sobrenome={props.sobrenome}>
            <Filho nome='Lucas' />
            <Filho nome='Luis' />
            <Filho nome='Sarah' />
        </Pai>
        <Pai {...props} nome='Aristides'>
            <Filho nome='Henrique' />
            <Filho nome='Clara' />
        </Pai>
    </View>

export default Avo