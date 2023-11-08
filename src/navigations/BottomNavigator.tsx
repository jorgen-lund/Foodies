import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from '../LandingPage';
import FeatherIcons from "react-native-vector-icons/Feather"
import ShoppingCartPage from '../ShoppingCartPage';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: '#ED6232',
          borderTopWidth: 4,
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={LandingPage}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name={'home'}
              size={30}
              color={focused ? '#ED6232' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartPage}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name={'shopping-cart'}
              size={25}
              color={focused ? '#ED6232' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigator;
