import React, { useEffect, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { ArticleList, Favorites, Settings, Tutorial } from './src/views';
import { Provider, Context } from './src/context/NewsContext';
import { navigationRef } from './src/rootNavigation';
import { SearchDrawer } from './src/components';

import { theme } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const tabIcon = (routeName, focusedColor) => {
  const icon = (routeName === 'Articles') ? 'business' : 'favorite';
  return (
    <MaterialIcons
      name={icon}
      size={24}
      color={focusedColor}
    />
  );
}

const Articles = ({ navigation }) => (
  <Drawer.Navigator drawerContent={(props) => <SearchDrawer {...props} />}>
    <Drawer.Screen name="Articles" component={ArticleList} {...navigation} />
  </Drawer.Navigator>
);

const MainApplication = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 12 }
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const focusedColor = focused ? theme.blue : theme.gray;
        return tabIcon(route.name, focusedColor);
      }
    })}
  >
    <Tab.Screen name="Articles" component={Articles} />
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);

const App = () => {
  const { checkToken } = useContext(Context);
  
  useEffect(() => {
    checkToken();
  }, []);
  
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
        />
        <Stack.Screen
          name="Main"
          component={MainApplication}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider>
    <App/>
  </Provider>
);