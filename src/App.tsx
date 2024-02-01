import "./normolize.scss";
import "./App.scss";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <ParticlesBg />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
