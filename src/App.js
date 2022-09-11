import "./styles/Global.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Gallery, CardEdit } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.svg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const links = document.getElementById("nav-links").children;
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      if (link.href === window.location.href) link.style.fontWeight = "bold";
    }

  }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="unimemoi logo" />
        <span>UniMemoi</span>
        <div>&nbsp;</div>
      </header>
      <main>
        <nav>
          <div id="nav-links" className="nav-links">
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
          </div>
          <div>
            <h3>About us</h3>
            <p>UniMemoi, created by Raiten Menimemo</p>
          </div>
        </nav>
        <div className="content">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/card/:id" element={<CardEdit />} />
            </Routes>
          </Router>
        </div>
      </main>
      <footer>© UniMemoi, 2022</footer>
    </div>
  );
}

export default App;
