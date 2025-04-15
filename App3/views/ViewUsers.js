import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import config from '../config/config.json';
import { css } from '../assets/Css';

export default function ViewUsers({ navigation }) {
    const [users, setUsers] = useState([]); // Estado para armazenar os usuários
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

    useEffect(() => {
        // Função para buscar usuários do backend
        const fetchUsers = async () => {
            try {
                const response = await fetch(config.urlRootNode + 'Users');
                const data = await response.json();
                setUsers(data); // Atualiza o estado com os usuários recebidos
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setLoading(false); // Para de mostrar o indicador de carregamento
            }
        };

        fetchUsers(); // Chama a função quando o componente é montado
    }, []); // O array vazio [] garante que a requisição seja feita apenas uma vez ao carregar o componente

    if (loading) {
        return (
            <View style={css.container}>
                <ActivityIndicator size="large" color="#007BFF" /> {/* Exibe o indicador de carregamento */}
                <Text>Carregando usuários...</Text>
            </View>
        );
    }

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
