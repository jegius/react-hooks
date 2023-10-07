import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import ExpensiveOperation from './expancive-operation/ExpensiveOperation';
import Comparing from './comparing/Comparing';

function App() {
    return (
        <>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Работа с дорогими операциями</h1>
                    <ExpensiveOperation/>
                </>
                <>
                    <h1 className="title">Сравнение</h1>
                    <Comparing/>
                </>
            </ComponentsWrapper>
        </>
    );
}

export default App;
