import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from '../pages/LandingPage';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import ReceiptPage from '../pages/ReceiptPage';
import BoothNavigator from './BoothNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
            shadowColor: 'transparent',
            elevation: 0,
          },
          title: '',
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
        <Tab.Screen
          name="BoothNavigator"
          component={BoothNavigator}
          options={{tabBarButton: () => null}}
        />
        <Tab.Screen
          name="Receipts"
          component={ReceiptPage}
          options={{
            tabBarLabel: '',
            tabBarActiveTintColor: 'black',
            tabBarIcon: ({focused}) => (
              <IonIcons
                name={'receipt-outline'}
                size={25}
                color={focused ? '#ED6232' : 'black'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomNavigator;
