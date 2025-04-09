import React, { useState, useEffect } from 'react';
import config from "../config/config.json";
import { Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { css } from '../assets/Css';

export default function Cadastro({ navigation }) {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    async function registerUser() {
        let reqs = await fetch(config.urlRootNode + 'create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password,
                emailUser: email
            })
        });
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={css.container}>
                <Image style={css.header_img}
                    source={require('../assets/favicon.png')} />

                <View style={css.footer}>
                    <TextInput
                        style={css.input}
                        placeholder='Digite seu nome'
                        onChangeText={(text) => setUser(text)}
                    />
                    <TextInput
                        style={css.input}
                        placeholder='Digite seu email'
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={css.input}
                        placeholder='Digite a senha'
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <TouchableOpacity style={css.button} onPress={registerUser}>
                        <Text style={css.button_text}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

