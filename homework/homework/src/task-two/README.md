# Оптимизация рендеринга в React

Вашим заданием является оптимизация следующего компонента React с использованием хуков useCallback, useMemo, memo и useRef.

```jsx
import React from 'react'
import RenderCounter from './render-counter/RenderCounter';
import './TaskTwo.css';

export default function TaskTwo() {
    const update = useUpdate()
    return (
        <div className="TaskTwo">
            <button onClick={update}>Обновить компонент</button>
            {/*<RenderCounter />*/}
            <Root />
        </div>
    )
}

const Root = () => {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <form className="form-container">
            Введенное значение: {value}
            {/*<RenderCounter />*/}
            <Input onChange={handleChange} />
        </form>
    )
}

const Input = ({ onChange }) => {
    return (
        <div className="input-container">
            <input type="text" className="input-field" name="value" onChange={onChange} />
            {/*<RenderCounter />*/}
        </div>
    )
}

function useUpdate() {
    const [, setCount] = React.useState(0)
    return () => { setCount(counter => counter + 1) }
}
```
`RenderCounter` - это компонент, который подсчитывает, сколько раз он был отрендерен. Он используется для отслеживания эффективности вашей оптимизации.

### Инструкции
Для начала работы над этим заданием:
1. Создайте свою копию этого репозитория с помощью функции "Форк".
2. Создайте новую ветку для вашей работы, в названии ветки укажите номер выполняемого задания.
3. Откройте pull request против ветки master, когда вы завершите.


Ваша задача - минимизировать количество рендеров этих компонентов. В частности:

1. Когда вы нажимаете на кнопку "Обновить компонент", должен отрендериться только корневой компонент `TaskTwo`. Ни один из дочерних компонентов не должен перерендериваться.

2. Когда вы вводите данные в поле ввода (`input`), корневой компонент (`Root`) не должен перерисовываться.

Удачи в оптимизации!
