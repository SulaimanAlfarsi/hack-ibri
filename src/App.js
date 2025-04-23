
import Home from './components/Home';

import { Routes, Route } from "react-router-dom";
import DiagnoseCrop from './components/pages/DiagnoseCrop';
import StorePage from './components/pages/StorePage';

function App() {
  return (
    <>
    {/* Use only <Routes> without <Router> */}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diagnose" element={<DiagnoseCrop />} />
    <Route path="/storepage" element={<StorePage />} />


    </Routes>
    </>
  );
}

export default App;
