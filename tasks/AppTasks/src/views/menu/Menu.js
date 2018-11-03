import React from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { DrawerItems } from 'react-navigation'
import CustomStyle from '../../CustomStyle';

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    title: {
        backgroundColor: '#FFF',
        color: '#000',
        fontFamily: CustomStyle.fontfamily,
        fontSize: 30,
        paddingTop: 20,
        padding: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#AAA',
        borderRadius: 30,
        margin: 10
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontFamily: CustomStyle.fontfamily,
        color: CustomStyle.colors.mainText,
        fontSize: 20,
        marginLeft: 10
    },
    email: {
        fontFamily: CustomStyle.fontfamily,
        color: CustomStyle.colors.subText,
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10
    }
})

export default props =>
    <ScrollView>
        <View
            style={styles.header}>
            <Text 
                style={styles.title}>
                Tasks
            </Text>

            <Gravatar
                style={styles.avatar}
                options={{
                    email: props.navigation.getParam('email'),
                    secure: true
                }}
            />
            <View 
                style={styles.userInfo}>
                <View>
                    <Text
                        style={styles.name}>
                        {props.navigation.getParam('name')}   
                    </Text>

                    <Text
                        style={styles.email}>
                        {props.navigation.getParam('email')}   
                    </Text>
                </View>
            </View>
        </View>
        <DrawerItems {...props} />
    </ScrollView>