import React, {useState, useEffect} from 'react';
import config from '../config/config.json';
import {Image, Keyboard, keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import { css } from '../assets/Css';

export default function Register({navigation}) {
    
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    //Envia os dados do formulário para o backend
    async function registerUser(){
        let reps = await fetch(config.urlRootNode+'create', {
            method: 'POST',
            headers:{
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

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={css.container}>

                <View style={css.header}>
                    <Image style={css.header_img} source={require('../assets/favicon.png')}/>
                </View>

                <View style={css.footer}>
                    <TextInput
                        style={css.input}
                        placeholder='Digite o seu Nome'
                        onChangeText={(text)=> setUser(text)}
                    />

                    <TextInput
                        style={css.input}
                        placeholder='Digite o seu E-mail'
                        onChangeText={(text)=> setEmail(text)}
                    />

                    <TextInput
                        style={css.input}
                        placeholder='Digite a Senha'
                        secureTextEntry={true}
                        onChangeText={(text)=> setPassword(text)}
                    />

                    <TouchableOpacity style={css.button} onPress={registerUser}>   
                        <Text style={css.button_text}>Enviar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </TouchableWithoutFeedback>
    )
}