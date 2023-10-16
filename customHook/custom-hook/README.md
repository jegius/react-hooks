# Советы по созданию кастомных хуков в React

## Введение
Перед тем, как мы начнем, важно помнить, что хуки - это мощный инструмент в эко-системе React, они позволяют использовать состояния и других возможности React без написания классов.

## Основные моменты
### Используйте стандартные хуки как основу

Ваши пользовательские куки должны опираться на встроенные хуки React, такие как `useState`, `useEffect`, `useContext` и др.

```jsx
function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
```
В примере выше мы используем хук `useEffect` для изменения заголовка документа.

### Дайте хукам говорящие имена

Обычно пользовательские куки начинаются с `use`, например `useDebounce`, `useLocalStorage`. Этот способ именования помогает легче определить, где именно в коде используются хуки.

```jsx
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}
```

### Используйте хуки для переиспользуемой логики

Создавайте пользовательские хуки для кода, логика которого может быть использована в разных компонентах.

```jsx
// хук useCounter
function useCounter() {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setValue(prevCount => prevCount - 1);
    };

    return [value, { increment, decrement }];
}
// Использование useCounter
export default function MyComponent() {
    const [count, {increment, decrement}] = useCounter();

    return (
        <div>
            {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
```

### Правила хуков

Помимо этих советов, всегда следуйте [Правилам хуков](https://ru.reactjs.org/docs/hooks-rules.html) от создателей React:

1. Только вызывайте хуки на верхнем уровне. Не вызывайте хуки внутри циклов, условий или вложенных функций.

2. Только вызывайте хуки из функциональных компонентов React. Не вызывайте хуки из обычных JavaScript-функций.
   Хуки синтаксический сахар, который работает только внутри функциональных компонентов React. Они не работают в классовых компонентах или обычных JavaScript-функциях. Другими словами, не вызывайте `useState`, `useEffect` и другие встроенные хуки из обычных функций. Вместо этого вызывайте их на верхнем уровне вашего функционального компонента или пользовательского хука.

Вот пример хорошего использования хука `useState`:

```jsx
function MyComponent() {
    // Хорошо: хук вызывается на верхнем уровне функционального компонента
    const [myState, setMyState] = useState(0);

    // some other code...

    return (
        <div>
            {/* some JSX... */}
        </div>
    );
}
```

А вот пример неправильного использования:

```jsx
function someRegularFunction() {
    // Плохо: хук вызывается в обычной функции, а не в функциональном компоненте React
    const [myState, setMyState] = useState(0);

    // some more code...
}
```

Такое использование вызовет ошибку в рантайме и ваше приложение перестанет работать. Всегда помните об этом правиле при использовании хуков.
```bash
# Установите зависимости
$ npm install

# Запустите проект
$ npm start
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере для отображения проекта.
