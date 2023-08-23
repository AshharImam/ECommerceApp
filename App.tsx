import React from 'react';
import {Provider} from 'react-redux';

import MainNavigation from './src/navigations/MainNavigation';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App;
