# Setting up our Multi Screen Layout Application

On your local device in either terminal or PowerShell run:

`expo init userAuth`

Select `Managed Workflow`, after the installation is complete go into the directory by typing:

`cd userAuth`

## Installation of `React Navigation`

In the `userAuth` folder enter the following in the command line:

```
expo install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

All of these packages are needed.

## Installation `React Native Elements`

React Native Elements is a UI Library designed for easy usage.

```
expo install react-native-elements
```

## Installation of Firebase - Database as a service

We will be using Firebase a Free / Pay as you go service from Google to authenticate our users - you can build your own Auth service using a variety of Databases from mysql, postgres, mongodb , maria, etc. React and React Native do not care.

*November 10th Update* You also need the `base-64` package to authenticate with firebase.

```
expo install firebase base-64
```

*November 10th In-class Auth issue*

The issue we had in class was that we were already authenticated with firebase and saved to the firebase object. Even though I had deleted the test user from the database, that user was still saved on my device.

Another issue was that I kept writing `id` instead of `uid`. This updated code does work.

---


## Resources
- [React Navigation](https://reactnavigation.org/)
- [React Native Elements](https://reactnativeelements.com/)
- [Firebase](https://firebase.google.com/)
- [Firebase and Expo](https://docs.expo.io/guides/using-firebase/)
- [React API Alert](https://reactnative.dev/docs/alert)

---

## 3 Different Types of Navigation

### Stacked:
Basic Navigation in mobile apps, each view is "stacked" on top of each other with the user having the ability to swipe back and forth or touch buttons in the header bar. --ie Linkedin Home Screen to Messages.

### Tabbed:
Common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header). Tab navigation is used for similiar tasks --ie Linkedin Home, Network, Post, Notifications and Jobs Search.

### #Drawer:
Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens. Mostly used for seldom used features. --ie Linkedin Profile, Settings / Groups, Discovery section


---

## Errors with Node version 14

If you are using node version 14 with Firebase you may run into an issue with the installation which is an issue with the `grpc` package -- nothing you can do to fix this. Check which version of node you are running by typing this into the command line. [Issue log found on github](https://github.com/grpc/grpc-node/issues/1183)

```
node -v
```

### Windows with Chocolately

If you installed Node via Chocolately on windows run the following commands as `admin`, first we need to remove version 14 by running:

```
choco uninstall nodejs.install
```

After that's completed install the LTS (Long Term Service) version of Node (version 12).

```
choco install nodejs-lts
```

If you installed Node 14 with the downloaded files from the nodejs.org website, download the version 12 installer and run that.

[Previous Node Releases](https://nodejs.org/en/download/releases/)


