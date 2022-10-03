import './App.css';
import Footer from './Components/Footer';
import ICYMI from './Components/ICYMI';
import Navbar from './Components/Navbar';
import NewsCategory from './Components/NewsCategory';
import Opinion from './Components/Opinion';
import Top from './Components/Top';
import Trending from './Components/Trending';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Top/>
      <Opinion/>
      <ICYMI/>
      <Trending/>
      <NewsCategory/>
      <Footer/>
    </div>
  );
}

export default App;
