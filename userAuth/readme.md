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

## Resources
- [React Navigation](https://reactnavigation.org/)
- [React Native Elements](https://reactnativeelements.com/)

---

## 3 Different Types of Navigation

### Stacked:
Basic Navigation in mobile apps, each view is "stacked" on top of each other with the user having the ability to swipe back and forth or touch buttons in the header bar. --ie Linkedin Home Screen to Messages.

### Tabbed:
Common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header). Tab navigation is used for similiar tasks --ie Linkedin Home, Network, Post, Notifications and Jobs Search.

### #Drawer:
Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens. Mostly used for seldom used features. --ie Linkedin Profile, Settings / Groups, Discovery section