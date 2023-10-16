# Компонент WithoutOptimization

**WithoutOptimization** - это компонент React, который предоставляет интерфейс для поиска статей с помощью запроса от пользователя.

## Описание работы компонента

Пользователь вводит запрос в текстовое поле, компонент отправляет это запрос на сервер и отображает полученную информацию.

```jsx
export function WithoutOptimization() {
    const [search, setSearch] = useState('react'); // Объявление состояния 'search' со стартовым значением 'react'.
    const [data, setData] = useState(null); // Объявление состояния 'data' с начальным значением null.
    const [functionCreationCounter, setFunctionCreationCounter] = useState(0); // Объявление состояния 'functionCreationCounter' с начальным значением 0.
    const [unrelatedState, setUnrelatedState] = useState(false); // Объявление состояния 'unrelatedState' с начальным значением false.

    useEffect(() => {
        fetchData(search); // вызывается при изменении 'search' или 'unrelatedState'.
    }, [search, unrelatedState]);   
```
Важным нюансом является то, что при изменении состояния `unrelatedState`, запускается эффект `useEffect`.

```jsx
   const fetchData = (query) => { 
        setFunctionCreationCounter(prevState => prevState + 1); // Увеличивает 'functionCreationCounter' на единицу.
        fetch(https://hn.algolia.com/api/v1/search?query=${query}) // Отправляет запрос к API.
            .then(response => response.json()) // Преобразовывает ответ в JSON
            .then(response => {
                setData(response?.hits.splice(0, 6)); // Обновляет состояние 'data'.
            })
            .catch(console.error); // Логирует ошибки в консоль.
    };

```

Функция `fetchData` вызывается при каждом изменении `search` или `unrelatedState`, что может привести к ненужным запросам и ререндерингу компонента.

```jsx
    return (
        // JSX разметка компонента
        <div className="container">
            Функция создана {functionCreationCounter} количество раз
            <input
                className="input"
                onChange={e => setSearch(e.target.value)} // Обновляет значение 'search' при изменении значения в поле ввода 
                placeholder="Search for articles..."
            />
            {data && (
            <div className="results">
                {data.map((item, index) => (
                    <a key={index} className="link" href={item.url}> {item.title} </a> // Отображает результаты поиска.
                ))}
            </div>)}
            <button onClick={() => setUnrelatedState(!unrelatedState)}>Change unrelated state</button> // Обновляет значение 'unrelatedState' при нажатии на кнопку.
        </div>
    );
}
```

## Нюансы работы компонента

Основной нюанс компонента заключается в том, что функция `fetchData` вызывается при любом изменении состояния `search` или `unrelatedState`.

При нажатии на кнопку "Change unrelated state" состояние `unrelatedState` обновляется, что приводит к новому вызову `fetchData`, хотя это не требуется. Это приводит к спаму запросов на сервер и ненужному обновлению состояния `data`, что приводит к ненужному расходу ресурсов и перерендерингу компонента.
Это поведение можем заметить, если отследим изменение счетчика создания функции `fetchData` (`functionCreationCounter`). Он увеличивается каждый раз, когда происходит вызов `fetchData`, в том числе и при нажатии кнопки для обновления `unrelatedState`.

Оптимизировать этот процесс можно с помощью использования хука `useCallback`, который позволит нам запомнить функцию `fetchData` и не создавать ее заново при каждом изменении `unrelatedState`. Это поможет предотвратить ненужные запросы и ререндеринги компонента.