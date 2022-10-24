import { NavLink } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <NavLink className='linkItem'>Home</NavLink>
                <NavLink className='linkItem'>About</NavLink>
                <NavLink className='linkItem'>The Showroom</NavLink>
                <NavLink className='linkItem'>Actualize that Idea...</NavLink>
            </nav>
        </div>
    )
}

export default Navbar