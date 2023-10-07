import React, {useReducer} from 'react';
import {RenderCounter} from './RenderCounter';

const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'select':
            return state.map((item, index) =>
                index === action.index ? {...item, selected: !item.selected} : item
            );
        default:
            return state;
    }
};
const Item = React.memo(({item, onClick}) => (
    <li
        className={`list-item ${item.selected ? 'selected' : ''}`}
        onClick={onClick}
    >
        <RenderCounter>
            {item.content}
        </RenderCounter>
    </li>
));

export default function ReducerProblem({items}) {
    const [state, dispatch] = useReducer(listReducer, items);

    return (
        <ul className="list-container">
            {state.map((item, index) => (
                <Item
                    key={item.id}
                    item={item}
                    onClick={() => dispatch({type: 'select', index})}
                />
            ))}
        </ul>
    );
}