# Компонент RenderCounter

RenderCounter - это функциональный компонент в React, который отслеживает и выводит количество раз, когда он отрисовывался. Это может быть полезно при оптимизации производительности React-компонентов, чтобы избегать ненужных повторных отрисовок.

## Описание элементов кода:

1. `import React, { useEffect, useRef } from 'react';`

   Импортируем React и необходимые React-хуки: useEffect и useRef. useEffect используется для выполнения побочных эффектов в функциональных компонентах, а useRef для создания ссылки на переменную.

2. `export const RenderCounter = ({ children }) => {...};`

   Экспортируем функциональный компонент RenderCounter, который принимает `children` в качестве пропов. Children позволяет нашему компоненту включать пользовательский контент.

3. `const renders = useRef(0);`

   Используем `useRef` для создания значения рендера с начальным состоянием 0. Этот хук даст нам возможность удерживать переменную между рендерами.

4. `useEffect(() => {...}, []);`

   Хук `useEffect` используется для увеличения значения `renders` на 1 каждый раз, когда компонент отрисовывается. Зависимости массива пуст, что означает, что этот хук будет вызываться при каждой отрисовке.

5. `return (...);`

   Возвращает jsx, который отображает количество рендеров и дочерние элементы.

## Важные моменты:

1. React `useRef` сохраняет свое состояние между рендерами, что делает его полезным для отслеживания числа рендеров. Оно изменится только если, мы явно изменим его.

2. В этом компоненте нету очистки side-effect в `useEffect`. Это связано с тем, что наш side-effect не создает такие вещи, как подписки или тайм-ауты, которые требуют очистки.

3. Важно помнить, что при использовании `useEffect` без пустого массива зависимостей вторым аргументом, эффект будет запускаться после каждого обновления.