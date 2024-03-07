/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {WeatherView} from './src/views/weather-view.tsx';

// function onAppStateChange(status: AppStateStatus) {
//   if (Platform.OS !== 'web') {
//     focusManager.setFocused(status === 'active');
//   }
// }
//
// onlineManager.setEventListener(setOnline => {
//   return NetInfo.addEventListener(state => {
//     setOnline(!!state.isConnected);
//   });
// });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App(): React.JSX.Element {
  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', onAppStateChange);
  //   return () => subscription.remove();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherView />
    </QueryClientProvider>
  );
}

export default App;
