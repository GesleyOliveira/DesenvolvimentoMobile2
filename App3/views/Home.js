import React, { useEffect } from 'react'
import { Image, Viw, TouchableOpacity, Text } from 'react-native'
import { css } from '../assets/Css'
 
export default function Home({ navigation }) {
    return (
        <View style={css.container}>
            <View style={css.header}>
                <Image style={css.header_img} source={require('../assets/favicon.png')} />
            </View>
 
            <View style={css.footer}>
                <TouchableOpacity
                    style={css.button}
                    onPress={() => navigation.navigate('Cadastro')}
                >
 
                    <Text style={css.buton_text}>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}