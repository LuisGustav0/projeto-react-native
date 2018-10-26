import React from 'react'
import { 
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import CustomStyle from '../../CustomStyle'
import TaskStyle from './TaskStyle'

import Swipeable from 'react-native-swipeable'

export default props => {
    let check = null

    if (props.doneAt !== null) {
        check = (
            <View style={TaskStyle.done}> 
                <Icon 
                    name='check' 
                    size={20} 
                    color={CustomStyle.colors.secondary}
                />
            </View>
        )
    } else {
        check = <View style={TaskStyle.pending} />
    }

    const descriptionStyle = props.doneAt !== null ? { textDecorationLine: 'line-through' } : {}

    const leftContent = (
        <View style={TaskStyle.exclude}>
            <Icon 
                name='trash' 
                size={20} 
                color='#FFF' />
            
            <Text style={TaskStyle.excludeText}>
                Excluir
            </Text>
        </View>
    )

    const rightContent = [
        <TouchableOpacity
            style={[TaskStyle.exclude, { justifyContent: 'flex-start', paddingLeft: 20 }]}
            onPress={() => 
                props.onDelete(props.id)
            }
        >
            <Icon 
                name='trash' 
                size={30}
                color='#FFF' />
        </TouchableOpacity>,
    ]

    return (
        <Swipeable 
            leftActionActivationDistance={200}
            onLeftActionActivate={() => 
                props.onDelete(props.id)
            }
            leftContent={leftContent} 
            rightButtons={rightContent}
        >
            <View style={TaskStyle.container}>        
                <TouchableWithoutFeedback   
                    onPress={() => 
                        props.onToggleTask(props.id)
                    }>
                    <View style={TaskStyle.checkContainer}>
                        {check}
                    </View>
                </TouchableWithoutFeedback>

                <View>
                    <Text style={[
                        TaskStyle.description, 
                        descriptionStyle
                    ]}>
                        {props.description}
                    </Text>

                    <Text style={TaskStyle.date}>
                        {moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
}