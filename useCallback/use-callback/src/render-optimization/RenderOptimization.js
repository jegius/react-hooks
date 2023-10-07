import WithoutOptimization from './without-optimization/WithoutOptimization';
import WithOptimization from './with-optimization/WithOptimization';
import './RenderOptimization.css';

const RenderOptimization = () => {
    return (
        <div className='render-optimization'>
            <WithoutOptimization/>
            <WithOptimization/>
        </div>
    );
};

export default RenderOptimization;