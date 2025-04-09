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
    backgroundColor: '#111',
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
},
button_text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize: 17
}
});
export {css};