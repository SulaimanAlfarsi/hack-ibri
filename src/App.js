
import CardSection from './components/CardSection';
import CropDiagnosisCard from './components/CropDiagnosisCard ';
import Navbar from './components/Navigation';
import RecommendedProducts from './components/RecommendedProducts';
import SpringPlantingCard from './components/SpringPlantingCard';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Navbar />
      <CardSection/>
      <RecommendedProducts/>
      <SpringPlantingCard/>
      <CropDiagnosisCard/>
      <Features/>
    </div>
  );
}

export default App;
