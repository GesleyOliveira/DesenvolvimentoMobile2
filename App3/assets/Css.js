import { StyleSheet } from "react-native"

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container_center: {
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#09204A',
        padding: 5,
        width: '100%',
        height: '22%',
        paddingTop: 0,
        marginTop: 0
    },
    header_img: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    footer: {
        width: '100%',
        height: '78%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee'
    },
input:{
    borderRadius: 2,
    height: 60,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor: '#ccc',
    width: '80%',
    marginBottom: 20,
    fontSize: 18
},
texto:{
    fontSize: 20,
    textAlign: 'center',
},
textWidth:{
    width: '80%'
},
button:{
    borderRadius: 5,
    backgroundColor: '#065',
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
},
button_text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize: 17
},
    scrollContainer: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    userCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    viewButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    noUsersText: {
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});


export {css};