import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Showroom = () => {
    return (
        <div className='showroom'>
            <h1>The Showroom</h1>

            <div className='project'>

                <div className='project1'>
                    <div className='overlay'></div>
                    
                </div>

                <div className='title'>
                    <p>Featured Project</p>
                    <h4>My Portfolio Website</h4>
                </div>

                <div className='description'>
                    <p>A simple portfolio website showcasing my skills, experience, and the 
                        things I have built for the web. More specifically, the website my 
                        showcases my speciliaties, my preferred tools and technologies, completed 
                        projects, and how to contact me. 
                    </p>
                </div>

                <div className='moreDetails'>
                    <div className='detail'>
                    <span>React.js</span>
                    <span>Styled Components</span>
                    </div>
                    <div className='detail'>
                    <span><a href='https://github.com/Chacho104'>< FontAwesomeIcon icon={faGithub} /></a></span>
                    <span><a href='churchilowino.com'>< FontAwesomeIcon icon={faUpRightFromSquare} /></a></span>
                    </div>
              </div>

            </div>

            <div className='project'>

                <div className='project2'>
                    <div className='overlay'></div>
                    
                </div>

                <div className='title titleL'>
                    <p>Featured Project</p>
                    <h4>Tea Shop Landing Page</h4>
                </div>

                <div className='description descriptionL'>
                    <p>A simple portfolio website showcasing my skills, experience, and the 
                        things I have built for the web. More specifically, the website my 
                        showcases my speciliaties, my preferred tools and technologies, completed 
                        projects, and how to contact me. 
                    </p>
                </div>

                <div className='moreDetails moreDetailsL'>
                    <div className='detail'>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    </div>
                    <div className='detail'>
                    <span><a href='https://github.com/Chacho104'>< FontAwesomeIcon icon={faGithub} /></a></span>
                    <span><a href='churchilowino.com'>< FontAwesomeIcon icon={faUpRightFromSquare} /></a></span>
                    </div>
              </div>

            </div>

            <div className='project'>

                <div className='project3'>
                    <div className='overlay'></div>
                    
                </div>

                <div className='title'>
                    <p>Featured Project</p>
                    <h4>Online Shopping Mall</h4>
                </div>

                <div className='description'>
                    <p>A simple portfolio website showcasing my skills, experience, and the 
                        things I have built for the web. More specifically, the website my 
                        showcases my speciliaties, my preferred tools and technologies, completed 
                        projects, and how to contact me. 
                    </p>
                </div>

                <div className='moreDetails'>
                    <div className='detail'>
                    <span>React.js</span>
                    <span>Styled Components</span>
                    </div>
                    <div className='detail'>
                    <span><a href='https://github.com/Chacho104'>< FontAwesomeIcon icon={faGithub} /></a></span>
                    <span><a href='churchilowino.com'>< FontAwesomeIcon icon={faUpRightFromSquare} /></a></span>
                    </div>
              </div>

            </div>

            <div className='project'>

                <div className='project4'>
                    <div className='overlay'></div>
                    
                </div>

                <div className='title titleL'>
                    <p>Featured Project</p>
                    <h4>Uber Website Clone</h4>
                </div>

                <div className='description descriptionL'>
                    <p>A simple portfolio website showcasing my skills, experience, and the 
                        things I have built for the web. More specifically, the website my 
                        showcases my speciliaties, my preferred tools and technologies, completed 
                        projects, and how to contact me. 
                    </p>
                </div>

                <div className='moreDetails moreDetailsL'>
                    <div className='detail'>
                    <span>React.js</span>
                    <span>Styled Components</span>
                    </div>
                    <div className='detail'>
                    <span><a href='https://github.com/Chacho104'>< FontAwesomeIcon icon={faGithub} /></a></span>
                    <span><a href='churchilowino.com'>< FontAwesomeIcon icon={faUpRightFromSquare} /></a></span>
                    </div>
              </div>

            </div>

        </div>
    );
}

export default Showroom