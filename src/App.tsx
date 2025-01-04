import { Route, Routes } from "react-router-dom";
import LandingPage from "./page/landing-page/LandingPage";
import LogIn from "./auth/LogIn.tsx";
import SignUp from "./auth/SignUp.tsx";
import Dashboard from "./page/dashboard/Dashboard.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
