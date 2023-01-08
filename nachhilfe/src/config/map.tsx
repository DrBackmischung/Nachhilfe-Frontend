// import {} from '../components/NativeBaseComponents/Alert';
const baseUrl = '../nb/components';

type mapping = {
	title: string;
	description: string;
	basic: React.Component;
	components: {
		component: any;
		title: string;
		description: string;
	}[];
};

export const mapping = {
	Profil: {
		title: 'Profil',
		description: '',
		basic: require('../components/tiles/Profil'),
		components: [
		],
	},
	Login: {
		title: 'Login',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Login'),
		components: [
		],
	},
	Stundenplaner: {
		title: 'Nachhilfestunden anlegen',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Stundenplaner'),
		components: [
		],
	},
	Kalender: {
		title: 'Kalender',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Kalender'),
		components: [
		],
	},
	Buchung: {
		title: 'Nachhilfestunde buchen',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Buchung'),
		components: [
		],
	},
	Registrierung: {
		title: 'Registrierung',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Registrierung'),
		components: [
		],
	},
	Chatbot: {
		title: 'Chatbot',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
		],
	},
	Rechnungen: {
		title: 'Rechnungen',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Rechnungen'),
		components: [
		],
	},
	Skills: {
		title: 'Skills',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Skills'),
		components: [
		],
	},
	Minecraft: {
		title: 'Minecraft',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Minecraft'),
		components: [
		],
	},
	Skillverwaltung: {
		title: 'Skillverwaltung',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Skillverwaltung'),
		components: [
		],
	},
	LearningPoints: {
		title: 'Learning Points',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/LearningPoints'),
		components: [
		],
	},
	TeachingPoints: {
		title: 'Teaching Points',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/TeachingPoints'),
		components: [
		],
	},
	ProfilePoints: {
		title: 'Profile Points',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/ProfilePoints'),
		components: [
		],
	},
	News: {
		title: 'News',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/News'),
		components: [
		],
	},
	Werbung: {
		title: 'Werbung',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Werbung'),
		components: [
		],
	},
};
