import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import config from '../config/config.json';
import { css } from '../assets/Css';

export default function ViewUsers({ navigation }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await fetch(config.urlRootNode + 'Users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${config.urlRootNode}User/${id}`, {
                method: 'DELETE',
            });

            const result = await response.json();
            Alert.alert('Aviso', result.message);

            // Atualiza a lista após deletar
            fetchUsers();
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
        }
    };

    const confirmDelete = (id) => {
        Alert.alert(
            'Confirmar exclusão',
            'Tem certeza que deseja deletar este usuário?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Deletar', style: 'destructive', onPress: () => deleteUser(id) }
            ]
        );
    };


    if (loading) {
        return (
            <View style={css.loadingContainer}>
                <ActivityIndicator size="large" color="#007BFF" />
                <Text style={css.loadingText}>Carregando usuários...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={css.scrollContainer}>
            <Text style={css.title}>Lista de Usuários</Text>
            {users.length > 0 ? (
                users.map((user) => (
                    <View key={user.id} style={css.userCard}>
                        <Text style={css.userName}>{user.name}</Text>
                        <Text style={css.userEmail}>{user.email}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                style={css.viewButton}
                                onPress={() => navigation.navigate('UserDetails', { userId: user.id })}
                            >
                                <Text style={css.buttonText}>Ver Detalhes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[css.viewButton, { backgroundColor: '#dc3545' }]}
                                onPress={() => confirmDelete(user.id)}
                            >
                                <Text style={css.buttonText}>Deletar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={css.noUsersText}>Nenhum usuário encontrado.</Text>
            )}
        </ScrollView>
    );
}
