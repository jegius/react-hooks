## Компонент WithoutOptimization

Компонент `WithoutOptimization` представляет собой пример использования React, где выполняются тяжёлые вычисления, но без оптимизации с помощью `useMemo`.

### Составляющие компонента:

- `useState` : Этот хук используется для управления состоянием темы (`darkMode`) и введённого пользователем числа (`number`).

```javascript
const [number, setNumber] = useState(1);
const [darkMode, setDarkMode] = useState(false);
```

- `expensiveOperation` : Это "дорогостоящая" функция, которая выполняет утомительные вычисления на основе введенного числа.

```javascript
const expensiveResult = expensiveOperation(number)
```

- `setNumber` и `setDarkMode` : Это функции изменения состояния, которые вызываются при изменении введенного пользователем числа и переключении темы соответственно.

```javascript
onChange={(e) => setNumber(parseInt(e.target.value))}
onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
```

### Разметка и внешний вид:

Основа разметки отличается от версии с оптимизацией только отсутствием использования хука `useMemo`:

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

1. Поскольку в данном случае не используется мемоизация, дорогостоящая операция будет выполняться при каждом обновлении состояния. Это означает, что при каждом переключении темы на странице выполняется сложное вычисление, которое может ухудшить производительность.

2. Этот компонент идеально демонстрирует, почему важно использовать такие методы оптимизации, как `useMemo`: даже незначительные изменения в UI могут вызвать выполнение высокозатратных операций и замедлить работу приложения.

3. Обычно использовать `useMemo` стоит только тогда, когда эффект на производительность от низкой оптимизации становится заметным.