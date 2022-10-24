import './index.scss';
import Hello from '../Hello';
import Cubespinner from '../Cubespinner';

const Banner = () => {
    return (
        <div className='banner'>

            <div className='intro'>
                <Hello />
            </div>
            <div className='stage-cube-cont'>
                <Cubespinner />
            </div> 
        </div>
    );
}

export default Banner