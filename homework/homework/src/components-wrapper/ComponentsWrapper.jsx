import './ComponentsWeapper.css';
import { useState } from 'react';
import * as React from 'react';


export function ComponentsWrapper({children}) {
    const [currentSection, setCurrentSection] = useState(0);
    const childrenLength = React.Children.count(children);

    const handleClickNext = () => {
        if (currentSection < childrenLength) {
            setCurrentSection(currentSection + 1);
        }
    };

    const handleClickPrevious = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
    };
    return (
        <>
            {React.Children.map(children, (child, index) =>
                <div className={`section ${currentSection === index ? 'active' : ''}`}>
                    {child}
                </div>)}


            <div className="button-container">
                <button onClick={handleClickPrevious} disabled={currentSection === 0}>
                    Назад
                </button>
                <button onClick={handleClickNext} disabled={currentSection === childrenLength - 1}>
                    Вперед
                </button>
            </div>
        </>
    );
}
