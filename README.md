# Pbsc-Project
This project is a Javascript Developer Test

## Getting Started

### Prerequisites

- **Android**

  **Windows**, **Mac** and **Linux** platforms are supported. The [Android SDK](https://es.wikipedia.org/wiki/Android_SDK) is required to build and debug the app, other tools can be downloaded using the **Android SDK Manager**.

- **iOS**

  A **Mac** is required to build the app using [Xcode](https://developer.apple.com/xcode/) or [debugging](https://facebook.github.io/react-native/docs/debugging.html) the app with the **iOS Simulator**.

### Installing

To run this app is required to install the following tools:

- [NodeJS](https://nodejs.org/) - To download the dependencies of the app via [npm](http://npmjs.com/)
- [Java SE Development Kit 8](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html) - Required by the Android tools
- [Android SDK](https://developer.android.com/studio/) - You can download the Android Studio, but only the sdk tools are required.
- [Xcode](https://developer.apple.com/xcode/) - Also, you can download only the Xcode Command Line Tools.

#### npm install

Install all dependencies required by the app.

#### react-native link react-native-gesture-handler

Linking react-native-gesture-handler library uses native support for handling gestures.

-Android configuration: https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html

#### react-native link 

#### npm start

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `react-native run-ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.If the build fail you can move to the ios folder and run this commmand:

```
pod install
cd ..
react-native run-ios (run again)
```

#### `react-native run-android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator.

## Running the tests

This project is set up to use [jest](https://github.com/facebook/jest) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the .test extension to have the files loaded by jest

The tests can be executed by running:

```
npm test
```

## Built With

- [React Native](https://facebook.github.io/react-native/) - The mobile framework used

## Authors

- **Elberth Bracho** - [Zhock]