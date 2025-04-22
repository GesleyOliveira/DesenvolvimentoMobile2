import React, {useState} from 'react';
import config from '../config/config.json';
import { Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Alert, Platform } from 'react-native';
import { css } from '../assets/Css';
import { showAlert } from '../utils/alert';

export default function Register({navigation}) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function registerUser(){
        if (!user || !password || !email) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch(config.urlRootNode + 'create', {
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

            const data = await response.json();
            showAlert('Sucesso',  data);


            // Limpar os campos
            setUser('');
            setPassword('');
            setEmail('');
            Keyboard.dismiss();

        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            showAlert('Erro',  error);
        }
    };

    return(
        <TouchableWithoutFeedback onPress={() => {
            if (Platform.OS !== 'web') Keyboard.dismiss();
        }}>        
            <View style={css.container}>

                <View style={css.header}>
                    <Image style={css.header_img} source={require('../assets/favicon.png')}/>
                </View>

                <View style={css.footer}>
                    <TextInput
                        style={css.input}
                        placeholder='Digite o seu Nome'
                        value={user}
                        onChangeText={setUser}
                    />

                    <TextInput
                        style={css.input}
                        placeholder='Digite o seu E-mail'
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={css.input}
                        placeholder='Digite a Senha'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity style={css.button} onPress={registerUser}>   
                        <Text style={css.button_text}>Enviar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}
