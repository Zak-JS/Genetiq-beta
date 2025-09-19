import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../App/Contexts/ThemeContext";
import ChevronIcon from "../../../assets/ConcernWidget/Chevron.svg?react";
import CheckIcon from "../../../assets/General/CheckMark.svg?react";
import styles from "./ThemeSelector.module.scss";

const ThemeSelector: React.FC = () => {
	const { currentTheme: theme, availableThemes, setTheme } = useTheme();
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const handleThemeChange = (newTheme: typeof theme) => {
		setTheme(newTheme);
		setIsOpen(false);
	};

	return (
		<div className={styles.themeSelector}>
			<button
				className={styles.trigger}
				onClick={() => setIsOpen(!isOpen)}
				aria-label='Select theme'
			>
				<div className={styles.colorPreview} data-theme={theme} />
				<span className={styles.label}>{t(`themes.${theme}`)}</span>
				<ChevronIcon
					className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
				/>
			</button>

			{isOpen && (
				<div className={styles.dropdown}>
					{availableThemes.map((themeOption) => (
						<button
							key={themeOption.value}
							className={`${styles.option} ${theme === themeOption.value ? styles.active : ""}`}
							onClick={() => handleThemeChange(themeOption.value)}
						>
							<div
								className={styles.colorPreview}
								data-theme={themeOption.value}
							/>
							<span>{t(`themes.${themeOption.value}`)}</span>
							{theme === themeOption.value && (
								<CheckIcon className={styles.checkmark} />
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default ThemeSelector;
