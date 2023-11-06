import React from 'react';
import LandingPage from './src/LandingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
        <Stack.Screen name="FOODIES" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
