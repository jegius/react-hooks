# WithoutOptimization

Компонент `WithoutOptimization` представляет собой компонент, который использует React Hook `useState` для создания текстового состояния, обработчика `useCallback` для его обновления и дочерний компонент `Child` для ввода данных пользователем.

## Важные элементы кода:

### Импорт

```javascript
import {useCallback, useState} from 'react';
import RenderCounter from '../render-counter/RenderCounter';
import Child from './child/Child';
import './WithoutOptimization.css';
```
Здесь мы импортируем все необходимые компоненты. `useCallback` и `useState` это хуки из библиотеки React, `RenderCounter` и `Child` - это пользовательские компоненты.

### useState
```javascript
const [text, setText] = useState('');
```
Здесь используется React Hook `useState` для создания состояния `text`. `setText` - это функция, которая будет использоваться для обновления `text`.

### useCallback
```javascript
const handleChange = useCallback((event) => {
        setText(event.target.value);
    }, []);
```
Здесь используется мемоизирующий React Hook `useCallback` для создания обработчика изменений `handleChange`. Это гарантирует, что функция не изменяется при повторном рендеринге, что не вызывает повторного рендеринга дочерних компонентов.

### JSX
```javascript
return (
        <div className='without-optimization-content'>
            <RenderCounter/>
            <span>Вы ввели: {text}</span>
            <Child onChange={handleChange}/>
        </div>
    );
```
Это JSX код, возвращаемый компонентом. Он включает в себя `RenderCounter`, текстовый спан и `Child` компонент с переданным `handleChange`.

## Нюансы работы компонента:

В `WithoutOptimization` хоть и используется `useCallback` для обработчика событий `handleChange`,
если бы `Child` компонент был "тяжелым", то есть занимал много ресурсов при рендере, то использование `useCallback` могло бы быть излишним, и было бы целесообразнее обернуть `Child` в компонент высшего порядка (например, `React.memo`), который бы предотвратил повторные рендеры компонента при небольших изменениях пропсов.

Также стоит помнить, что при использовании `useCallback` его внешние зависимости должны быть указаны во втором аргументе (списке зависимостей). Если нет никаких зависимостей, как в нашем случае, то используется пустой массив `[]`. Если же внешних зависимостей не учесть, то хук может работать некорректно.