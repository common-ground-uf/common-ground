import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {allRestaurants, losPollosHermanos} from './data/dummyRestaurants';
import {allUsers, parties} from './data/dummyUsers';
import * as screens from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HeaderProfileIcon} from './components/HeaderProfileIcon';
import { View, Text } from 'react-native';
import { Storage } from './data/Storage';

const Tab = createBottomTabNavigator();


const icons: Record<string, string> = {
    Login: 'user-circle-o',
    Home: 'home',
    Messages: 'comment',
    Debug: 'bug',
    Explore: 'search',
    Settings: 'gear',
};

export default function App() {
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
                        headerLeft: () => (
                            <View>
                                <Text>Hello world!</Text>
                            </View>
                        ),
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Home" component={HomeStackScreen}/>
                    <Tab.Screen name="Messages" component={MessagesStackScreen}/>
                    <Tab.Screen name="Explore" component={ExploreStackScreen}/>
                    {process.env.NODE_ENV === 'development' &&
                        <Tab.Screen name="Debug" component={DebugStackScreen}/>
                    }
                    <Tab.Screen name="Settings" component={SettingsStackScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </React.StrictMode>
    );
}

const MainStack = createNativeStackNavigator();

const MainGroup = () => {
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
        <MainStack.Group>
            <MainStack.Screen name="Preferences" component={screens.Preferences}/>
            <MainStack.Screen name="Settings" component={screens.Settings}/>
            <MainStack.Screen name="Account" component={screens.Account}/>
            <MainStack.Screen name="Notifications" component={screens.Notifications}/>
            <MainStack.Screen name="Privacy" component={screens.Privacy}/>
            <MainStack.Screen
                name="Restaurant List"
                component={screens.RestaurantList}
                initialParams={{restaurantList: allRestaurants}}
            />
            <MainStack.Screen name="Signup" component={screens.Signup}/>
            <MainStack.Screen
                name="Group Details"
                component={screens.GroupDetails}
                initialParams={parties[0]}
            />
            <MainStack.Screen
                name="All Contacts"
                component={screens.AllContactsScreen}
                initialParams={{members: allUsers}}
            />
            <MainStack.Screen
                name="Forgot Password"
                component={screens.ForgorPassword}
            />
            <MainStack.Screen name="Gallery" component={screens.Gallery}/>
            <MainStack.Screen
                name="Restaurant"
                component={screens.RestaurantScreen}
                initialParams={{restaurant: losPollosHermanos}}
            />
            <MainStack.Screen
                name="Start New Table"
                component={screens.StartNewTableScreen}
            />
            <MainStack.Screen name="Reset Password" component={screens.ResetPassword}/>
            <MainStack.Screen
                name="Profile"
                component={screens.ProfileScreen}
                initialParams={{profileData: profile}}
            />
            <MainStack.Screen
                name="Strategic or random"
                component={screens.StrategicOrRandom}
            />
            <MainStack.Screen
                name="Random Restaurant"
                component={screens.RandomRestaurantScreen}
            />
            <MainStack.Screen
                name="Waiting on Friends"
                component={screens.WaitingOnFriends}
            />
            <MainStack.Screen
                name="Join Group"
                component={screens.JoinGroup}
            />
            <MainStack.Screen
                name="Group List"
                component={screens.GroupList}
            />
        </MainStack.Group>
    );
};

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
            <MainStack.Screen
                name="Profile"
                component={screens.ProfileScreen}
                initialParams={{profileData: profile}}
            />
            <MainStack.Screen
                name="Start New Table"
                component={screens.StartNewTableScreen}
            />
            <MainStack.Screen
                name="Join Group"
                component={screens.JoinGroup}
            />
            <MainStack.Screen
                name="Restaurant"
                component={screens.RestaurantScreen}
                initialParams={{restaurant: losPollosHermanos}}
            />
            <MainStack.Screen
                name="Group Details"
                component={screens.GroupDetails}
                initialParams={parties[0]}
            />
            <MainStack.Screen
                name="Restaurant List"
                component={screens.RestaurantList}
                initialParams={{restaurantList: allRestaurants}}
            />
        </HomeStack.Navigator>
    );
}

const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
    return (
        <LoginStack.Navigator 
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <LoginStack.Screen options={{title: 'Login'}} name="LoginScreen" component={screens.Login}/>
            <LoginStack.Screen name="Forgot Password" component={screens.ForgorPassword}/>
            <LoginStack.Screen name="Signup" component={screens.Signup}/>
        </LoginStack.Navigator>
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
            <MainStack.Screen
                name="Restaurant"
                component={screens.RestaurantScreen}
                initialParams={{restaurant: losPollosHermanos}}
            />
            <MainStack.Screen
                name="Restaurant List"
                component={screens.RestaurantList}
                initialParams={{restaurantList: allRestaurants}}
            />
        </ExploreStack.Navigator>
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
            <SettingsStack.Screen name="Login" component={LoginStackScreen}/>
        </SettingsStack.Navigator>
    );
}

const DebugStack = createNativeStackNavigator();

function DebugStackScreen() {
    return (
        <DebugStack.Navigator>
            <DebugStack.Screen options={{title: 'Debug'}} name="DebugScreen" component={screens.DebugScreen}/>
            <MainGroup />
        </DebugStack.Navigator>
    );
}
