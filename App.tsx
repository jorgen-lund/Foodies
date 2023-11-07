import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './src/navigations/BottomNavigator';
import FoodBoothPage from './src/FoodBoothPage';

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
        <Stack.Screen name="RestaurantPage" component={FoodBoothPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
