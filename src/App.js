import './style/App.css';
import IndexPage from './routes/IndexPage';
import About from './routes/About';
import Skills from './routes/Skills';
import Projects from "./routes/Projects";
import Experiences from "./routes/Experiences";
import TroisDimension from './routes/TroisDimension';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <div className="App">

        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/troisdimension" element={<TroisDimension />} />
        </Routes>

      </div>
  );
}

export default App;
