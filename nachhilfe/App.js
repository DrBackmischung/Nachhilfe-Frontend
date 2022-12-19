import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { BaseTheme } from './src/theme';
import config from './nativebase.config';
import { Root } from './src/components/RootComponent';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export default function App() {

	return (
		<QueryClientProvider client={queryClient}>
				<NativeBaseProvider theme={BaseTheme} config={config}>
					<Root />
				</NativeBaseProvider>
		</QueryClientProvider>
	);
}
