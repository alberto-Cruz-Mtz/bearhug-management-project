import { Route, Routes } from "react-router-dom";
import LandingPage from "./page/landing-page/LandingPage";
import SignUp from "./auth/Sign-up";
import LogIn from "./auth/Log-in";
import Demo from "./Demo";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/demo" element={<Demo />} />
        </Routes>
    )
}
