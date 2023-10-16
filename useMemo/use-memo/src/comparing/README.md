## Компонент Comparing

Этот компонент React предназначен для демонстрации использования хука React `useMemo`. Он позволяет пользователю менять цвет фона разметки, переключая случайным образом значения RGB (красный, зеленый, синий).

### Используемые элементы и их описание:

- `useState`: Этот хук React используется для управления состоянием цвета. Это значит, что цвет может быть изменен в любое время с помощью функции `setColorState`, что приводит к перерисовке компонента.

```javascript
const [colorState, setColorState] = useState(initialColorState);
```

- `initialColorState`: Это исходное значение состояния цвета. Применяется в качестве начального значения для `colorState`.

```javascript
const initialColorState = {
    color: {
        r: 255,
        g: 255,
        b: 255
    }
};
```

- `useMemo`: Данный React хук позволяет избежать повторного вычисления композитного значения при каждом рендере. Значение получается путем ключевого вычисления, которое определяется вторым аргументом функции `useMemo`.

```javascript
const memoizedColor = useMemo(() => {
    return `rgb(${colorState.color.r},${colorState.color.g},${colorState.color.b})`;
}, [colorState.color.r, colorState.color.g, colorState.color.b]);
```

- `changeColor`: Это функция, которая изменяет текущее значение `colorState`, устанавливая случайные значения RGB.

```javascript
const changeColor = () => {
    initialColorState.color.r = Math.floor(Math.random()*256);
    initialColorState.color.g = Math.floor(Math.random()*256);
    initialColorState.color.b = Math.floor(Math.random()*256);

    setColorState(initialColorState);
};
```

### Разметка и внешний вид:

Основная разметка компонента состоит из обертки `component`, внутри которой находится текст с текущим цветом и кнопка для изменения цвета.

```javascript
return (
    <div className="component" style={{backgroundColor: memoizedColor}}>
        <p>Текущий цвет: {memoizedColor}</p>
        <button className="button" onClick={changeColor}>Сменить цвет</button>
    </div>
);
```

### Нюансы:

1. Важно отметить, что `useMemo` используется для оптимизации производительности, предотвращая ненужные вычисления при каждом рендере. В данном случае, новая строка с значением для `backgroundColor` будет вычисляться только тогда, когда меняются значения `colorState.color.r`, `colorState.color.g` или `colorState.color.b`.
2. Прямое изменение свойств объекта `initialColorState` может вызвать неожиданное поведение, ведь изменять напрямую объекты состояния – плохая практика. Вместо этого стоит воспользоваться функцией обновления состояния и изменить состояние, передав новый объект. В данном случае эту проблему можно решить, передавая в `setColorState` новый объект.