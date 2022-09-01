import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/HomeScreen";
import TabScreen from "./screens/TabScreen";

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tabs: TabScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "Tabs Demo"
    }
  }
)

export default createAppContainer(navigator);