import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SessionReservation from './pages/SessionReservation';
import Trainer from './components/TrainerReservationSection/Trainer';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GymPage from './pages/GymPage';
import UserPanelPage from './pages/UserPanelPage';
import TrainerSchedulePage from './pages/TrainerSchedulePage';
import ChangeGym from './components/TrainerSchedule/ChangeGym';
import AdminPanelPage from './pages/AdminPanelPage';
import FormPage from './pages/FormPage';
import BookTrainer from './components/TrainerReservationSection/BookTrainer';


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
        <Route path="/my-profile" element={<UserPanelPage />} exact />
        <Route path="/time-schedule" element={<TrainerSchedulePage />} exact />
        <Route path="/gym-change" element={<ChangeGym />} exact />
        <Route path="/administration" element={<AdminPanelPage />} exact />
        <Route path="/forms" element={<FormPage />} exact />
        <Route path="/book-trainer" element={<BookTrainer />} exact />
      </Routes>
    </Router>
  );
}

export default App;

