import React, {useState} from 'react';
import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import SimpleExample from './simple-example/SimpleExample';
import CustomHookForRequest from './custom-hook-for-request/CustomHookForRequest';
import './App.css';

function App() {
    return (
        <>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Простой пример</h1>
                    <SimpleExample/>
                </>
                <>
                    <h1 className="title">Более сложный пример</h1>
                    <CustomHookForRequest/>
                </>
            </ComponentsWrapper>
        </>
    );
}

export default App;