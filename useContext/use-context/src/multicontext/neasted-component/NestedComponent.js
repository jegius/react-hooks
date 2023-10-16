import React from 'react';
import { useTheme } from '../theme-provider/ThemeContextProvider';
import { useLanguage } from '../language-provider/LanguageContextProvider';

function NestedComponent() {
    const { theme } = useTheme();
    const { language } = useLanguage();

    const greetings = {
        english: ['Hello World', 'Good Morning', 'Good Afternoon', 'Good Evening'],
        french: ['Bonjour le monde', 'Bonjour', 'Bon après-midi', 'Bonsoir'],
    };

    return (
        <div className={`my-component ${theme}`}>
            {
                greetings[language].map((line, i) => <LanguageLine key={i} text={line} />)
            }
        </div>
    );
}

function LanguageLine({ text }) {
    const { theme } = useTheme();

    return <p className={`language-line ${theme}`}>{text}</p>;
}

export default NestedComponent;