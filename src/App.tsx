import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/layouts/AppLayout";
import { Navbar } from "./components/Navbar/Navbar";
import { CoachingPerso } from "./pages/CoachingPerso/CoachingPerso";
import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching-perso" element={<CoachingPerso />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
