import "./UseCallbackWithUseEffect.css";
import {WithOptimization} from './with-optimization/WithOptimization';
import {WithoutOptimization} from './without-optimization/WithoutOptimization';

export function UseCallbackWithUseEffect() {
    return (
        <>
            <div className="workspace">
                <WithOptimization />
                <WithoutOptimization />
            </div>
        </>
    )
}