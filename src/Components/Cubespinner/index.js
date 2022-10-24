import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const Cubespinner = () => {
    return (
        <div className='skillscube'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faPython} color="#306998" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                </div>
            </div>
        </div>
    );
}

export default Cubespinner