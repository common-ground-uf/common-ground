import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens/Login';
import { Signup } from './screens/Signup';
import { ForgorPassword } from './screens/ForgorPassword💀';
import { RestaurantScreen } from './screens/RestaurantScreen';
import { RestaurantList } from './screens/RestaurantList';
import React from 'react';
import {tacoBell} from './data/dummyData';
import { Restaurant } from './commonTypes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Restaurant List"
          component={RestaurantList}
          initialParams={{restaurantList:Array<Restaurant>(10).fill(tacoBell)}}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgor Password 💀" component={ForgorPassword} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} initialParams={{restaurant:tacoBell}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
