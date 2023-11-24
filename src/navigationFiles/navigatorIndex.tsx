import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import ItalianBooth from '../booths/ItalianBooth';
import IndianBooth from '../booths/IndianBooth';
import MexicanBooth from '../booths/MexicanBooth';

const Stack = createNativeStackNavigator();

function NavigatorIndex(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: '#32BDED',
          headerTitleStyle: {fontFamily: 'Suwannaphum-Regular', fontSize: 18},
          animation: 'none',
          title: "",
        }}>
        <Stack.Screen name="FOODIES" component={BottomNavigator} />
        <Stack.Screen name="ItalianBooth" component={ItalianBooth} />
        <Stack.Screen name="IndianBooth" component={IndianBooth} />
        <Stack.Screen name="MexicanBooth" component={MexicanBooth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigatorIndex;
