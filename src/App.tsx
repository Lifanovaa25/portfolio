import "./normolize.scss";
import "./App.scss";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
    <Header/>
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
