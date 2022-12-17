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
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Login: {
		title: 'Login',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Login'),
		components: [
			{
				component: require('../components/pages/Login/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Kalender: {
		title: 'Kalender',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Buchung: {
		title: 'Buchung',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Chat: {
		title: 'Chat',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Chatbot: {
		title: 'Chatbot',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Rechnungen: {
		title: 'Rechnungen',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	LearningPoints: {
		title: 'LearningPoints',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	TeachingPoints: {
		title: 'TeachingPoints',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	ProfilePoints: {
		title: 'ProfilePoints',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	News: {
		title: 'News',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Werbung: {
		title: 'Werbung',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
	Minecraft: {
		title: 'Minecraft',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Profil/main'),
				title: 'Profil',
				description: '',
			},
		],
	},
};
