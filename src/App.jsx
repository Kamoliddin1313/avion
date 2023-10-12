import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./components/AboutPage.jsx";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import TableImgPage from "./components/TableImgPage.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<AboutPage />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/tableimgpage" element={<TableImgPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
