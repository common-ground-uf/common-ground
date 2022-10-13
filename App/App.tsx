import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {tacoBell, Walter, saulProfile} from './data/dummyData';
import {Restaurant} from './commonTypes';
import {Finger} from './data/dummyData';
import * as screens from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DebugScreen" component={screens.DebugScreen}/>
                <Stack.Screen name="Profile" component={screens.ProfileScreen} initialParams={{profileData: saulProfile}}/>
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
                <Stack.Screen name="Group Details" component={screens.GroupDetails} initialParams={{members:[Finger,Finger,Finger], name:"the boys"}}/>
                <Stack.Screen name="Login" component={screens.Login}/>
                <Stack.Screen name="Forgot Password" component={screens.ForgorPassword}/>
                <Stack.Screen name="Gallery" component={screens.Gallery}/>
                <Stack.Screen name="Restaurant" component={screens.RestaurantScreen} initialParams={{restaurant: tacoBell}}/>
                <Stack.Screen name="Messages" component={screens.MessagesScreen}/>
                <Stack.Screen name="Start New Table Screen" component={screens.StartNewTableScreen}/>
                <Stack.Screen name="Reset Password" component={screens.ResetPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
