import './index.scss';
import ProfilePic from '../../Assets/Images/profileme.jpg';

const About = () => {
    return (
        <div className='mePar'>
            <img src={ProfilePic} alt='Churchil Owino' />
            <p> 
                My name is Churchil Owino, a junior full-stack software engineer based 
                in Nairobi, Kenya. I am all about turning brilliant ideas into digital 
                solutions that solve real world problems faced by individuals or 
                businesses.
            </p>
            <p>
                I believe no idea is impossible as long as we leverage the right technology 
                and summon our most creative faculties. If you can think of it, then it can 
                be created, and I am ready to do just that. 
            </p>
            <p>
                Feel free to contact me and share your wildest ideas, and we will build 
                something amazing using the tools and technologies alongside!
            </p>
        </div>
    );
}

export default About
