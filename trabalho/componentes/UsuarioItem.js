import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UsuarioItem({ nome, telefone }) {
  return (

    <View style={estilos.linha}>

      <Text style={estilos.celula}>{nome}</Text>
      <Text style={estilos.celula}>{telefone}</Text>
      
    </View>

  );
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  celula: {
    flex: 1,
  },
});