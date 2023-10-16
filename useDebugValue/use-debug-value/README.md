# Примеры использования хука useDebugValue в React

Библиотека кода состоит из нескольких примеров, демонстрирующих использование хука `useDebugValue` в React.

**Структура проекта:**

```bash
├── App.css
├── debug-value-usage
│   ├── DebugValueUsage.js
│   └── README.md
├── debug-value-second
│   ├── DebugValueSecond.js
│   └── README.md
└── components-wrapper
    ├── ComponentsWrapper.js
    └── README.md
```
Каждый пример сопровождается файлом README.md, в котором детально описан функционал и особенности его реализации.

**[DebugValueUsage](src/debug-value-usage/README.md)**
* Базовый пример использования `useDebugValue` для отображения состояния загрузки в инструментах разработки React.

**[DebugValueSecond](src/debug-value-second/README.md)**
* Еще один пример использования `useDebugValue`, который демонстрирует различные варианты его применения в зависимости от условий и состояний.

Все примеры собраны в главном компоненте `App` и обернуты в `ComponentsWrapper`. Подробнее про `ComponentsWrapper` можно узнать в его [файле README.md](./components-wrapper/README.md).

**App.js**

```javascript
import './App.css';
import DebugValueUsage from './DebugValueUsage';
import {ComponentsWrapper} from './ComponentsWrapper';
import DebugValueSecond from './DebugValueSecond';

function App() {
    return (
        <ComponentsWrapper>
            <>
                <h1 className="title">Базовый пример</h1>
                <DebugValueUsage/>
            </>
            <>
                <h1 className="title">Еще один пример</h1>
                <DebugValueSecond/>
            </>
        </ComponentsWrapper>
    );
}

export default App;
```
Так, в корневом файле README собраны ссылки на все примеры использования `useDebugValue`, объединенные под одной оболочкой для более удобного доступа и изучения.

```bash
# Установите зависимости
$ npm install

# Запустите проект
$ npm start
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере для отображения проекта.