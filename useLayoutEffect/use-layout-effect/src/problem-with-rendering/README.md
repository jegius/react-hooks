## Компонент ProblemWithRendering

Этот компонент React отображает текущее значение состояния и кнопку, нажатие на которую увеличивает это значение на 10. При каждом обновлении состояния вызывается функция `fibonacci`, которая возвращает соответствующее число Фибоначчи.

Функция реализована рекурсивным методом и может сильно замедлить работу приложения при больших значениях состояния, ведь она будет вызвана многократно для каждого уровня вычислений.

### Используемые элементы и их описание:

- `fibonacci`: Эта функция возвращает n-е число Фибоначчи. Она реализована рекурсивно, так что она будет вызывать сама себя до тех пор, пока число `num` не станет равным или меньше 1.
```javascript
const fibonacci = num =>
    num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
```
- `state`: Это состояние, которое хранит текущее число, для которого вычисляется число Фибоначчи. Значение состояния увеличивается на 10 при нажатии на кнопку. Создано с помощью хука `useState`.
```javascript
const [state, setState] = useState(1);
```
- `useLayoutEffect`: Этот React хук используется для вызова функции `fibonacci` при каждом обновлении состояния. Первым аргументом передается коллбэк, который будет вызван после каждого рендеринга, вторым - список зависимостей.
```javascript
useLayoutEffect(() => {
    fibonacci(state);
}, [state]);
```

### Разметка и внешний вид:

Разметка компонента состоит из контейнера, включающего в себя отображение текущего числа и кнопку для увеличения этого числа.
```javascript
return (
    <div className="container">
        {state}
        <button className="button" onClick={() => setState(state + 10)}>
            Увеличить
        </button>
    </div>
);
```

## Нюансы:

1. Использование рекурсивного вычисления числа Фибоначчи в `useLayoutEffect` приводит к замедлению работы приложения при больших значениях `state`. Это связано с тем, что для каждого числа n функция вызывает сама себя дважды, в результате чего количество операций растет экспоненциально.
2. `useLayoutEffect` вызывает функцию `fibonacci` при каждом изменении `state`, включая начальную инициализацию. Это можно контролировать, изменяя список зависимостей, переданный в `useLayoutEffect`.
3. Нажатие на кнопку увеличивает `state` на 10. Это увеличивает нагрузку на функцию `fibonacci`, что увеличивает время ожидания при рендеринге нового состояния.