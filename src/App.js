import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import BookTable from "./pages/BookTable";
import ErrorPage from "./components/errorPage/Error";

function App() {
  return (
    <div className="Home_Page">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookTable" element={<BookTable />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
