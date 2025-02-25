import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function Produto({ onSalvarDados }) {
  const [qtd, setQTD] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');

  const handleSalvar = () => {
    if (qtd && produto && valor) {
      onSalvarDados(qtd, produto, valor);
      setProduto('');
      setValor('');
      setQTD('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const limparCampos = () => {
    setQTD('');
    setProduto('');
    setValor('');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>Armazenamento Local</Text>

      <View style={estilos.inputRow}>
        <Text style={estilos.label}>Quantidade</Text>
        <TextInput
          value={qtd}
          onChangeText={setQTD}
          style={[estilos.input, { width: '40%' }]}
          maxLength={6}
          keyboardType="numeric"
          placeholder="Quantidade"
        />
      </View>

      <View style={estilos.inputRow}>
        <Text style={estilos.label}>Produto</Text>
        <TextInput
          value={produto}
          onChangeText={setProduto}
          style={estilos.input}
          placeholder="Nome do produto"
          maxLength={20}
        />
      </View>

      <View style={estilos.inputRow}>
        <Text style={estilos.label}>Valor</Text>
        <TextInputMask
          type={'money'}
          value={valor}
          onChangeText={setValor}
          style={estilos.input}
          placeholder="Valor do produto"
          maxLength={10}
          keyboardType="numeric"
        />
      </View>

      <Text style={estilos.previewText}>Quantidade: {qtd}</Text>
      <Text style={estilos.previewText}>Produto: {produto}</Text>
      <Text style={estilos.previewText}>Valor: {valor}</Text>

      <View style={estilos.buttonContainer}>
        <Button title="Limpar" onPress={limparCampos} color="#dc3545" />
      </View>
      <View style={estilos.buttonContainer}>
        <Button title="Salvar" onPress={handleSalvar} color="#28a745" />
      </View>
      <View style={estilos.buttonContainer}>
        <Button title="Ver Registros Salvos" onPress={() => {}} color="#007bff" />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
  },
  inputRow: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    backgroundColor: '#ffffff',
    marginTop: 5,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
  },
  previewText: {
    fontSize: 16,
    marginTop: 10,
    color: '#495057',
  },
  buttonContainer: {
    marginTop: 15,
    width: '80%',
  },
});
