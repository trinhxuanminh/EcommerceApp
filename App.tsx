import React from 'react';
import {
  NativeBaseProvider,
  ColorMode
} from 'native-base';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import BottomTab from './src/navigators/BottomTab';

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
    <NativeBaseProvider
      config = {config}
    >
      <QueryClientProvider
        client = {queryClient}
      >
        <BottomTab/>
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}
export default App