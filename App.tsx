import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './src/navigations/BottomNavigator';
import ItalianBooth from './src/booths/ItalianBooth';
import IndianBooth from './src/booths/IndianBooth';
import MexicanBooth from './src/booths/MexicanBooth';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'black',
          headerTitleStyle: {fontFamily: 'Suwannaphum-Regular', fontSize: 18},
        }}>
        <Stack.Screen name="FOODIES" component={BottomNavigator} />
        <Stack.Screen name="ItalianBooth" component={ItalianBooth} />
        <Stack.Screen name="IndianBooth" component={IndianBooth} />
        <Stack.Screen name="MexicanBooth" component={MexicanBooth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
