import './App.css';
import DebugValueUsage from './debug-value-usage/DebugValueUsage';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import DebugValueSecond from './debug-value-second/DebugValueSecond';

function App() {
    return (
        <ComponentsWrapper>
            <>
                <h1 className="title">Базовый пример</h1>
                <DebugValueUsage/>
            </>
            <>
                <h1 className="title">Еще один пример</h1>
                <DebugValueSecond/>
            </>
        </ComponentsWrapper>
    );
}

export default App;
