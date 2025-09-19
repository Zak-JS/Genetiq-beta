import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ChevronIcon from "../../../assets/ConcernWidget/Chevron.svg?react";
import CheckIcon from "../../../assets/General/CheckMark.svg?react";
import styles from "./LanguageSelector.module.scss";

const LanguageSelector: React.FC = () => {
	const { i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const availableLanguages = [
		{ value: "en", label: "English", flag: "🇺🇸" },
		{ value: "fr", label: "Français", flag: "🇫🇷" },
	];

	const handleLanguageChange = (newLanguage: string) => {
		void i18n.changeLanguage(newLanguage);
		setIsOpen(false);
	};

	const currentLanguage = availableLanguages.find(
		(lang) => lang.value === i18n.language,
	);

	return (
		<div className={styles.languageSelector}>
			<button
				className={styles.trigger}
				onClick={() => setIsOpen(!isOpen)}
				aria-label='Select language'
			>
				<span className={styles.flag}>{currentLanguage?.flag}</span>
				<span className={styles.label}>{currentLanguage?.label}</span>
				<ChevronIcon
					className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
				/>
			</button>

			{isOpen && (
				<div className={styles.dropdown}>
					{availableLanguages.map((langOption) => (
						<button
							key={langOption.value}
							className={`${styles.option} ${i18n.language === langOption.value ? styles.active : ""}`}
							onClick={() => handleLanguageChange(langOption.value)}
						>
							<span className={styles.flag}>{langOption.flag}</span>
							<span>{langOption.label}</span>
							{i18n.language === langOption.value && (
								<CheckIcon className={styles.checkmark} />
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default LanguageSelector;
