import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { BaseTheme } from './src/theme';
import config from './nativebase.config';
import { Root } from './src/components/RootComponent';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';

const queryClient = new QueryClient();
const store = configureStore();

export default function App() {

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store = {store}>
				<NativeBaseProvider theme={BaseTheme} config={config}>
					<Root />
				</NativeBaseProvider>
			</Provider>
		</QueryClientProvider>
	);
}
