import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footbar = () => {
    return (
        <div className='footbar'>
            <div>
                <ul>
                    <li><a href='https://github.com/Chacho104'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href='https://www.linkedin.com/in/churchil-owino-227a51120/'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href='https://www.reddit.com/user/Invisible_Help'><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href='https://www.reddit.com/user/Invisible_Help'><FontAwesomeIcon icon={faReddit} /></a></li>
                </ul>
            </div>

            <div className='copyright'>
                <span>&copy; C-Solutions 2022</span>
            </div>
        </div>
    )
}

export default Footbar