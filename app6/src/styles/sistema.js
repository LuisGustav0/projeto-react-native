import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
    textView: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textButton: {
        color: '#FFF'
    },  
    button: {
        marginTop:20,
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#40C4FF',
        padding: 10
    },
    input: {
        height: 70,
        fontSize: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    fonte40: {
        fontSize: 40
    }
});