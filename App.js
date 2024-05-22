import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Estudiantes from '../nav Will/src/data/estudiantes';
import Estudiantes from '../nav Will/src/screens/Estudiantes';
import Comidas from '../nav Will/src/screens/comida';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


/*Importación de las dependencias para crear la navegación */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';




/* Importación de las pantallas */
import Pantalla1 from '../nav Will/src/screens/Pantalla1';
import Pantalla2 from './src/screens/Pantalla2';
import Ejercicio from './src/screens/Ejercicio';
import Indicaciones from './src/screens/Indicaciones';
import Paleta from './src/screens/Paleta';
import Estudiantes_pantalla from './src/screens/Estudiantes';
import comida from './src/screens/comida';

const Tab = createBottomTabNavigator();
 
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
 
              if (route.name === 'Estudiantes') {
                iconName = 'school';
              } else if (route.name === 'comida') {
                iconName = 'food';
              }
 
              return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Estudiantes" component={Estudiantes} options={{ headerShown: false }}/>
          <Tab.Screen name="Comidas" component={Comidas} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
