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
		basic: require('../components/tiles/Profil'),
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
		basic: require('../components/tiles/Profil'),
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
		basic: require('../components/tiles/Profil'),
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
		basic: require('../components/tiles/Profil'),
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
		basic: require('../components/tiles/Profil'),
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
		basic: require('../components/tiles/Profil'),
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
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Rechnungen/main'),
				title: 'Skills',
				description: '',
			},
		],
	},
	Stats: {
		title: 'Stats',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Stats'),
		components: [
			/*{
				component: require('../components/pages/Points/learning'),
				title: 'Learning Points',
				description: '',
			},
			{
				component: require('../components/pages/Points/teaching'),
				title: 'Teaching Points',
				description: '',
			},
			{
				component: require('../components/pages/Points/profile'),
				title: 'Profile Points',
				description: '',
			},
			{
				component: require('../components/pages/Points/minecraft'),
				title: 'Minecraft',
				description: '',
			},*/
		],
	},
	News: {
		title: 'News',
		description: '',
		doclink: 'https://docs.nativebase.io/actionSheet',
		basic: require('../components/tiles/Profil'),
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
		basic: require('../components/tiles/Profil'),
		components: [
			{
				component: require('../components/pages/Werbung/main'),
				title: 'Werbung',
				description: '',
			},
		],
	},
};
