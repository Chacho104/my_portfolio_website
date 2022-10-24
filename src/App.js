import './App.scss';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footbar from './Components/Footbar';
import Banner from './Components/Banner';
import Aboutfull from './Components/Aboutfull';
import Showroom from './Components/Showroom';

const App = () => {

    return (
        <div className='app'>
            <Banner />
            <Navbar />
            <Aboutfull />
            <Showroom />
            <Contact />
            <Footbar />
        </div>
    )
}

export default App
