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
			{
				component: require('../components/pages/Profil/skills'),
				title: 'Skills',
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
				title: 'Login',
				description: '',
			},
			{
				component: require('../components/pages/Login/register'),
				title: 'Registrieren',
				description: '',
			},
		],
	},
	Stundenplaner: {
		title: 'Nachhilfestunden anlegen',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Stundenplaner'),
		components: [
			{
				component: require('../components/pages/Buchung/main'),
				title: 'Nachhilfestunden anlegen',
				description: '',
			},
		],
	},
	Kalender: {
		title: 'Kalender',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Kalender'),
		components: [
			{
				component: require('../components/pages/Kalender/main'),
				title: 'Kalender',
				description: '',
			},
		],
	},
	Buchung: {
		title: 'Nachhilfestunde buchen',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Buchung'),
		components: [
			{
				component: require('../components/pages/Buchung/main'),
				title: 'Nachhilfestunde buchen',
				description: '',
			},
		],
	},
	Chat: {
		title: 'Chat',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Chat'),
		components: [
			{
				component: require('../components/pages/Chat/main'),
				title: 'Chat',
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
		basic: require('../components/tiles/Rechnungen'),
		components: [
			{
				component: require('../components/pages/Rechnungen/main'),
				title: 'Rechnungen',
				description: '',
			},
		],
	},
	Skills: {
		title: 'Skills',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Skills'),
		components: [
			{
				component: require('../components/pages/Rechnungen/main'),
				title: 'Skills',
				description: '',
			},
		],
	},
	Skillverwaltung: {
		title: 'Skillverwaltung',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Skillverwaltung'),
		components: [
			{
				component: require('../components/pages/Rechnungen/main'),
				title: 'Skills',
				description: '',
			},
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
			{
				component: require('../components/pages/News/main'),
				title: 'News',
				description: '',
			},
		],
	},
	Werbung: {
		title: 'Werbung',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Werbung'),
		components: [
			{
				component: require('../components/pages/Werbung/main'),
				title: 'Werbung',
				description: '',
			},
		],
	},
};
