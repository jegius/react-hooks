import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import UsingDependencies from './using-dependencies/UsingDependencies';
import RenderOptimization from './render-optimization/RenderOptimization';
import {UseCallbackWithUseEffect} from './optimization-with-use-effect/UseCallbackWithUseEffect';
import BadOptimization from './bad-optimization/BadOptimization';
import InfiniteLoop from './infinite-loop/InfiniteLoop';

function App() {
    return (
        <>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Правильное использование зависимостей</h1>
                    <UsingDependencies/>
                </>
                <>
                    <h1 className="title">Оптимизация рендеринга</h1>
                    <RenderOptimization />
                </>
                <>
                    <h1 className="title">Использование для оптимизации useEffect</h1>
                    <UseCallbackWithUseEffect />
                </>
                <>
                    <h1 className="title">Ненужная оптимизация</h1>
                    <BadOptimization />
                </>
                <>
                    <h1 className="title">Опасные зависимости</h1>
                    <InfiniteLoop />
                </>
            </ComponentsWrapper>
        </>
    );
}

export default App;
