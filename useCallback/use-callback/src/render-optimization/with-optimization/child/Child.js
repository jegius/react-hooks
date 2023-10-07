import {memo} from 'react';
import RenderCounter from '../../render-counter/RenderCounter';

const Child = ({ onChange }) => {
    return (
        <div className='child-wrapper'>
            Child component
            <RenderCounter/>
            <input type="text" placeholder="Введите что-нибудь" onChange={onChange} />
        </div>
    );
};

export default memo(Child);