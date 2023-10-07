import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import SideEffect from './side-effect/SideEffect';
import WithDependency from './with-dependency/WithDependency';
import CancelEvent from './cancel-event/CancelEvent';
import ComponentLiveCycleEmulation from './component-live-cycle-emulation/ComponentLiveCycleEmulation';

function App() {
    return (
        <>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Побочные эффекты при рендеринге</h1>
                    <SideEffect/>
                </>
                <>
                    <h1 className="title">Использование массива зависимостей</h1>
                    <WithDependency/>
                </>
                <>
                    <h1 className="title">Отмена событий</h1>
                    <CancelEvent/>
                </>
                <>
                    <h1 className="title">Хуки жизненного цикла</h1>
                    <ComponentLiveCycleEmulation/>
                </>
            </ComponentsWrapper>
        </>
    );
}

export default App;
