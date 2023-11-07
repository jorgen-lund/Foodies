import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from '../LandingPage';
import IonIcons from 'react-native-vector-icons/Ionicons';

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
          tabBarLabel: 'Home',
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => (
            <IonIcons
              name={'home-outline'}
              size={30}
              color={focused ? '#ED6232' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigator;
