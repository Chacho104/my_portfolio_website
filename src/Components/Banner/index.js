import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
    return (
        <div className='banner'>
            
            <div className='intro'>
                <span>Hello there! My name is</span> 
                <h1>Churchil Owino</h1>
                <p>I am an enthusiastic, customer-driven fullstack software engineer, <br />
                ready to turn yout brilliant ideas into great solutions for the digital <br /> 
                space. I'm currently focused on building responsive and interactive <br />
                UIs from scratch, ensuring you can actualize just about any idea.
                </p>
                <button>Tour my Showroom</button>
            </div>

            <div className='stage-cube-cont'>
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
        </div>
    )
}

export default Banner