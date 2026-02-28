import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './context/auth_context';
import LoginScreen from './screens/login_screen';
import SignupScreen from './screens/signup_screen';
import HomeScreen from './screens/home_screen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
    const auth = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {auth?.user ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Signup" component={SignupScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainApp;