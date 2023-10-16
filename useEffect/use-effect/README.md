## Главный компонент приложения - App

Компонент `App` является корневым компонентом приложения. Он объединяет все примеры использования хука `useEffect` и отображает их на одной странице.

### Содержание

1. Импорт модулей и компонентов
2. Рендеринг компонента

### 1. Импорт модулей и компонентов

```javascript
import './App.css';
import {ComponentsWrapper} from './ComponentsWrapper';
import SideEffect from './SideEffect';
import WithDependency from './WithDependency';
import CancelEvent from './CancelEvent';
import ComponentLiveCycleEmulation from './ComponentLiveCycleEmulation';
```
В этом примере мы импортируем `ComponentsWrapper`, который является оберткой для отображения набора компонентов, а также различные компоненты, демонстрирующие использование хука `useEffect`.

### 2. Рендеринг компонента
```javascript
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
```
Здесь мы рендерим приложение с использованием всех импортированных компонентов.

### Структура проекта

- [Побочные эффекты при рендеринге (`SideEffect`)](./src/side-effect/README.md)
- [Использование массива зависимостей (`WithDependency`)](./src/with-dependency/README.md)
- [Отмена событий (`CancelEvent`)](./src/cancel-event/README.md)
- [Хуки жизненного цикла (`ComponentLiveCycleEmulation`)](./src/component-live-cycle-emulation/README.md)

Cсылки ведут к отдельным файлам README.md, которые предоставляют детальное описание каждого компонента.

```bash
# Установите зависимости
$ npm install

# Запустите проект
$ npm start
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере для отображения проекта.