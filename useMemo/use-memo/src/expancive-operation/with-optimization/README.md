## Компонент WithOptimization

Этот компонент React демонстрирует применение хука `useMemo` для оптимизации тяжёлых вычислений. Здесь происходит переключение темы приложения и выполнение "дорогой" операции над вводимым пользователем числом: результат операции условно требует значительных вычислительных ресурсов.

### Используемые элементы и их описание:

- `useState`: Этот хук используется для управления состоянием темы (`darkMode`) и вводимого числа (`number`).

```javascript
const [number, setNumber] = useState(1);
const [darkMode, setDarkMode] = useState(false);
```

- `useMemo`: Этот хук применяется для оптимизации дорогостоящей операции. Значение `expensiveResult` вычисляется только тогда, когда меняется `number`.

```javascript
const expensiveResult = useMemo(() => expensiveOperation(number), [number]);
```

- `expensiveOperation`: Это "дорогая" функция, которая делает какое-то условно сложное и времязатратное вычисление на основании введенного числа.

```javascript
import {expensiveOperation} from '../ExpensiveOperation';
```

- Функции `setNumber` и `setDarkMode` вызываются при изменении вводимого числа и при переключении темы соответственно.

```javascript
onChange={(e) => setNumber(parseInt(e.target.value))}
onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
```

### Разметка и внешний вид:

В основе разметки лежит блок, класс которого зависит от состояния `darkMode`. Внутри данного блока имеется кнопка для переключения темы, поле ввода числа и блок, отображающий результат "дорогой" операции.

```javascript
return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
        <button className="toggle-button" onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}>
            Сменить тему
        </button>
        <input
            type="number"
            value={number}
            className="input-field"
            onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <div className="result-block">Результат ресурсоёмкой операции: {expensiveResult}</div>
    </div>
);
```

### Нюансы:

1. Важно помнить, что хотя и хук `useMemo` используется для оптимизации вычислений, он сам по себе тоже стоит "денег" в виде выполнения дополнительного кода. Следует использовать его только при необходимости, когда операция действительно требует значительных ресурсов.

2. Событие изменения в поле ввода вызывает функцию `setNumber`, которая в свою очередь вызывает перерендеринг компонента. Если бы мы не использовали `useMemo`, "дорогая" операция выполнялась бы при каждом таком перерендеринге, даже когда меняется только тема оформления.