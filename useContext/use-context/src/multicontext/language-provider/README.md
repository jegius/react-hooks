# Компонент LanguageContextProvider

`LanguageContextProvider` - это компонент высшего порядка в React, использующий Context API для предоставления функционала, связанного с выбором языка в приложении. Он позволяет другим компонентам дочерним к нему получать и взаимодействовать с текущим выбранным языком.

## Импорты

```javascript
import React, { createContext, useContext, useState } from 'react';
```
Мы импортируем `createContext` и `useContext` из `react` для работы с контекстом, `useState` - для смены состояний.

## Описание

```javascript
const LanguageContext = createContext();
```
Создаем `LanguageContext` через функцию `createContext()`. Он будет использоваться для предоставления и использования контекста внутри других компонентов.

```javascript
export function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState('english');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'english' ? 'french' : 'english'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
```

Экспортируем функциональный компонент `LanguageContextProvider`. Этот компонент принимает `children` в качестве пропсов и возвращает компонент `LanguageContext.Provider`.

- В состоянии `language` по умолчанию устанавливается значение `english`.

- `toggleLanguage` - это функция, которая изменяет значение `language` на другое. Если текущий язык `english`, то он изменится на `french` и наоборот.

- `LanguageContext.Provider` принимает объект в качестве значения свойства `value`, который включает в себя текущий язык и функцию `toggleLanguage`. Значение будет доступно для всех дочерних компонентов, имеющих доступ к этому контексту.

- `{children}` позволяют компоненту включать произвольные дочерние элементы, что добавляет ему гибкости по сравнению с определением на уровне компонента.

```javascript
export function useLanguage() {
    return useContext(LanguageContext);
}
```
Экспортируется функция `useLanguage`, которая использует хук `useContext` для доступа к `LanguageContext`. Это удобный способ извлечения контекста, который может быть использован в любом месте приложения.

## Использование

С помощью `LanguageContextProvider`, вы можете обернуть любой компонент, который нуждается в доступе к данных языка. Может использоваться следующим образом:
```javascript
<LanguageContextProvider>
  <YourComponent />
</LanguageContextProvider>
```
В `YourComponent` или любом его дочернем компоненте можно теперь использовать функцию `useLanguage()` для доступа к `language` и `toggleLanguage`.

Особое внимание стоит уделить тому, что контекст не передается через пропсы, что может быть важным при проектировании архитектуры приложения. При некорректном использовании можно столкнуться со сложностями отладки и противоречивым поведением.
