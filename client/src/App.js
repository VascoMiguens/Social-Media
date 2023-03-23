import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import League from "./pages/League";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Squad from "./pages/Squad";
import World from "./pages/World";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Squad />} />
          <Route path="/league" element={<League />} />
          <Route path="/news" element={<News />} />
          <Route path="/world-news" element={<World />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
