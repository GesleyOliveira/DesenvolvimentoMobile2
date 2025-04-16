import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import config from '../config/config.json';
import { css } from '../assets/Css';

export default function ViewUsers({ navigation }) {
    const [users, setUsers] = useState([]); // Estado para armazenar os usuários
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

    // Função para buscar usuários cadastrados do backend
    async function useEffect(){
            try {
                let response = await fetch(config.urlRootNode + 'Users');
                let data = await response.json();
                setUsers(data); // Atualiza o estado com os usuários recebidos
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setLoading(false); // Para de mostrar o indicador de carregamento
            }
        };

        useEffect(() => { // Chama a função quando o componente é montado
            fetchUsers();
    }, []); // O array vazio [] garante que a requisição seja feita apenas uma vez ao carregar o componente

        return (
            <View style={css.container}>
                <Text style={css.style}>Lista de Usuários</Text>

                (loading ? (
                    <ActivityIndicator size="large" color="#0000ff" /> 

                ) : (
                    <ScrollView style={{ marginTop: 20 }}>
                        (users.length > 0 ? (
                            users.map((user, index) => (
                                <View key={index} style={css.card}>
                                    <Text style={{ fontWeight: 'bold' }}>Nome: {user.name}</Text>
                                    <Text>Email: {user.email}</Text>
                                    <Text>Data de Cadastro:
                                        {new Date(user.createdAt).toLocaleString()}
                                    </Text>
                                </View>
                            ))
                        ) : (
                            <Text style={{ textAlign: 'center', marginTop: 20 }}>
                                Nenhum Usuário Cadastrado
                            </Text>
                        ))
                    </ScrollView>
                ))
            </View>
        );

    return (
        <ScrollView style={css.container}>
            {users.length > 0 ? (
                users.map((user) => (
                    <View key={user.id} style={css.userCard}>
                        <Text style={css.userName}>{user.nameUser}</Text>
                        <Text style={css.userEmail}>{user.emailUser}</Text>
                        <TouchableOpacity
                            style={css.viewButton}
                            onPress={() => navigation.navigate('UserDetails', { userId: user.id })}
                        >
                            <Text style={css.buttonText}>Ver Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                ))
            ) : (
                <Text style={css.noUsersText}>Nenhum usuário encontrado.</Text>
            )}
        </ScrollView>
    );
}
