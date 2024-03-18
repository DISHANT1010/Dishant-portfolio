import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import Education from "./pages/Education"

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route exact path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}
