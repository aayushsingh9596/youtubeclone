import React from "react"; // Import React
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import VideosByCategory from "./components/VideosByCategory";
import VideoContainer from "./components/VideoContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<VideoContainer />}></Route>
            <Route path="WatchPage/:id" element={<WatchPage />}></Route>
            <Route path="Search/:query" element={<SearchPage />}></Route>
            <Route
              path="VideoCategory/:category"
              element={<VideosByCategory />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
