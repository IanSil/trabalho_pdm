import { TextInput, StyleSheet } from 'react-native';

export default function CampoTexto({ valor, aoAlterarTexto }) {

  return (
    <TextInput style={estilos.entrada} value={valor} onChangeText={aoAlterarTexto} />
  );
  
}

const estilos = StyleSheet.create({
  entrada: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
});