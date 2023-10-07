import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import TelaInicial from "./screens/TelaInicial";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{
            title: 'Water floW',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}