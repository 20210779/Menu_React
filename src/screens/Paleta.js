// screens/HomeScreen.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Boton from '../components/Boton';

const Paleta = ({ navigation }) => {
    const irPantalla1 = () => {
        navigation.navigate('Pantalla1');
    };
  return (
    <View style={styles.Contenedor}>
      <Text>Soy Paleta</Text>
      <Boton
        textoBoton='Regresar a Inicio'
        accionBoton={irPantalla1}     
      />
    </View>
  );
};

export default Paleta;

const styles = StyleSheet.create({
  Contenedor: {
    marginVertical: 10,
  },
  Titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 5,
  },
  cont: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "aliceblue",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  borde: {
    flex: 1,
    borderRadius: 4,
    textAlign: "left",
    paddingLeft: 10,
    borderColor: "grey",
    borderWidth: 1,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 13,
  },
  taskRow: {
    backgroundColor:'white',
    flexDirection: "row",
    paddingVertical: 4,
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5
  },
  deleteButton: {
    padding: 5,
    color:'red',
    borderRadius: 4,
    marginLeft:10,
    marginRight: 10,
  },
  deleteButtonText: {
    color: "red",
    fontSize:20,
    fontWeight: "bold"
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
})







