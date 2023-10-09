import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import TelaInicial from "./screens/TelaInicial";
import TelaDecisao from "./screens/TelaDecisao";
import MapaMundi from "./screens/MapaMundi";
import Brasil from "./screens/Countries/Brasil";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapaMundi">
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
            title: 'Water floW',
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
        <Stack.Screen                      
          name="Brasil"
          component={Brasil}
          options={{
            title: 'Water floW',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}