# Компонент ReducerProblemFix

ReducerProblemFix — это компонент, представляющий список, где каждый элемент может быть выбран или снят с выбора. Он использует React хук `useReducer` для управления состоянием каждого элемента в списке.

Также используется хук useCallback в презентационном компоненте `Item` для управления функцией `onClick`, которая подчеркивает императивный подход к обработке кликов.

## Описание элементов кода:

1. `import React, {useReducer, useCallback} from 'react';`

   Код импортирует React и хуки useReducer, useCallback. Хук useCallback используется для оптимизации работы функции `onClick`.

2. `const listReducer = (state = [], action) => {...};`

   `listReducer` - это редукционная функция, которая обрабатывает действия, связанные с выбором элементов списка.

3. `const Item = React.memo(({item, index, dispatch}) => {...});`

   `Item` - это презентационный компонент, который отображает элемент списка. Этот компонент также обновляется, чтобы принять параметр `dispatch`, который используется для отправки действий на редуктор.

4. `const onClick = () => dispatch({type: 'select', index});`

   Реализует функцию `onClick`, которая обрабатывает клик пользователя, выбирая элемент в списке.

5. `<Item key={item.id} item={item} index={index} dispatch={dispatch} />`

   Компонент `Item` используется с пропсами: `key`, `item`, `index` и `dispatch`, которые помогают управлять и каждым элементом и списком в целом.

6. `const [state, dispatch] = useReducer(listReducer, items);`

   Деструктуризация массива, возвращаемого `useReducer`. `state` — текущее состояние, `dispatch` — функция для обновления состояния.

7. `<ul className="list-container">...`

   Отображает список элементов. Каждый элемент списка выдаётся компонентом `Item`.

## Обратите внимание на:

* Наличие `useCallback` у onClick в компоненте `Item` позволяет избежать ненужных ререндеров. Эта функция остается неизменной между ререндерами, поэтому React сможет оптимизировать его поведение.
* `dispatch` передается в компонент `Item` вместо функции `onClick` и индекса. За счет этого, `Item` имеет доступ к `dispatch`, что позволяет ему непосредственно изменять состояние редуктора.
* `React.memo` используется для избежания ненужных рендеров.