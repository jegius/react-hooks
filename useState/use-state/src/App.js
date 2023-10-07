import './App.css';
import {ShoppingCartWithProblem} from './shopping-cart/ShoppingCartWithProblem';
import {ShoppingCartWithoutProblem} from './shopping-cart/ShoppingCartWithoutProblem';
import {StateInitialization} from './state-initialization/StateInitialization';
import {TodoApp} from './todo-app/ToDoApp';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import DataFetcher from './data-fetcher/DataFetcher';


function App() {
    return (
        <>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Инициализация состояния</h1>
                    <StateInitialization />
                </>
                <>
                    <h1 className="title" >Обновление состояния</h1>
                    <TodoApp />
                </>
                <>
                    <h1 className="title">Асинхронное обновление состояния</h1>
                    <ShoppingCartWithProblem />
                    <ShoppingCartWithoutProblem />
                </>
                <>
                    <h1 className="title">Работа с асинхронными запросами</h1>
                    <DataFetcher />
                </>
            </ComponentsWrapper>
        </>
    );
}

export default App;
