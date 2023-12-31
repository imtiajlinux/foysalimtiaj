import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, About, Contact, Project } from "./router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
