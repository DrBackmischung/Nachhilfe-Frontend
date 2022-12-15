import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
	Box,
	useColorMode,
	Heading,
	HStack,
	Text,
	useBreakpointValue,
	Fab,
	Icon,
	useColorModeValue,
	MoonIcon,
	SunIcon,
	Stagger,
	IconButton,
} from 'native-base';
import { mapping } from '../../config/map';
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import { MasonaryLayout } from '../../components/MasonLayout/MasonaryLayout';
import { MasonMobile } from '../../components/MasonLayout/mobile';
import { MasonWeb } from '../../components/MasonLayout/web';
import { Logo } from '../../components/Logo';
import { StoryBook } from '../../components/StoryBook';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Layout } from '../../components/Layout';

export function MasonLayout({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
	return (
		<Layout>
			<ScrollView
				contentContainerStyle={{ width: '100%' }}
				showsVerticalScrollIndicator={false}
			>
				<MasonaryLayout
					column={useBreakpointValue({
						base: [1, 1],
						sm: [1, 1],
						md: [1, 1, 1],
						// lg: [1, 1, 1, 1],
						// xl: [1, 1, 1, 1, 1],
					})}
					_hStack={{
						space: 4,
						mb: 4,
						pt: '70px',
					}}
					_vStack={{ space: 4 }}
				>
					<StoryBook
						navigation={navigation}
						name="Profil"
						minH={32}
						_box={{
							lightGrad: ['cyan.400', 'teal.200'],
							darkGrad: ['cyan.600', 'teal.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Login"
						minH={32}
						_box={{
							lightGrad: ['cyan.400', 'teal.200'],
							darkGrad: ['cyan.600', 'teal.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Kalender"
						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Buchung"
						minH={48}
						_box={{
							lightGrad: ['blue.800', 'lightBlue.300'],
							darkGrad: ['blue.900', 'lightBlue.500'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Chat"
						// colors={['green.700', 'lime.200']}
						minH={48}
						_box={{
							lightGrad: ['violet.800', 'lightBlue.300'],
							darkGrad: ['violet.900', 'lightBlue.500'],
						}}
						_heading={{
							color: 'lightBlue.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Chatbot"
						minH={32}
						_box={{
							lightGrad: ['emerald.400', 'lime.200'],
							darkGrad: ['emerald.600', 'lime.300'],
						}}
						_heading={{
							color: 'lime.100',
						}}
						// colors={['red.400', 'amber.400']}
					/>
					<StoryBook
						navigation={navigation}
						name="Rechnungen"
						minH={32}
						_box={{
							lightGrad: ['cyan.400', 'teal.200'],
							darkGrad: ['cyan.600', 'teal.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="LearningPoints"
						minH={32}
						_box={{
							lightGrad: ['cyan.400', 'teal.200'],
							darkGrad: ['cyan.600', 'teal.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="TeachingPoints"
						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="ProfilePoints"
						minH={32}
						_box={{
							lightGrad: ['cyan.400', 'teal.200'],
							darkGrad: ['cyan.600', 'teal.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="News"
						minH={32}
						_box={{
							lightGrad: ['cyan.400', 'teal.200'],
							darkGrad: ['cyan.600', 'teal.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						name="Werbung"
						minH={40}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>

					<StoryBook
						navigation={navigation}
						name="Minecraft"
						minH={48}
						_box={{
							lightGrad: ['orange.400', 'amber.200'],
							darkGrad: ['orange.600', 'amber.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
				</MasonaryLayout>
				{/* {isLargeScreen ? (
					<MasonWeb navigation={navigation} />
				) : (
					// <MasonMobile navigation={navigation} />
					<MasonMobile navigation={navigation} />
				)} */}
			</ScrollView>
		</Layout>
	);
}
