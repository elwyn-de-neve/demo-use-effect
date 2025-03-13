import { Route, Routes } from "react-router-dom";
import CrudPage from "./pages/CrudPage";
import MountingPage from "./pages/MountingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<MountingPage />} />
          <Route path="/crud" element={<CrudPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
