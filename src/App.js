import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {

  // https://youtu.be/eJ8W3l371Jg?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&t=791

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
