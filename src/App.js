import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactSection from './components/ContactSection';
import PricingSection from './components/PricingSection';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} exact />
        <Route path="/login" element={<LoginPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
