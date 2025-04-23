
import Home from './components/Home';

import { Routes, Route } from "react-router-dom";
import DiagnoseCrop from './components/pages/DiagnoseCrop';

function App() {
  return (
    <>
    {/* Use only <Routes> without <Router> */}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diagnose" element={<DiagnoseCrop />} />

    </Routes>
    </>
  );
}

export default App;
