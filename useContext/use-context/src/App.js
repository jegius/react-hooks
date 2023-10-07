import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import StateManagement from './state-managment/StateManagement';
import './App.css';
import MultiContext from './multicontext/MultiContext';

function App() {
    return (
        <>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Работа с стейтом</h1>
                    <StateManagement/>
                </>
                <>
                    <h1 className="title">Несколько Контекстов</h1>
                    <MultiContext />
                </>
            </ComponentsWrapper>
        </>
    );
}

export default App;
