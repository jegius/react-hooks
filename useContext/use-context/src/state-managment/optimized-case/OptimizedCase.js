import React, {useState, createContext, useContext, memo} from 'react';
import '../StateManagment.css';
import RenderCounter from '../render-counter/RenderCounter';

const ThemeContext = createContext();

export default function OptimizedCase() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className="wrapper">
                <div className="app">
                    <button className="theme-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        Switch Theme
                    </button>
                    <div className="component-wrapper">
                        <FirstThemedComponent/>
                        <SecondThemedComponent/>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

function FirstThemedComponent() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`themed-component ${theme}`}>
            <RenderCounter/>
            The current theme is: {theme}
        </div>
    );
}

const ChildComponent = memo(() => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`themed-component ${theme}`}>
            <RenderCounter/>
            The current theme is: {theme}
        </div>
    )
})

const SecondThemedComponent = memo(() => {
    return (
        <div className={`themed-component`}>
            <RenderCounter/>
            <ChildComponent />
        </div>
    );
})