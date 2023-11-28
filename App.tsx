import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import BottomNavigator from './src/navigationFiles/BottomNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BottomNavigator />
    </Provider>
  );
}
export default App;
