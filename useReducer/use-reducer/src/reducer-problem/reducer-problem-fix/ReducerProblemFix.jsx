import React, { useReducer, useCallback } from 'react';
import { RenderCounter } from '../render-counter/RenderCounter';

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

const Item = React.memo(({ item, index, dispatch }) => {
    const onClick = () => dispatch({ type: 'select', index });

    return (
        <li
            className={`list-item ${item.selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <RenderCounter>
                {item.content}
            </RenderCounter>
        </li>
    );
});


export default function ReducerProblemFix({ items }) {
    const [state, dispatch] = useReducer(listReducer, items);

    return (
        <ul className="list-container">
            {state.map((item, index) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        index={index}
                        dispatch={dispatch}
                    />
                )
            })}
        </ul>
    );
}