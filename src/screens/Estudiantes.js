import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import creadorData from "../data/creador";
import estudiantes from "../data/estudiantes";
import Boton from "../components/Boton";

const Estudiante = ({ navigation }) => {
  const informacion = estudiantes;
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
            <Image source={item.foto} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.nombre}</Text>
              <Text style={styles.carnet}>{item.carnet}</Text>
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

export default Estudiante;

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
  carnet: {
    fontSize: 14,
    color: "#666",
  },
});
