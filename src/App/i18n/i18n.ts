import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
	en: {
		translation: {
			dashboard: {
				title: "Health Dashboard",
				digitalTwin: "Digital Twin",
				healthMetrics: "Health Metrics",
				riskAssessment: "Risk Assessment",
				settings: "Settings",
			},
			navbar: {
				profile: "Profile",
				notifications: "Notifications",
				manageData: "Manage Data",
			},
			widgets: {
				tracker: {
					title: "Health Tracker",
					checking: "Stay tuned. We are checking your",
					cholesterol: "Cholesterol",
					resultsExpected: "results expected in",
					days: "days",
				},
				age: {
					title: "Age Analysis",
					biologicalAge: "Biological Age",
					chronologicalAge: "Chronological Age",
				},
				concerns: {
					title: "Health Concerns",
					showMore: "Show More",
					showLess: "Show Less",
				},
				systemDetail: "System Details",
			},
			themes: {
				light: "Light",
				dark: "Dark",
				blue: "Ocean Blue",
				green: "Forest Green",
			},
			languages: {
				en: "English",
				fr: "Français",
			},
		},
	},
	fr: {
		translation: {
			dashboard: {
				title: "Tableau de Bord Santé",
				digitalTwin: "Jumeau Numérique",
				healthMetrics: "Métriques de Santé",
				riskAssessment: "Évaluation des Risques",
				settings: "Paramètres",
			},
			navbar: {
				profile: "Profil",
				notifications: "Notifications",
				manageData: "Gérer les Données",
			},
			widgets: {
				tracker: {
					title: "Suivi de Santé",
					checking: "Restez à l'écoute. Nous vérifions votre",
					cholesterol: "Cholestérol",
					resultsExpected: "résultats attendus dans",
					days: "jours",
				},
				age: {
					title: "Analyse d'Âge",
					biologicalAge: "Âge Biologique",
					chronologicalAge: "Âge Chronologique",
				},
				concerns: {
					title: "Préoccupations de Santé",
					showMore: "Voir Plus",
					showLess: "Voir Moins",
				},
				systemDetail: "Détails du Système",
			},
			themes: {
				light: "Clair",
				dark: "Sombre",
				blue: "Bleu Océan",
				green: "Vert Forêt",
			},
			languages: {
				en: "English",
				fr: "Français",
			},
		},
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		debug: false,

		interpolation: {
			escapeValue: false,
		},

		detection: {
			order: ["localStorage", "navigator", "htmlTag"],
			caches: ["localStorage"],
			lookupLocalStorage: "genetiq-language",
		},
	});

export default i18n;
