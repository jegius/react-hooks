# Компонент CustomHookForRequest

Компонент `CustomHookForRequest` объединяет идеи хуков и запросов данных, используя библиотеку `axios`. Компонент возвращает список постов, полученных с помощью пользовательского хука `useFetch`.

## Подробности реализации

### Импорты

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomHookForRequest.css';
```

Здесь мы импортируем необходимые зависимости. `React`, `useState` и `useEffect` будут использованы для обработки состояния и жизненного цикла компонента, `axios` будет использован для HTTP-запроса, а `CustomHookForRequest.css` - это внешний файл стилей.

### Кастомный хук useFetch

```jsx
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
```

В начале определяется кастомный хук `useFetch`, который принимает `url` в качестве аргумента. Затем он инициализирует три состояния: `data` (данные, полученные от запроса), `loading` (статус загрузки запроса) и `error` (ошибки, возникшие во время выполнения запроса).

### Хук useEffect

```jsx
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])
```

`useEffect` запускается при каждом обновлении URL, вызывая асинхронную функцию `fetchData`. Эта функция выполняет GET-запрос к переданному URL, устанавливает полученные данные в `data`, в случае ошибки передает ошибку в `error` и после выполнения запроса устанавливает `loading` в `false`.

### Возвращаемые значения

```jsx
    return { data, loading, error };
```

`useFetch` возвращает объект со свойствами `data`, `loading`, `error`, который затем используется в компоненте `CustomHookForRequest`.

### Отслеживание состояния запроса

```jsx
function CustomHookForRequest() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return 'Loading...';
    if (error) return 'Error!';
```

Компонент `CustomHookForRequest` вызывает `useFetch` перед URL, результаты которого затем используются для отображения данных, состояния загрузки и ошибок.

### Рендер данных

```jsx
    return (
        <div className="app">
            {data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
    );
```

После обновления данных компонент возвращает `div`, который отображает данные поста. Ключ используется для улучшения производительности при рендеринге списка.

### Экспорт модуля

```jsx
export default CustomHookForRequest;
```

## Важные нюансы

* `useEffect` выполняется при каждом обновлении URL. Если запрос не зависит от каких либо внешних переменных, его следует поместить внутрь `useEffect`, чтобы избежать ненужных запросов.
* `try-catch-finally` используется для обработки ошибок и завершения запроса при возникновении ошибок.
* `axios.get(url)` выполняет GET-запрос, и данные из ответа устанавливаются в состояние. В случае ошибки она сохраняется в состоянии `error`.
* `key={item.id}` используется в списке, чтобы помочь React определить, какие элементы изменяются, добавляются или удаляются. Он должен быть уникальным и стабильным между рендерами.