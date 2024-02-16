import './App.css';
import Accordion from './components/accordion/accordion';
import ImageSlider from './components/Image Slider/ ImageSlider';
import LoadMoreButton from './components/Load More button/LoadMoreButton';
import RandomColor from './components/RandomColorGenerator/RandomColor';
import StarRating from './components/Star Rating/StarRating';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <RandomColor/>
      <StarRating numOfStars={10}/>
      <ImageSlider/>
      <LoadMoreButton/>
    </div>
  );
}

export default App;
