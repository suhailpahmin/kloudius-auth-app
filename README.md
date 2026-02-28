# Kloudius User Auth

A React Native authentication app built with TypeScript, React Native Paper, and AsyncStorage for local data persistence.

## Features

### Authentication System
- **User Registration**: Create new accounts with name, email, and password validation
- **User Login**: Secure login with email and password
- **Session Persistence**: User sessions are saved locally using AsyncStorage
- **Form Validation**: Real-time validation for email format and password requirements
- **Error Handling**: Snackbar notifications for authentication errors

### User Interface
- **Material Design**: Built with React Native Paper for consistent Material Design UI
- **Dark/Light Theme Support**: Automatic theme switching based on device settings
- **Responsive Layout**: Keyboard-aware forms that adapt to screen size
- **Clean Navigation**: Stack-based navigation between Login, Signup, and Home screens

### Home Screen
- **Profile Display**: View user name and email information
- **Secure Logout**: Clear session and return to login screen

### Data Storage
- **Local Database**: User credentials stored locally using AsyncStorage
- **Session Management**: Automatic session restoration on app restart

## Tech Stack

- **React Native** 0.84.0
- **TypeScript** 5.8.3
- **React Navigation** 7.x (Native Stack)
- **React Native Paper** 5.15.0 (Material Design)
- **AsyncStorage** 3.0.1 (Local Storage)
- **React Native Vector Icons** 10.3.0

## Prerequisites

Before you begin, ensure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide.

Required:
- Node.js >= 22.11.0
- npm or Yarn
- For iOS: Xcode, CocoaPods, Ruby bundler
- For Android: Android Studio, JDK

## Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd kloudius-user-auth
```

2. Install dependencies:
```sh
npm/bun install
# or
yarn install
```

## Running the App

### Start Metro Bundler

```sh
npm/bun start
# or
yarn start
```

### Run on Android

```sh
npm/bun run android
# or
yarn android
```

### Run on iOS

```sh
npm/bun run ios
# or
yarn ios
```

## Project Structure

```
kloudius-user-auth/
├── src/
│   ├── context/
│   │   └── auth_context.tsx      # Authentication context and logic
│   ├── models/
│   │   └── auth.ts                # TypeScript interfaces
│   ├── screens/
│   │   ├── login_screen.tsx       # Login screen
│   │   ├── signup_screen.tsx      # Signup screen
│   │   └── home_screen.tsx        # Home/Profile screen
│   └── main.tsx                   # Navigation setup
├── App.tsx                        # App entry with theme provider
├── index.js                       # React Native entry point
└── package.json
```

## Usage

### First Time Setup
1. Launch the app
2. Click "Don't have an account? Sign up"
3. Enter your name, email, and password (min 6 characters)
4. Click "Sign Up"

### Logging In
1. Enter your registered email and password
2. Click "Login"
3. View your profile on the Home screen

### Logging Out
1. From the Home screen, click the "Logout" button
2. You'll be returned to the Login screen