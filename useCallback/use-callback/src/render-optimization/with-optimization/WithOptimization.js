import {useCallback, useState} from 'react';
import RenderCounter from '../render-counter/RenderCounter';
import Child from './child/Child';
import './WithOptimization.css';

const WithOptimization = () => {
    const [text, setText] = useState('');

    const handleChange = useCallback((event) => {
        setText(event.target.value);
    }, []);

    return (
        <div className='with-optimization-content'>
            <RenderCounter/>
            <span>Вы ввели: {text}</span>
            <Child onChange={handleChange}/>
        </div>
    );
};

export default WithOptimization;