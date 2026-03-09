
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, AuthContextType } from '../models/auth';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await AsyncStorage.getItem('user_session');
            if (storedUser) setUser(JSON.parse(storedUser));
        };
        loadUser();
    }, []);

    const signup = async (name: string, email: string, pass: string) => {
        setError(null); // Clear previous error
        
        if (pass.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        const storedUsers = await AsyncStorage.getItem('users_db');
        const usersDb = storedUsers ? JSON.parse(storedUsers) : [];

        const existingUser = usersDb.find((u: any) => u.email === email);
        if (existingUser) {
            setError("Email already registered");
            return;
        }

        const newUser = { name, email, password: pass };
        usersDb.push(newUser);
        await AsyncStorage.setItem('users_db', JSON.stringify(usersDb));

        const userData = { name, email };
        setUser(userData);
        await AsyncStorage.setItem('user_session', JSON.stringify(userData));
        setError(null);
    };

    const login = async (email: string, pass: string) => {
        setError(null); // Clear previous error
        
        const storedUsers = await AsyncStorage.getItem('users_db');

        if (!storedUsers) {
            setError("No account found. Please sign up first.");
            return;
        }

        const usersDb = JSON.parse(storedUsers);

        const user = usersDb.find((u: any) => u.email === email && u.password === pass);

        if (!user) {
            setError("Invalid email or password");
            return;
        }

        const userData = { name: user.name, email: user.email };
        setUser(userData);
        await AsyncStorage.setItem('user_session', JSON.stringify(userData));
        setError(null);
    };

    const logout = async () => {
        setUser(null);
        setError(null);
        await AsyncStorage.removeItem('user_session');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};