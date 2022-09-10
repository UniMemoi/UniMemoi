import "./styles/Global.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Gallery } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="../public/temp_logo.png" alt="UniMemoi logo" />
        text
      </header>
      <main>
        <nav>
          <a href="/">Home</a>
          <a href="gallery">Gallery</a>
        </nav>
        <div className="content">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Router>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
