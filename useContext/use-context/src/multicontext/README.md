# Компонент MultiContext

`MultiContext` - это функциональный компонент в React, использующий несколько контекстов (ThemeContext и LanguageContext), и включающий вложенные компоненты, которые используют эти контексты.

## Импорты

```javascript
import React from 'react';
import {ThemeContextProvider, useTheme} from './ThemeContextProvider';
import {LanguageContextProvider, useLanguage} from './LanguageContextProvider';
import NestedComponent from './NestedComponent';
import './MultiContext.css';
```
- `ThemeContextProvider` и `useTheme` предоставляют возможность работы с темой оформления.
- `LanguageContextProvider` и `useLanguage` позволяют управлять выбранным языком.
- `NestedComponent` - вложенный компонент, который может использовать оба контекста.

## Общая структура

```javascript
export default function MultiContext() {

    return (<ThemeContextProvider>
        <LanguageContextProvider>
            <Switchers/>
            <NestedComponent/>
        </LanguageContextProvider>
    </ThemeContextProvider>);
}
```
`MultiContext` оборачивает `LanguageContextProvider` и `Switchers` в `ThemeContextProvider`. Это означает, что во всех этих компонентах будет доступ к текущей теме и методу для ее изменения.

`Switchers` и `NestedComponent` обернуты в `LanguageContextProvider`, что дает им доступ к текущему языку и функции для его переключения.

```javascript
function Switchers() {
    const {toggleTheme} = useTheme();
    const {toggleLanguage} = useLanguage();

    return (<>
        <button onClick={toggleTheme}>
            Switch Theme
        </button>
        <button onClick={toggleLanguage}>
            Switch Language
        </button>
    </>);
}
```
`Switchers` - это компонент, который содержит две кнопки для переключения языка и темы. Нажатие на кнопку вызывает соответствующую функцию, полученную из контекста (`toggleTheme` или `toggleLanguage`).

## Примечания

При использовании нескольких контекстов нужно быть внимательным к тому, в каком из них требуется изменить данные, чтобы избежать ненужных ререндеров компонентов. Изменение данных в верхнем контексте приведет к ререндеру всех компонентов внутри него.

Также надо учитывать, что при создании страницы с множеством контекстов, их поддержка и тестирование могут быть более сложными, чем при использовании отдельных контекстов. Поэтому прежде чем использовать эту конструкцию, нужно обдумать, действительно ли она необходима в данном случае.

Стоит быть особенно внимательными при использовании вложенных компонентов, таких как `NestedComponent`, которые используют несколько контекстов. Ошибки в этих компонентах могут быть сложно уловимыми из-за взаимодействия контекстов. При возникновении проблем с последовательностью обновлений или поведением компонентов стоит проверить правильность использования контекстов и порядка вызова функций из них.
