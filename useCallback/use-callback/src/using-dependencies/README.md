# UsingDependencies

Компонент `UsingDependencies` — это компонент, в котором используются два других компонента: `ProblemCase` и `CorrectCase`. Эти два компонента демонстрируют различия в использовании хуков `useState` и `useCallback` в React.

## Важные элементы кода:

### Импорт:

```javascript
import './UsingDependencies.css';
import ProblemCase from './problem-case/ProblemCase';
import CorrectCase from './correct-case/CorrectCase';
```
Мы импортируем `ProblemCase` и `CorrectCase` — два различных компонента, демонстрирующих подходы к использованию `useState` и `useCallback`. Также импортируется файл стилей.

### JSX:

```javascript
return (
    <>
        <ProblemCase />
        <CorrectCase />
    </>
);
```
Суть компонента `UsingDependencies` заключается в отображении двух других компонентов: `ProblemCase` и `CorrectCase`.

## Нюансы работы компонента:

Компонент `UsingDependencies` сам по себе не содержит побочных эффектов или сложных взаимодействий, но он связан с двумя другими компонентами, которые демонстрируют распространенные ошибки и правильное использование хуков в React.

## Ссылки на описания отдельных компонентов:

1. [ProblemCase](./problem-case/README.md):
   Компонент `ProblemCase` реализует скелет кнопки увеличения счетчика, где есть проблема с зависимостями. Счетчик не работает должным образом из-за того, что в `useCallback` не указан `count` в качестве зависимости.

1. [CorrectCase](./correct-case/README.md):
   Компонент `CorrectCase` решает проблему, выявленную в `ProblemCase`, выполняя корректное использование `useCallback` посредством включения `count` в массив зависимостей.

Всегда будьте внимательны при добавлении зависимостей для `useCallback` и `useEffect` и убедитесь, что включили все необходимые переменные, чтобы избежать непредсказуемого поведения.