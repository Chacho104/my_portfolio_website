import './App.scss';
import Banner from './Components/Banner';
import Body from './Components/Body';
import Footbar from './Components/Footbar';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Body />
      <Footbar />
    </div>
  );
}

export default App;
