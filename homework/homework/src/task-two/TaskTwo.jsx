import React from 'react'
import './TaskTwo.css';

export default function TaskTwo() {
    const update = useUpdate()
    return (
        <div className="TaskTwo">
            <button onClick={update}>Обновить компонент</button>
            <Root />
        </div>
    )
}

const Root = React.memo(() => {
    const [value, setValue] = React.useState('')
    const handleChange = React.useCallback((event) => {
        setValue(event.target.value)
    }, [])

    return (
        <form className="form-container">
            Введенное значение: {value}
            <Input onChange={handleChange} />
        </form>
    )
})

const Input = React.memo(({ onChange }) => {
    return (
        <div className="input-container">
            <input type="text" className="input-field" name="value" onChange={onChange} />
        </div>
    )
})

function useUpdate() {
    const [, setCount] = React.useState(0)
    return () => { setCount(counter => counter + 1) }
}