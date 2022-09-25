import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {tacoBell} from './data/dummyData';
import {Restaurant} from './commonTypes';
import * as screens from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DebugScreen" component={screens.DebugScreen}/>
                <Stack.Screen name="Profile" component={screens.Profile}/>
                <Stack.Screen name="Preferences" component={screens.Preferences}/>
                <Stack.Screen name="Settings" component={screens.Settings}/>
                <Stack.Screen name="Account" component={screens.Account}/>
                <Stack.Screen name="Notifications" component={screens.Notifications}/>
                <Stack.Screen name="Privacy" component={screens.Privacy}/>
                <Stack.Screen
                    name="Restaurant List"
                    component={screens.RestaurantList}
                    initialParams={{restaurantList: Array<Restaurant>(10).fill(tacoBell)}}
                />
                <Stack.Screen name="Signup" component={screens.Signup}/>
                <Stack.Screen name="Home" component={screens.Home}/>
                <Stack.Screen name="GroupDetails" component={screens.GroupDetails}/>
                <Stack.Screen name="Login" component={screens.Login}/>
                <Stack.Screen name="Forgor Password 💀" component={screens.ForgorPassword}/>
                <Stack.Screen name="Gallery" component={screens.Gallery}/>
                <Stack.Screen name="Messages" component={screens.MessagesScreen}/>
                <Stack.Screen name="Restaurant" component={screens.RestaurantScreen} initialParams={{restaurant: tacoBell}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
