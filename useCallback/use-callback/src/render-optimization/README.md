
# RenderOptimization

Компонент `RenderOptimization` представляет собой контейнерный компонент, в котором используются два других компонента: `WithOptimization` и `WithoutOptimization`.

Компонент отвечает за визуализацию обоих упомянутых компонентов на экране пользователя.

## Важные элементы кода:

### Импорт
```javascript
import WithoutOptimization from './without-optimization/WithoutOptimization';
import WithOptimization from './with-optimization/WithOptimization';
import './RenderOptimization.css';
```
Здесь мы импортируем два компонента `WithOptimization` и `WithoutOptimization`, а также добавляем файл с оформлением `RenderOptimization.css`.

### JSX
```javascript
return (
        <div className='render-optimization'>
            <WithoutOptimization/>
            <WithOptimization/>
        </div>
    );
```
Это JSX, который возвращается компонентом. Он состоит из див-контейнера с двумя дочерними компонентами `WithoutOptimization` и `WithOptimization`.

## Нюансы работы компонента:

Сам компонент `RenderOptimization` является относительно простым и не несет в себе никаких сложных логических или рендерных операций. Его основная задача - это отрендерить два дочерних компонента и предоставить стилизацию для них.

Однако, важным моментом является то, что были импортированы компоненты `WithoutOptimization` и `WithOptimization`. Эти две компоненты отвечают за различные оптимизированные и неоптимизированные сценарии отрисовки компонентов.

- [WithoutOptimization](./without-optimization/README.md) - демонстрирует работу компонента без оптимизации, что может привести к ненужным обновлениям и повторным отрисовкам.
- [WithOptimization](./with-optimization/README.md) - демонстрирует работу компонента с использованием методов оптимизации, которые можно применить для уменьшения количества ререндеров.

Упомянутые ссылки ведут на файлы README.md внутри соответствующих каждому компоненту директорий, где вы можете ознакомиться с подробным описанием их работы, нюансами и уникальными особенностями.