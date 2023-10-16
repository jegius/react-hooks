import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState('english');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'english' ? 'french' : 'english'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
export function useLanguage() {
    return useContext(LanguageContext);
}