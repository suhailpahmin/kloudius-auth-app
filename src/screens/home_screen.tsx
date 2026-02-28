import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Text, Avatar, Divider, useTheme, Appbar } from 'react-native-paper';
import { AuthContext } from '../context/auth_context';

const HomeScreen = () => {
    const auth = useContext(AuthContext);
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <Appbar.Header elevated>
                <Appbar.Content title="Kloudius" />
            </Appbar.Header>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.content}>
                    <Card style={styles.card} elevation={2}>
                        <Card.Title
                            title="Profile Information"
                            titleStyle={styles.cardTitle}
                            left={(props) => <Avatar.Icon {...props} icon="user" />}
                        />
                        <Divider />
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.infoRow}>
                                <View style={styles.infoItem}>
                                    <Text variant="labelMedium" style={styles.label}>
                                        Name
                                    </Text>
                                    <Text variant="bodyLarge" style={styles.value}>
                                        {auth?.user?.name}
                                    </Text>
                                </View>
                            </View>

                            <Divider style={styles.divider} />

                            <View style={styles.infoRow}>
                                <View style={styles.infoItem}>
                                    <Text variant="labelMedium" style={styles.label}>
                                        Email
                                    </Text>
                                    <Text variant="bodyLarge" style={styles.value}>
                                        {auth?.user?.email}
                                    </Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>

                    <Button
                        mode="contained"
                        onPress={auth?.logout}
                        style={styles.logoutButton}
                        contentStyle={styles.logoutButtonContent}
                        buttonColor={theme.colors.error}
                    >
                        Logout
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    content: {
        padding: 20,
    },
    greeting: {
        fontWeight: 'bold',
        marginBottom: 24,
    },
    card: {
        marginBottom: 16,
        borderRadius: 16,
    },
    cardTitle: {
        lineHeight: 24,
    },
    cardContent: {
        paddingTop: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoItem: {
        flex: 1,
    },
    label: {
        marginBottom: 4,
        opacity: 0.7,
    },
    value: {
        fontWeight: '500',
    },
    divider: {
        marginVertical: 16,
    },
    logoutButton: {
        marginTop: 16,
        borderRadius: 8,
    },
    logoutButtonContent: {
        paddingVertical: 8,
    },
});

export default HomeScreen;
