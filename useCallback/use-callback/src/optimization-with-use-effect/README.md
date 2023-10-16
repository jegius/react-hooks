# UseCallbackWithUseEffect

Проект `UseCallbackWithUseEffect` включает в себя два основных компонента: [WithOptimization](./with-optimization/README.md) и [WithoutOptimization](./without-optimization/README.md). Эти компоненты демонстрируют использование хука `useCallback` с `useEffect` для оптимизации повторного рендеринга компонентов и ограничения лишних запросов к серверу в React.

## Содержание:
1. [WithOptimization](./with-optimization/README.md)
2. [WithoutOptimization](./without-optimization/README.md)

Компоненты реализуют следующий функционал:
- Пользователь вводит текст в поле поиска.
- Состояние `search` обновляется с каждым вводом.
- Функция `fetchData` вызывается при каждом обновлении `search`, отправляя запросы к API, и отображает полученные данные.

Однако, есть основные различия в работе этих компонентов:
- В компоненте [WithoutOptimization](./without-optimization/README.md), вызов `fetchData` происходит при обновлении любого из состояний `search` или `unrelatedState`. Это ведет к ненужным запросам и повторному рендерингу компонента.
- В компоненте [WithOptimization](./with-optimization/README.md), применяется хук `useCallback`, что позволяет оптимизировать вызов `fetchData` так, чтобы он происходил только при обновлении `search`.

Это позволяет наглядно продемонстрировать, как с помощью `useCallback` и `useEffect` можно оптимизировать повторный рендеринг и предотвратить ненужные запросы к API.

Подробное описание работы каждого из компонентов, включая нюансы работы отдельного кода, смотрите в соответствующих ссылках:
1. [WithOptimization](./with-optimization/README.md)
2. [WithoutOptimization](./without-optimization/README.md)

### Код модуля:

```javascript
import "./UseCallbackWithUseEffect.css";
import { WithOptimization } from './with-optimization/WithOptimization';
import { WithoutOptimization } from './without-optimization/WithoutOptimization';
```
Здесь импортируются стили и два модуля: `WithOptimization` и `WithoutOptimization`.

```javascript
export function UseCallbackWithUseEffect() {
    return (
        <>
            <div className="workspace">
                <WithOptimization />
                <WithoutOptimization />
            </div>
        </>
    )
}
```
В этом основном компоненте отображаются два дочерних компонента `WithOptimization` и `WithoutOptimization`.