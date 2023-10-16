import React from 'react';
import ReducerProblemFix from './reducer-problem-fix/ReducerProblemFix';
import ReducerProblem from './reducer-problem/ReducerProblem';
import './ProblemShowCase.css';

const items = Array.from({ length: 20 }, (_, id) => ({
    id,
    content: `Item ${id + 1}`,
    selected: false
}));

const ProblemShowCase = () => {
    return (
        <>
            <div className="wrapper">
                <ReducerProblemFix items={items}/>
                <ReducerProblem items={items}/>
            </div>
        </>
    );
};

export default ProblemShowCase;