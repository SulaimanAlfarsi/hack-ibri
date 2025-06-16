
import CardSection from '../components/CardSection';
import CropDiagnosisCard from '../components/CropDiagnosisCard ';
import Navbar from '../components/Navigation';
import RecommendedProducts from '../components/RecommendedProducts';
import SpringPlantingCard from '../components/SpringPlantingCard';
import Features from '../components/Features';
import RecentDiagnoses from '../components/RecentDiagnoses ';
import Footer from '../components/Footer ';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CardSection/>
      <RecommendedProducts/>
      <SpringPlantingCard/>
      <CropDiagnosisCard/>
      <Features/>
      <RecentDiagnoses/>
      <Footer/>
    </div>
  );
}

export default Home;
