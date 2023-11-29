import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from '../pages/LandingPage';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import ReceiptPage from '../pages/ReceiptPage';
import BoothNavigator from './BoothNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {shoppingCartState} from '../redux/store';
import SettingsPage from '../pages/SettingsPage';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const shoppingCart = useSelector(
    (state: shoppingCartState) => state.shoppingCart,
  );

  const totalItems = shoppingCart.reduce(
    (total, item) => total + item.amount,
    0,
  );

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
            height: 85,
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
              <View style={{flexDirection: 'row'}}>
                <FeatherIcons
                  name={'shopping-cart'}
                  size={25}
                  color={focused ? '#ED6232' : 'black'}
                />
                {totalItems > 0 && (
                  <View
                    style={{
                      height: 17,
                      width: 17,
                      backgroundColor: 'red',
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 10,
                      }}>
                      {totalItems}
                    </Text>
                  </View>
                )}
              </View>
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
        <Tab.Screen
          name="Settings"
          component={SettingsPage}
          options={{
            tabBarIcon: ({focused}) => (
              <FeatherIcons
                name={'settings'}
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
