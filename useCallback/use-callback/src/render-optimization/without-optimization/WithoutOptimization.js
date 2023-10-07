import {useCallback, useState} from 'react';
import RenderCounter from '../render-counter/RenderCounter';
import Child from './child/Child';
import './WithoutOptimization.css';

const WithoutOptimization = () => {
    const [text, setText] = useState('');

    const handleChange = useCallback((event) => {
        setText(event.target.value);
    }, []);

    return (
        <div className='without-optimization-content'>
            <RenderCounter/>
            <span>Вы ввели: {text}</span>
            <Child onChange={handleChange}/>
        </div>
    );
};

export default WithoutOptimization;