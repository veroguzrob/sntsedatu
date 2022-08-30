import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Home from './pages/Home'
import Releases from "./pages/Releases";
import Directory from "./pages/Directory";
import Documents from "./pages/Documents";
import Transparency from "./pages/Transparency";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunicados" element={<Releases />} />
          <Route path="/directorio" element={<Directory />} />
          <Route path="/documentos" element={<Documents />} />
          <Route path="/transparencia" element={<Transparency />} />
          <Route path="/contacto" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
