import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text, HelperText, useTheme, Snackbar } from 'react-native-paper';
import { AuthContext } from '../context/auth_provider';

const SignupScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const auth = useContext(AuthContext);
    const theme = useTheme();

    useEffect(() => {
        if (auth?.error) {
            setSnackbarVisible(true);
        }
    }, [auth?.error]);

    const handleSignup = async () => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setSnackbarVisible(false);

        let hasError = false;

        if (!name) {
            setNameError('Name is required');
            hasError = true;
        }

        if (!email) {
            setEmailError('Email is required');
            hasError = true;
        } else if (!email.includes('@')) {
            setEmailError('Invalid email format');
            hasError = true;
        }

        if (!password) {
            setPasswordError('Password is required');
            hasError = true;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            hasError = true;
        }

        if (hasError) return;

        await auth?.signup(name.trim(), email.trim(), password);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <Text variant="displaySmall" style={[styles.title, { color: theme.colors.primary }]}>
                        Kloudius
                    </Text>

                    <TextInput
                        label="Name"
                        value={name}
                        onChangeText={setName}
                        mode="outlined"
                        error={!!nameError}
                        outlineStyle={styles.inputOutline}
                    />
                    <HelperText type="error" visible={!!nameError}>
                        {nameError}
                    </HelperText>

                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        mode="outlined"
                        error={!!emailError}
                        outlineStyle={styles.inputOutline}
                    />
                    <HelperText type="error" visible={!!emailError}>
                        {emailError}
                    </HelperText>

                    <TextInput
                        label="Password"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword}
                        mode="outlined"
                        error={!!passwordError}
                        right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
                        outlineStyle={styles.inputOutline}
                    />
                    <HelperText type="error" visible={!!passwordError}>
                        {passwordError}
                    </HelperText>

                    <Button
                        mode="contained"
                        onPress={handleSignup}
                        style={styles.button}
                        contentStyle={styles.buttonContent}
                    >
                        Sign Up
                    </Button>

                    <Button
                        mode="text"
                        onPress={() => navigation.navigate('Login')}
                        style={styles.linkButton}
                        textColor="#212121ff"
                    >
                        Already have an account? Login
                    </Button>
                </View>
            </ScrollView>

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={1500}
            >
                {auth?.error}
            </Snackbar>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    content: {
        padding: 24,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    inputOutline: {
        borderRadius: 16,
    },
    button: {
        marginTop: 16,
        borderRadius: 8,
    },
    buttonContent: {
        paddingVertical: 8,
    },
    linkButton: {
        marginTop: 16,
    },
});

export default SignupScreen;
