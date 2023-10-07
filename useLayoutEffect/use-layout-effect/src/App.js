import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import ProblemWithRendering from './problem-with-rendering/ProblemWithRendering';
import CorrectUsage from './etalon-usage/CorrectUsage';

function App() {
  return (
      <>
        <ComponentsWrapper>
          <>
            <h1 className="title">Побочные эффекты при рендеринге</h1>
              <ProblemWithRendering />
          </>
          <>
            <h1 className="title">Правильное использование</h1>
              <CorrectUsage />
          </>
        </ComponentsWrapper>
      </>
  );
}

export default App;
