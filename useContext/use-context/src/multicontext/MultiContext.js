import React from 'react';
import {ThemeContextProvider, useTheme} from './theme-provider/ThemeContextProvider';
import {LanguageContextProvider, useLanguage} from './language-provider/LanguageContextProvider';
import NestedComponent from './neasted-component/NestedComponent';
import './MultiContext.css';

export default function MultiContext() {

    return (<ThemeContextProvider>
        <LanguageContextProvider>
            <Switchers/>
            <NestedComponent/>
        </LanguageContextProvider>
    </ThemeContextProvider>);
}

function Switchers() {
    const {toggleTheme} = useTheme();
    const {toggleLanguage} = useLanguage();

    return (<>
        <button onClick={toggleTheme}>
            Switch Theme
        </button>
        <button onClick={toggleLanguage}>
            Switch Language
        </button>
    </>);
}