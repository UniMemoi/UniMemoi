import "./styles/Global.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Gallery, CardEdit } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/temp_logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="unimemoi logo" />
        <span>UniMemoi</span>
        <div>&nbsp;</div>
      </header>
      <main>
        <nav>
          <div>
            <a href="/">Home</a>
            <a href="gallery">Gallery</a>
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
      <footer>Footer</footer>
    </div>
  );
}

export default App;
