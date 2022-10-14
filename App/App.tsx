import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { tacoBell } from './data/dummyRestaurants';
import { Restaurant } from './commonTypes';
import { Finger, saulProfile } from './data/dummyUsers';
import * as screens from './screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Login" component={LoginStackScreen} />
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Messages" component={MessagesStackScreen} />
                <Tab.Screen name="Debug" component={screens.DebugScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const MainStack = createNativeStackNavigator();

const mainGroup = (
    <MainStack.Group>
        <MainStack.Screen name="Preferences" component={screens.Preferences} />
        <MainStack.Screen name="Settings" component={screens.Settings} />
        <MainStack.Screen name="Account" component={screens.Account} />
        <MainStack.Screen name="Notifications" component={screens.Notifications} />
        <MainStack.Screen name="Privacy" component={screens.Privacy} />
        <MainStack.Screen
            name="Restaurant List"
            component={screens.RestaurantList}
            initialParams={{ restaurantList: Array<Restaurant>(10).fill(tacoBell) }}
            />
        <MainStack.Screen name="Signup" component={screens.Signup} />
        <MainStack.Screen name="Group Details" component={screens.GroupDetails} initialParams={{ members: [Finger, Finger, Finger], name: 'the boys' }} />
        <MainStack.Screen name="Forgot Password" component={screens.ForgorPassword} />
        <MainStack.Screen name="Gallery" component={screens.Gallery} />
        <MainStack.Screen name="Restaurant" component={screens.RestaurantScreen} initialParams={{ restaurant: tacoBell }} />
        <MainStack.Screen name="Start New Table Screen" component={screens.StartNewTableScreen} />
        <MainStack.Screen name="Reset Password" component={screens.ResetPassword} />
        <MainStack.Screen name="Profile" component={screens.ProfileScreen} initialParams={{ profileData: saulProfile }} />
    </MainStack.Group>
);

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{title:'Home'}}>
            <HomeStack.Screen name="HomeScreen" component={screens.Home} />
            {mainGroup}
            <HomeStack.Screen name="Login" component={screens.Login} />
            <HomeStack.Screen name="Messages" component={screens.MessagesScreen} />
        </HomeStack.Navigator>
    );
}

function LoginStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{title:'Login'}}>
            <HomeStack.Screen name="LoginScreen" component={screens.Login} />
            {mainGroup}
            <HomeStack.Screen name="Home" component={screens.Home} />
            <HomeStack.Screen name="Messages" component={screens.MessagesScreen} />
        </HomeStack.Navigator>
    );
}

function MessagesStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{title:'Messages'}}>
            <HomeStack.Screen name="MessagesScreen" component={screens.MessagesScreen} />
            {mainGroup}
            <HomeStack.Screen name="Login" component={screens.Login} />
            <HomeStack.Screen name="Home" component={screens.Home} />
        </HomeStack.Navigator>
    );
}
