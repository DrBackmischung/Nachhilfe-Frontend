import React, { useState } from 'react';
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
import { ProfilDialog } from '../../components/pages/Profil/dialog';
import { LoginDialog } from '../../components/pages/Login/dialog';
import { SkillsDialog } from '../../components/pages/Skills/dialog';
import { SkillverwaltungDialog } from '../../components/pages/Skillverwaltung/dialog';
import { StundenplanerDialog } from '../../components/pages/Stundenplaner/dialog';

export function MasonLayout({
	navigation,
}: {
	navigation: StackNavigationProp<any>;
}) {
    const [isOpenProfil, setOpenProfil] = useState(false);
    const [isOpenLogin, setOpenLogin] = useState(false);
    const [isOpenSkills, setOpenSkills] = useState(false);
    const [isOpenSkillVerwaltung, setOpenSkillVerwaltung] = useState(false);
    const [isOpenStundenplaner, setOpenStundenplaner] = useState(false);

	return (
		<Layout>
			<ProfilDialog isOpen={isOpenProfil} close={() => setOpenProfil(false)} />
			<LoginDialog isOpen={isOpenLogin} close={() => setOpenLogin(false)} />
			<SkillsDialog isOpen={isOpenSkills} close={() => setOpenSkills(false)} />
			<SkillverwaltungDialog isOpen={isOpenSkillVerwaltung} close={() => setOpenSkillVerwaltung(false)} />
			<StundenplanerDialog isOpen={isOpenStundenplaner} close={() => setOpenStundenplaner(false)} />
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
						open={() => setOpenProfil(true)}
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
						open={() => setOpenLogin(true)}
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
						open={() => setOpenSkills(true)}
						name="Skills"
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
						open={() => setOpenSkillVerwaltung(true)}
						name="Skillverwaltung"
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
						open={() => setOpenStundenplaner(true)}
						name="Stundenplaner"
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
						open={() => setOpenProfil(true)}
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
						open={() => setOpenProfil(true)}
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
						open={() => setOpenProfil(true)}
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
						open={() => setOpenProfil(true)}
						name="Chatbot"
						minH={32}
						_box={{
							lightGrad: ['emerald.400', 'lime.200'],
							darkGrad: ['emerald.600', 'lime.300'],
						}}
						_heading={{
							color: 'lime.100',
						}}
						//colors={['red.400', 'amber.400']}
					/>
					<StoryBook
						navigation={navigation}
						open={() => setOpenProfil(true)}
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
						open={() => setOpenProfil(true)}
						name="Stats"
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
						open={() => setOpenProfil(true)}
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
						open={() => setOpenProfil(true)}
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
