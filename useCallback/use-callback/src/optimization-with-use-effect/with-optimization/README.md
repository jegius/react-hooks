# Описание компонента WithOptimization

## Введение

`WithOptimization` - это компонент React, который представляет собой интерфейс для поиска статей с помощью запроса от пользователя. Запрос от пользователя выполняется с помощью `debounce` из библиотеки `lodash` для оптимизации запросов.

## Структура компонента

Компонент состоит из следующих элементов:

- Import-фраза: Импортируются необходимые библиотеки и файлы.
- Объявление функции: Здесь начинается функция WithOptimization.
- `useState` для `query`, `data`, `functionCreationCounter`, `unrelatedState`: Инициализация состояния для различных переменных.
- Хук `useCallback` для `incrementCounter` и `fetchData` : Назначен, чтобы гарантировать, что функции сохраняют одну и ту же ссылку между рендерами, если их зависимости не изменяются.
- `useEffect` для `query`: Запускает `fetchData` каждый раз, когда `query` меняется.
- JSX: содержание возвращаемой разметки.

## Нюансы работы компонента

```jsx
import {useCallback, useEffect, useState} from 'react';
import { debounce } from 'lodash';

export function WithOptimization() {
    const [query, setQuery] = useState('react'); /* Начальное значение, которое пользователь ищет */
    const [data, setData] = useState(null); /* Сохраняет полученные данные */
    const [functionCreationCounter, setFunctionCreationCounter] = useState(0); /* Считает количество созданий функции */
    const [unrelatedState, setUnrelatedState] = useState(false); /* Нестрелоктирующее состояние, которое не влияет на другие элементы */

    const incrementCounter = useCallback(() => {
        setFunctionCreationCounter(prevState => prevState + 1) /* Увеличивает счетчик на 1 */
    }, []);

    const fetchData = useCallback(debounce((request) => {
        incrementCounter();
        fetch(https://hn.algolia.com/api/v1/search?query=${request}) /* Запрашивает данные от API */
            .then(response => response.json())
            .then(response => {
                setData(response?.hits.splice(0, 6)); /* Сохраняет данные в 'data' */
            })
            .catch(console.error);
    }, 500), [incrementCounter]); /* Использование 'debounce' оптимизирует число запросов */

    useEffect(() => {
        fetchData(query); /* Запрашивает данные каждый раз, когда 'query' изменяется */
    }, [query]);

    return (
        <div className="container">
            Функция создана {functionCreationCounter} количество раз
            <input
                className="input"
                onChange={e => setQuery(e.target.value)} /* Обновляет 'query', когда пользователь изменяет текст в поле ввода */
                placeholder="Search for articles..."
            />
            {data && <div className="results">
                {data.map((item, index) => (
                    <a key={index} className="link" href={item.url}> {item.title} </a> /* Отображает результаты поиска */
                ))}
            </div>}
            <button onClick={() => setUnrelatedState(!unrelatedState)}>Change unrelated state</button> /* Изменяет состояние, не связанное с остальными элементами */
        </div>
    );
}
```

Неочевидный нюанс используется здесь: при каждом вызове `fetchData`, вызывается также функция `incrementCounter`. Это позволяет отслеживать, сколько раз функция `fetchData` была создана и вызвана. Важно отметить, что благодаря использованию `useCallback` и `[incrementCounter]` в качестве зависимости, `fetchData` будет создана только один раз, что в целом улучшит производительность приложения.

Также следует заметить, что изменение состояния `unrelatedState` не приведет к пересозданию функций, что демонстрирует оптимизацию этого компонента.
Это достигается благодаря использованию `useCallback` для функций `incrementCounter` и `fetchData`, что гарантирует, что эти функции сохраняют ту же ссылку на протяжении различных рендеров, если их зависимости не меняются. В случае функции `fetchData`, ее единственной зависимостью является `incrementCounter`, а `unrelatedState` не входит в число этих зависимостей.

Поэтому, изменение `unrelatedState` через `setUnrelatedState` не вызовет пересоздания функций `fetchData` или `incrementCounter`, тем самым демонстрируя эффективную оптимизацию и предотвращение ненужных перерендеров нашего компонента.