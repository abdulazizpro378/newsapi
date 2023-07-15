import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import EntertainmentP from "./pages/EntertainmentP";
import GeneralP from "./pages/GeneralP";
import HealthP from "./pages/HealthP";

import HomeP from "./pages/HomeP";
import PostP from "./pages/PostP";
import ScienceP from "./pages/ScienceP";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path="entertainment" element={<EntertainmentP />} />
          <Route path="general" element={<GeneralP />} />
          <Route path="health" element={<HealthP />} />
          <Route path="science" element={<ScienceP />} />
          <Route path="posts/:id" element={<PostP/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
