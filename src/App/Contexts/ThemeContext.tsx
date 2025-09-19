import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

export type Theme = "light" | "dark" | "blue" | "green";

interface ThemeContextType {
	currentTheme: Theme;
	setTheme: (theme: Theme) => void;
	availableThemes: {
		value: Theme;
		label: string;
	}[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
		return (localStorage.getItem("genetiq-theme") as Theme) || "light";
	});

	const availableThemes = [
		{
			value: "light" as Theme,
			label: "Light",
		},
		{
			value: "dark" as Theme,
			label: "Dark",
		},
		{
			value: "blue" as Theme,
			label: "Ocean Blue",
		},
		{
			value: "green" as Theme,
			label: "Forest Green",
		},
	];

	const setTheme = (theme: Theme) => {
		setCurrentTheme(theme);
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", currentTheme);
		localStorage.setItem("genetiq-theme", currentTheme);
	}, [currentTheme]);

	const value: ThemeContextType = {
		currentTheme,
		setTheme,
		availableThemes,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
