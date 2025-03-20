import { Route, Routes } from "react-router-dom";
import MountingPage from "./pages/MountingPage";
import UpdatePage from "./pages/UpdatePage";
import UnmountPage from "./pages/UnmountPage";
import FetchPage from "./pages/FetchPage";
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
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/unmount" element={<UnmountPage />} />
          <Route path="/fetch" element={<FetchPage />} />
          {/* <Route path="/crud" element={<CrudPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
