import React from 'react';
import { Provider } from 'react-redux'
import { ConfigureStore } from './src/redux/configureStore'
import Main from './src/MainComponent';

const store = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
