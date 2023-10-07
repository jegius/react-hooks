import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import './App.css';
import ReducerExample from './reducer-example/ReducerExample';
import ProblemShowCase from './reducer-problem/ProblemShowCase';

function App() {
    return (<>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Пример использования useReducer</h1>
                    <ReducerExample />
                </>
                <>
                    <h1 className="title">Проблемы useReducer</h1>
                    <ProblemShowCase />
                </>
            </ComponentsWrapper>
        </>);
}

export default App;
