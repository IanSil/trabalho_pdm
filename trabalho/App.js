import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { ROTULOS } from './constantes/rotulos';
import CampoTexto from './componentes/CampoTexto';
import UsuarioItem from './componentes/UsuarioItem';

export default function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuario = () => {

    if (nome && telefone) {
      setUsuarios([...usuarios, { nome, telefone }]);

      setNome('');

      setTelefone('');
    }

  };

  return (
    <View style={estilos.container}>
      
      <Text style={estilos.titulo}>{ROTULOS.titulo}</Text>

      <View style={estilos.linhaFormulario}>
        <View style={estilos.colunaEsquerda}>
          <Text style={estilos.rotulo}>{ROTULOS.nome}</Text>

          <Text style={estilos.rotulo}>{ROTULOS.telefone}</Text>

        </View>
        <View style={estilos.colunaDireita}>
          <CampoTexto valor={nome} aoAlterarTexto={setNome} />

          <CampoTexto valor={telefone} aoAlterarTexto={setTelefone} />

          <Pressable onPress={adicionarUsuario} style={estilos.botao}>
            <Text style={estilos.textoBotao}>{ROTULOS.botao}</Text>
          </Pressable>
        </View>
      </View>

      <View style={estilos.separador} />

      <View style={estilos.cabecalho}>
        <Text style={estilos.celulaCabecalho}>{ROTULOS.tabelaNome}</Text>
        <Text style={estilos.celulaCabecalho}>{ROTULOS.tabelaTelefone}</Text>
      </View>

      <ScrollView style={estilos.areaRolagem}>
        {usuarios.map((usuario, index) => (
          <UsuarioItem key={index} nome={usuario.nome} telefone={usuario.telefone} />
        ))}
      </ScrollView>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  linhaFormulario: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colunaEsquerda: {
    marginRight: 10,
  },
  colunaDireita: {
    flex: 1,
  },
  rotulo: {
    fontWeight: 'bold',
    marginBottom: 18,
  },
  botao: {
    marginTop: 8,
    width: '100%',
    backgroundColor: '#add8e6',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
  separador: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginVertical: 12,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  celulaCabecalho: {
    fontWeight: 'bold',
    flex: 1,
  },
  areaRolagem: {
    flex: 1,
  },
});
