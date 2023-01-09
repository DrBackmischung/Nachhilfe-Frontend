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
import { Dimensions, Linking, ScrollView, StatusBar } from 'react-native';
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
import { StatsDialog } from '../../components/pages/Stats/dialog';
import { BuchungsDialog } from '../../components/pages/Buchung/dialog';
import { RegistrierungsDialog } from '../../components/pages/Registrierung/dialog';
import { MCDialog } from '../../components/pages/Minecraft/dialog';
import { Platform } from 'react-native';
import { BUTPDialog } from '../../components/pages/BUTP/dialog';
import { KalenderDialog } from '../../components/pages/Kalender/dialog';
import { RechnungenDialog } from '../../components/pages/Rechnungen/dialog';

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
	const [isOpenStats, setOpenStats] = useState(false);
	const [isOpenBuchung, setOpenBuchung] = useState(false);
	const [isOpenRegistrierung, setOpenRegistrierung] = useState(false);
	const [isOpenMC, setOpenMC] = useState(false);
	const [isOpenBUTP, setOpenBUTP] = useState(false);
	const [isOpenKalender, setOpenKalender] = useState(false);
	const [isOpenRechnungen, setOpenRechnungen] = useState(false);

	(function(w, d) { w.CollectId = "63a1d8d49eed8935fca50263"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);
	
	return (

		<Layout>
			<ProfilDialog isOpen={isOpenProfil} close={() => setOpenProfil(false)} />
			<LoginDialog isOpen={isOpenLogin} close={() => setOpenLogin(false)} />
			<SkillsDialog isOpen={isOpenSkills} close={() => setOpenSkills(false)} />
			<SkillverwaltungDialog isOpen={isOpenSkillVerwaltung} close={() => setOpenSkillVerwaltung(false)} />
			<StundenplanerDialog isOpen={isOpenStundenplaner} close={() => setOpenStundenplaner(false)} />
			<StatsDialog isOpen={isOpenStats} close={() => setOpenStats(false)} />
			<BuchungsDialog isOpen={isOpenBuchung} close={() => setOpenBuchung(false)} />
			<RegistrierungsDialog isOpen={isOpenRegistrierung} close={() => setOpenRegistrierung(false)} />
			<MCDialog isOpen={isOpenMC} close={() => setOpenMC(false)} />
			<BUTPDialog isOpen={isOpenBUTP} close={() => setOpenBUTP(false)} />
			<KalenderDialog isOpen={isOpenKalender} close={() => setOpenKalender(false)} />
			<RechnungenDialog isOpen={isOpenRechnungen} close={() => setOpenRechnungen(false)} />
			<ScrollView
				contentContainerStyle={{ width: '100%' }}
				showsVerticalScrollIndicator={false}
			>
				<MasonaryLayout
					column={useBreakpointValue({
						base: [1, 1],
						sm: [1, 1],
						md: [1, 1, 1],
						lg: [1, 1, 1, 1],
						// xl: [1, 1, 1, 1, 1],
					})}
					_hStack={{
						space: 4,
						mb: 4,
						pt: '150px',
					}}
					_vStack={{ space: 4 }}
				>
					<StoryBook
						navigation={navigation}
						open={() => setOpenLogin(true)}
						name="Login"
						minH={175}
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
						open={() => setOpenRegistrierung(true)}
						name="Registrierung"
						minH={175}
						_box={{
							lightGrad: ['red.400', 'orange.200'],
							darkGrad: ['red.600', 'orange.300'],
						}}
						_heading={{
							color: 'amber.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						open={() => setOpenProfil(true)}
						name="Profil"
						minH={150}
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
						open={() => setOpenMC(true)}
						name="Minecraft"
						// colors={['green.700', 'lime.200']}
						minH={150}
						_box={{
							lightGrad: ['green.800', 'green.300'],
							darkGrad: ['green.900', 'green.500'],
						}}
						_heading={{
							color: 'lightBlue.100',
						}}
					/>
					<StoryBook
						navigation={navigation}
						open={() => setOpenStats(true)}
						name="LearningPoints"
						// colors={['green.700', 'lime.200']}
						minH={150}
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
						open={() => setOpenSkillVerwaltung(true)}
						name="Skillverwaltung"
						minH={150}
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
						open={() => setOpenSkills(true)}
						name="Skills"
						minH={150}
						_box={{
							lightGrad: ['red.400', 'amber.200'],
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
						minH={250}
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
						open={() => setOpenStats(true)}
						name="TeachingPoints"
						// colors={['green.700', 'lime.200']}
						minH={150}
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
						open={() => setOpenKalender(true)}
						name="Kalender"
						minH={250}
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
						open={() => setOpenBuchung(true)}
						name="Buchung"
						minH={250}
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
						open={() => setOpenRechnungen(true)}
						name="Rechnungen"
						minH={250}
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
						open={() => setOpenStats(true)}
						name="ProfilePoints"
						// colors={['green.700', 'lime.200']}
						minH={150}
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
						open={() => setOpenBUTP(true)}
						name="BUTP"
						minH={150}
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
						open={() => {Linking.openURL('https://www.rnz.de/')}}
						name="News"
						minH={50}
						_box={{
							lightGrad: ['cyan.400', 'teal.200'],
							darkGrad: ['cyan.600', 'teal.300'],
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
