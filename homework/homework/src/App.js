import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import TaskOne from './task-one/TaskOne';
import TaskTwo from './task-two/TaskTwo';
import TaskThree from './task-three/TaskThree';

function App() {
  return (
      <>
        <ComponentsWrapper>
          <>
            <h1 className="title">Первое задание</h1>
            <TaskOne/>
          </>
          <>
            <h1 className="title">Второе задание</h1>
            <TaskTwo/>
          </>
          <>
            <h1 className="title">Третье задание</h1>
            <TaskThree/>
          </>
        </ComponentsWrapper>
      </>
  );
}

export default App;
