# PingPing React Native &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Security

If you see or suspect any vulnerabilities please read the [security policy](SECURITY.md) in order to report them.

## Development

First read [contributing](CONTRIBUTING.md)

### Setup

:rotating_light:Make sure you have Xcode 13 installed !

Before executing the steps listed in the list below, please checkout the [environment setup of react native](https://reactnative.dev/docs/environment-setup). Follow the steps under the React Native CLI Quickstart. Until you have installed the cocoapods for Xcode

1. `Install the latest (LTS) version of [Nodejs](https://nodejs.org/en/download/)`
1. `git clone https://github.com/Amsterdam/pingping-native`
1. `yarn install`
1. `cd ios && pod install && cd ..`
1. `npx react-native run-ios` a simulator should spin up and React-native should start

### Screens

Screens are to be considered as if they were pages on a webpage. Screens will only import components from the components folder and other dependencies.
But will never import other screens. Screens are bundled in a stack navigator to navigate through them. Stack navigators are bundled in a tabnavigator to switch between stacks.

### Components

The components folder includes components structured by stack. If a component is used in more than one stack it should be placed in the components/shared folder. These components are considered reusable and can be used freely throughout any screen or component.

### Services

Things that are not components or screens should probably go here. For instance, the middleware to present notifications within the app can be found here.

### Apollo

The pingping native app uses an apollo client to communicate with the apollo server. All files related to apollo/graphql can be found in this folder. We have a distinction between local and network queries/mutations.

### Sentry

The PingPing app uses sentry to log client errors, the sentry dsn and tokens have been hidden away from this repo. If you are a part of the PingPing team ask one of the developers for the keys and instructions.

### Rules

The following rules apply:

- A component can define nested components or services. It cannot use or define screens.
- A screen can define nested components or services.
- A service can define nested services. It cannot use or define components or screens.
- Read the contributing file and stick to the rules for branching/file and folder structures.
