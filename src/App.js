import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Logement from './Pages/logement'
import Lost from './Pages/404'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/404" element={<Lost />} />
      </Routes>
    </div>
  );
}

export default App;
