import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import UseImperativeHandleUsage from './use-imperative-handle-usage/UseImperativeHandleUsage';

function App() {
  return (
      <>
        <ComponentsWrapper>
          <>
            <h1 className="title">Побочные эффекты при рендеринге</h1>
              <UseImperativeHandleUsage/>
          </>
        </ComponentsWrapper>
      </>
  );
}

export default App;
