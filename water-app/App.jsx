import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import TelaInicial from "./screens/TelaInicial";
import TelaDecisao from "./screens/TelaDecisao";
import MapaMundi from "./screens/MapaMundi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{
            title: 'Water floW',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TelaDecisao"
          component={TelaDecisao}
          options={{
            title: 'Eai qual vai ser?',
            headerShown: false,
          }}
        />
        <Stack.Screen                      
          name="MapaMundi"
          component={MapaMundi}
          options={{
            title: 'Water floW',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}