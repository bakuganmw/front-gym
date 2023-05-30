import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SessionReservation from './pages/SessionReservation';
import Trainer from './components/TrainerReservationSection/Trainer';
import Form from './components/TrainerReservationSection/Form';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GymPage from './pages/GymPage';
import UserPanel from './components/UserPanel/UserPanel';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} exact />
        <Route path="/login" element={<LoginPage/>} exact />
        <Route path="/register" element={<RegisterPage/>} exact />
        <Route path="/session-reservation" element={<SessionReservation />} exact />
        <Route path="/trainer-reservation" element={<Trainer />}  exact/>
        <Route path="/gyms" element={<GymPage />}  exact/>
        <Route path="/trainer-reservation/:id" element={<Form />}  exact/>
        <Route path="/my-profile" element={<UserPanel />} exact />
      </Routes>
    </Router>
  );
}

export default App;

