import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Auth from "./auth/Auth.tsx";

export default function App() {
    return (
        <Routes>Transparency
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/sign-up" element={<Auth/>}/>
        </Routes>
    )
}
