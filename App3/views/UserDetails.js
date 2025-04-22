import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import config from '../config/config.json';

export default function UserDetails({ route }) {
    const { userId } = route.params;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`${config.urlRootNode}User/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do usuário:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [userId]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007BFF" />
                <Text>Carregando detalhes do usuário...</Text>
            </View>
        );
    }

    if (!user) {
        return (
            <View style={styles.center}>
                <Text>Usuário não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{user.name}</Text>

            <Text style={styles.label}>E-mail:</Text>
            <Text style={styles.value}>{user.email}</Text>

            <Text style={styles.label}>ID:</Text>
            <Text style={styles.value}>{user.id}</Text>

            {/* Adicione mais informações conforme a estrutura do seu banco */}
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333',
    },
    value: {
        fontSize: 16,
        marginBottom: 10,
        color: '#666',
    },
});
