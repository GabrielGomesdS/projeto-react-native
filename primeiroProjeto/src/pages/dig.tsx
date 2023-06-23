import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import axios from "axios";

export default function Dig() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");


  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`viacep.com.br/ws/${cep}/json/`); // Substitua "https://api.exemplo.com/cep" pela URL correta da sua API
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
      setEndereco(response.data);
      setErro("");
    } catch (error) {
      setEndereco(null);
      setErro("CEP não encontrado.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Buscar CEP</Text>
      <TextInput
        style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Buscar" onPress={buscarEndereco} />
      {erro ? <Text style={{ marginTop: 20, color: 'red' }}>{erro}</Text> : null}
      {endereco && (
        <View style={{ marginTop: 20 }}>
          <TextInput
          style={{
            borderColor: "#000000",
            borderWidth: 2,
            padding: 15,
            fontSize: 18,
            borderRadius: 10,
            marginTop: 10,
            marginHorizontal: 20
          }}
          value={logradouro}
          onChangeText={(texto) => setLogradouro(texto)}
          placeholder="Logradouro"

          />
          <TextInput
          style={{
            borderColor: "#000000",
            borderWidth: 2,
            padding: 15,
            fontSize: 18,
            borderRadius: 10,
            marginTop: 10,
            marginHorizontal: 20
          }}
          value={bairro}
          onChangeText={(texto) => setBairro(texto)}
          placeholder="Bairro"
          />
          <TextInput
          style={{
            borderColor: "#000000",
            borderWidth: 2,
            padding: 15,
            fontSize: 18,
            borderRadius: 10,
            marginTop: 10,
            marginHorizontal: 20
          }}
          value={localidade}
          onChangeText={(texto) => setLocalidade(texto)}
          placeholder="Cidade"
          />
          <TextInput
          style={{
            borderColor: "#000000",
            borderWidth: 2,
            padding: 15,
            fontSize: 18,
            borderRadius: 10,
            marginTop: 10,
            marginHorizontal: 20
          }}
          value={uf}
          onChangeText={(texto) => setUf(texto)}
          placeholder="Estado"
          />
        </View>
      )}
    </View>
  );
}
