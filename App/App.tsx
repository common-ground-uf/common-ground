import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './screens/Login';
import {Signup} from './screens/Signup';
import {ForgorPassword} from './screens/ForgorPassword💀';
import {RestaurantScreen} from './screens/RestaurantScreen';
import {RestaurantList} from './screens/RestaurantList';
import {Profile} from './screens/Profile';
import {Home} from './screens/Home';
import {GroupDetails} from './screens/GroupDetails';
import {DebugScreen} from './screens/DebugScreen';
import React from 'react';
import {tacoBell} from './data/dummyData';
import {Restaurant} from './commonTypes';
import {Settings} from "./screens/Settings";
import {Notifications} from "./screens/Notifications";
import {Privacy} from "./screens/Privacy";
import {Account} from "./screens/Account";
import {Preferences} from "./screens/Preferences";
import { ResetPassword } from './screens/ResetPassword';
import { recentContacts } from './data/dummyData';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DebugScreen" component={DebugScreen}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Preferences" component={Preferences}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="Account" component={Account}/>
                <Stack.Screen name="Notifications" component={Notifications}/>
                <Stack.Screen name="Privacy" component={Privacy}/>
                <Stack.Screen
                    name="Restaurant List"
                    component={RestaurantList}
                    initialParams={{restaurantList: Array<Restaurant>(10).fill(tacoBell)}}
                />
                <Stack.Screen name="GroupDetails" component={GroupDetails} initialParams={{ name: 'the boys', members: recentContacts }} />
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="GroupDetails" component={GroupDetails}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Forgor Password 💀" component={ForgorPassword}/>
                <Stack.Screen name="Restaurant" component={RestaurantScreen} initialParams={{restaurant: tacoBell}}/>
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} initialParams={{ restaurant: tacoBell }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
