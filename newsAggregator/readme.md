# News Aggregator Service using `News API`

On your local device in either terminal or PowerShell run:

`expo init newsAggregator`

Select `Managed Workflow`, after the installation is complete go into the directory by typing:

`cd newsAggregator`

## Installation of `React Navigation`

In the `newsAggregator` folder enter the following in the command line:

```
expo install @react-navigation/native @react-navigation/stack @react-navigation/drawer @react-navigation/bottom-tabs react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## Installation of `React Native Elemements`

React Native Elements is our UI Tool kit to make styling a breeze.

```
expo install react-native-elements
```

## Installation of Additional Packages

Last two packages we need will be `@react-native-async-storage/async-storage` which allows us to store a simple string / token on a user's device. `expo-web-browser` allows us to open a web-browser (a `webkit` based shell) in our app.

```
expo install @react-native-async-storage/async-storage expo-web-browser
```

## Resources React Navigation / Async Storage
- [React Navigation](https://reactnavigation.org/)
- [Bottom Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/)
- [rootNavigation](https://reactnavigation.org/docs/navigating-without-navigation-prop/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install)

## Resources Context / Provider / useReducer

- [Context](https://reactjs.org/docs/context.html)
- [Provider](https://reactjs.org/docs/context.html#contextprovider)
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

## API Resource
- [News API](https://newsapi.org/)
- [Storing Data](https://stackoverflow.com/questions/44376002/what-are-my-options-for-storing-data-when-using-react-native-ios-and-android)