
import CardSection from './components/CardSection';
import Navbar from './components/Navigation';
import RecommendedProducts from './components/RecommendedProducts';
import SpringPlantingCard from './components/SpringPlantingCard';

function App() {
  return (
    <div>
      <Navbar />
      <CardSection/>
      <RecommendedProducts/>
      <SpringPlantingCard/>
    </div>
  );
}

export default App;
