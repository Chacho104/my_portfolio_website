import './index.scss';
import About from '../About';
import Skillbar from '../Skills';

const Aboutfull = () => {
    return (
        <div className='aboutfull'>
            <h1>About</h1>

            <div className='details'>

                <div className='myBrief'>
                    <About />
                </div>
    
                <div className='mySkills'>
                    <Skillbar />
                </div>
            </div>
        </div>
    );
}

export default Aboutfull
