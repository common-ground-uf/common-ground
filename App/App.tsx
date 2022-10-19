import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { tacoBell } from './data/dummyRestaurants';
import { Restaurant } from './commonTypes';
import { Finger, saulProfile } from './data/dummyUsers';
import * as screens from './screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
    },
});

const icons = {
    Login: require('./assets/group.png'),
    Home: require('./assets/person.png'),
    Messages: require('./assets/search.png'),
    Debug: require('./assets/saul.gif'),
    Explore: require('./assets/saul.gif'),
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return <Image source={icons[route.name]} style={styles.icon} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Login" component={LoginStackScreen} />
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Messages" component={MessagesStackScreen} />
                <Tab.Screen name="Explore" component={ExploreStackScreen} />
                <Tab.Screen name="Debug" component={screens.DebugScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const MainStack = createNativeStackNavigator();

const mainGroup = (
    <MainStack.Group>
        <MainStack.Screen name="Start" component={screens.Start}/>
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
        <MainStack.Screen name="Strategic or random" component={screens.StrategicOrRandom} />
        <MainStack.Screen name="Random Restaurant" component={screens.RandomRestaurantScreen} />
    </MainStack.Group>
);

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ title: 'Home' }}>
            <HomeStack.Screen name="HomeScreen" component={screens.Home} />
            {mainGroup}
            <HomeStack.Screen name="Login" component={screens.Login} />
            <HomeStack.Screen name="Messages" component={screens.MessagesScreen} />
            <HomeStack.Screen name="Explore" component={screens.Explore} />
        </HomeStack.Navigator>
    );
}

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
    return (
        <LoginStack.Navigator screenOptions={{ title: 'Login' }}>
            <LoginStack.Screen name="LoginScreen" component={screens.Login} />
            {mainGroup}
            <LoginStack.Screen name="Home" component={screens.Home} />
            <LoginStack.Screen name="Messages" component={screens.MessagesScreen} />
            <LoginStack.Screen name="Explore" component={screens.Explore} />
        </LoginStack.Navigator>
    );
}

const MessagesStack = createNativeStackNavigator();

function MessagesStackScreen() {
    return (
        <MessagesStack.Navigator screenOptions={{ title: 'Messages' }}>
            <MessagesStack.Screen name="MessagesScreen" component={screens.MessagesScreen} />
            {mainGroup}
            <MessagesStack.Screen name="Login" component={screens.Login} />
            <MessagesStack.Screen name="Home" component={screens.Home} />
            <MessagesStack.Screen name="Explore" component={screens.Explore} />
        </MessagesStack.Navigator>
    );
}

function ExploreStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ title: 'Messages' }}>
            <HomeStack.Screen name="Explore" component={screens.Explore} />
            {mainGroup}
            <HomeStack.Screen name="MessagesScreen" component={screens.MessagesScreen} />
            <HomeStack.Screen name="Login" component={screens.Login} />
            <HomeStack.Screen name="Home" component={screens.Home} />
        </HomeStack.Navigator>
    );
}