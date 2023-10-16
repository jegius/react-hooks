# Описание компонента App

Основной корневой компонент приложения. Он содержит различные примеры использования хука `useContext` в различных контекстах.

## Подробное описание элементов кода

**Импорты:**

```javascript
import {ComponentsWrapper} from './ComponentsWrapper';
import StateManagement from './StateManagement';
import './App.css';
import MultiContext from './MultiContext';
```

- `ComponentsWrapper` - общий компонент-оболочка для всех компонентов в приложении.
- `StateManagement` - компонент, в котором показаны разные способы управления состоянием.
- Импорт файла CSS для стилей приложения.
- `MultiContext` - компонент, демонстрирующий работу с несколькими контекстами в React.

**Структура компонента:**

```javascript
function App() {
    return (
        <>
            <ComponentsWrapper>
                <>
                    <h1 className="title">Работа с стейтом</h1>
                    <StateManagement/>
                </>
                <>
                    <h1 className="title">Несколько Контекстов</h1>
                    <MultiContext />
                </>
            </ComponentsWrapper>
        </>
    );
}

export default App;
```

- В пакет компонента входят два основных раздела: "Работа с состоянием" и "Несколько контекстов". В каждом разделе содержится соответствующий заголовок и компонент, который демонстрирует определенный аспект использования хука `useContext`.

## Компоненты примеров

**Работа с состоянием:**

- Перейти к [Подробному описанию](./src/state-managment/README.md)

**Несколько контекстов:**

- Перейти к [Подробному описанию](./src/multicontext/README.md)
```bash
# Установите зависимости
$ npm install

# Запустите проект
$ npm start
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере для отображения проекта.