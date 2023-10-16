import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import ClassicUsage from './classic-usage/ClassicUsage';
import RenderOptimization from './render-optimization/RenderOptimization';
import CallbackStorage from './callback-storage/CallbackStorage';
import ProblemWithUseEffect from './problem-with-use-effect/ProblemWithUseEffect';
import BrowserEventsWithRef from './browser-events-with-ref/BrowserEventsWithRef';

function App() {
  return (
      <>
        <ComponentsWrapper>
          <>
            <h1 className="title">Пример использования useRef</h1>
              <ClassicUsage />
          </>
          <>
            <h1 className="title">Оптимизация рендера с помощью useRef</h1>
              <RenderOptimization />
          </>
          <>
            <h1 className="title">Хранение значения с помощью useRef</h1>
              <CallbackStorage />
          </>
          <>
            <h1 className="title">Проблемы с использованием useEffect</h1>
              <ProblemWithUseEffect />
          </>
          <>
            <h1 className="title">Работа с браузерными событиями</h1>
              <BrowserEventsWithRef />
          </>
        </ComponentsWrapper>
      </>
  );
}

export default App;
