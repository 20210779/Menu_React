import React from "react";
import { View, TouchableOpacity,FlatList, Dimensions,StyleSheet, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import creadorData from "../data/creador";
import comida from "../data/Comida";
import Boton from "../components/Boton";
import RNPickerSelect from "react-native-picker-select";

const Comidas = ({ navigation }) => {
  const informacion = comida;
  const creador = creadorData[0];
  const irPantalla1 = () => {
    navigation.navigate("Pantalla1");
  };
  const irEjercicio = () => {
    navigation.navigate("Ejercicio");
  };

  const irIndicaciones = () => {
    navigation.navigate("Indicaciones");
  };

  const irPaleta = () => {
    navigation.navigate("Paleta");
  };
  const irEstudiantes = () => {
    navigation.navigate("Estudiantes");
  };


  const opciones = (opcion) => {
    switch (opcion) {
      case 1:
        // Código a ejecutar si opcion es igual a 1
        navigation.navigate("Pantalla1");
        break;
      case 2:
        // Código a ejecutar si opcion es igual a 2
        navigation.navigate("Indicaciones");
        break;
      case 3:
        // Código a ejecutar si opcion es igual a 3
        navigation.navigate("Ejercicio");
        break;
      case 4:
        // Código a ejecutar si opcion es igual a 4
        navigation.navigate("Paleta");
        break;
        case 5:
        // Código a ejecutar si opcion es igual a 4
        navigation.navigate("Estudiantes");
        break;
      // Puedes añadir más casos según sea necesario
      default:
      // Código a ejecutar si ninguno de los casos anteriores coincide con el valor de opcion
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={informacion}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={item.src} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.carnet}>{item.title}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default Comidas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingTop: 20,
    marginTop: StatusBar.currentHeight || 20,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Dimensions.get("window").width - 40,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    color: "#666",
  },
});
