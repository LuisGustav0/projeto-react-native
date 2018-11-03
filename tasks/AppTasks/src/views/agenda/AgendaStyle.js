import { StyleSheet } from 'react-native'
import CustomStyle from '../../CustomStyle'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: this.fontFamily,
        color: CustomStyle.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: this.fontFamily,
        color: CustomStyle.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    taksContainer: {
        flex: 7,
    },
    iconBar: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})