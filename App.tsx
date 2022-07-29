import React from 'react';
import {
  NativeBaseProvider,
  ColorMode,
  StatusBar
} from 'native-base';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import BottomTab from './src/navigators/BottomTab';
import { Provider } from 'react-redux';
import store from './src/reducers/store';

const queryClient = new QueryClient()

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
}

const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@my-app-color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      console.log(e);
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@my-app-color-mode', String(value));
    } catch (e) {
      console.log(e);
    }
  },
}

const App = () => {
  return (
    <Provider
      store = {store}
    >
      <NativeBaseProvider
        config = {config}
      >
        <QueryClientProvider
          client = {queryClient}
        >
          <StatusBar
            barStyle = "dark-content"
          />
          <BottomTab/>
        </QueryClientProvider>
      </NativeBaseProvider>
    </Provider>
  )
}
export default App