import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {allRestaurants, losPollosHermanos} from './data/dummyRestaurants';
import {allUsers, parties} from './data/dummyUsers';
import * as screens from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HeaderProfileIcon} from './components/HeaderProfileIcon';
import {View, Text} from 'react-native';
import {Storage} from './data/Storage';

const Tab = createBottomTabNavigator();


const icons: Record<string, string> = {
    Login: 'user-circle-o',
    Home: 'home',
    Messages: 'comment',
    Explore: 'search',
    Settings: 'gear',
};

export default function App() {
    return (
        <React.StrictMode>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarIcon: () => {
                            return (
                                <Icon name={icons[route.name]} size={16} color="#FF6D6E"/>
                            );
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Login" component={LoginStackScreen} options={{
                        tabBarButton: () => null,
                        tabBarStyle: {display: 'none'}
                    }}/>
                    <Tab.Screen name="Home" component={HomeStackScreen}/>
                    <Tab.Screen name="Messages" component={MessagesStackScreen}/>
                    <Tab.Screen name="Explore" component={ExploreStackScreen}/>
                    <Tab.Screen name="Settings" component={SettingsStackScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </React.StrictMode>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    const [profile, setProfile] = React.useState();

    const getProfileInfo = async () => {
        //Get profile info from async storage
        const profile = await Storage.get('profile');
        if (profile) {
            const profileInfo = JSON.parse(profile);
            setProfile(profileInfo);
        }
    };
    React.useEffect(() => {
        getProfileInfo();
    }, []);

    return (
        <HomeStack.Navigator
            screenOptions={({navigation}) => ({
                headerRight: () => <HeaderProfileIcon navigation={navigation}/>,
            })}
        >
            <HomeStack.Screen
                options={{title: 'Home'}}
                name="HomeScreen"
                component={screens.Home}
            />
            <HomeStack.Screen
                name="Profile"
                component={screens.ProfileScreen}
                initialParams={{profileData: profile}}
            />
            <HomeStack.Screen
                name="Start New Table"
                component={screens.StartNewTableScreen}
            />
            <HomeStack.Screen
                name="Join Group"
                component={screens.JoinGroup}
            />
            <HomeStack.Screen
                name="Restaurant"
                component={screens.RestaurantScreen}
                initialParams={{restaurant: losPollosHermanos}}
            />
            <HomeStack.Screen
                name="Group Details"
                component={screens.GroupDetails}
                initialParams={parties[0]}
            />
            <HomeStack.Screen
                name="Group List"
                component={screens.GroupList}
            />
            <HomeStack.Screen
                name="Restaurant List"
                component={screens.RestaurantList}
                initialParams={{restaurantList: allRestaurants}}
            />
        </HomeStack.Navigator>
    );
}


const MessagesStack = createNativeStackNavigator();

function MessagesStackScreen() {
    return (
        <MessagesStack.Navigator>
            <MessagesStack.Screen
                options={{title: 'Messages'}}
                name="MessagesListScreen"
                component={screens.MessagesListScreen}
            />
            <MessagesStack.Screen
                options={{title: 'Messages'}}
                name="MessagesScreen"
                component={screens.MessagesScreen}
            />
        </MessagesStack.Navigator>
    );
}

const ExploreStack = createNativeStackNavigator();

function ExploreStackScreen() {
    return (
        <ExploreStack.Navigator>
            <ExploreStack.Screen options={{title: 'Explore'}} name="ExploreScreen" component={screens.Explore}/>
            <ExploreStack.Screen
                name="Restaurant"
                component={screens.RestaurantScreen}
                initialParams={{restaurant: losPollosHermanos}}
            />
            <ExploreStack.Screen
                name="Restaurant List"
                component={screens.RestaurantList}
                initialParams={{restaurantList: allRestaurants}}
            />
        </ExploreStack.Navigator>
    );
}

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen options={{title: 'Login'}} name="LoginScreen" component={screens.Login}/>
            <LoginStack.Screen name="Forgot Password" component={screens.ForgorPassword}/>
            <LoginStack.Screen name="Signup" component={screens.Signup}/>
        </LoginStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen options={{title: 'Settings'}} name="SettingsScreen" component={screens.Settings}/>
            <SettingsStack.Screen name="Account" component={screens.Account}/>
            <SettingsStack.Screen name="Privacy" component={screens.Privacy}/>
            <SettingsStack.Screen name="Notifications" component={screens.Notifications}/>
            <SettingsStack.Screen name="Preferences" component={screens.Preferences}/>
            <SettingsStack.Screen name="Logout" component={screens.Logout}/>
        </SettingsStack.Navigator>
    );
}
