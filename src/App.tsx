import "./normolize.scss";
import "./App.scss";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Chess from "./pages/Chess/Chess";
// import WorksGallery from "./components/WorksGallery/WorksGallery";
// import Weather from "./pages/weather/Weather";

const App = () => {
  return (
    <>
      <Header />
      <ParticlesBg />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chess" element={<Chess />} />
          {/* <Route path="/worksgallery" element={<WorksGallery />} /> */}
          {/* <Route path="/weather" element={<Weather />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
