import React from 'react';
import NavigatorIndex from './src/navigationFiles/navigatorIndex';
import { Provider } from 'react-redux';
import store from './src/redux/store';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigatorIndex />
      </Provider>
  );
}
export default App;
