import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SessionReservation from './pages/SessionReservation';
import Trainer from './components/TrainerReservationSection/Trainer';
import Form from './components/TrainerReservationSection/Form';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} exact />
        <Route path="/login" element={<LoginPage/>} exact />
        <Route path="/session-reservation" element={<SessionReservation />} exact />
        <Route path="/trainer-reservation" element={<Trainer />}  exact/>
        <Route path="/:id" element={<Form />}  exact/>
      </Routes>
    </Router>
  );
}

export default App;

