import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "./home/Home.tsx";
import AuthProvider from "./core/context/auth/AuthProvider.tsx";
import { CircularProgress } from "@nextui-org/progress";

const Login = lazy(() => import("./auth/Login.tsx"));
const SignUp = lazy(() => import("./auth/SignUp.tsx"));
const ResetPassword = lazy(
  () => import("./auth/resetPassword/ResetPassword.tsx")
);
const Dashboard = lazy(() => import("./dashboard/Dashboard.tsx"));

export default function App() {
  return (
    <Suspense
      fallback={
        <CircularProgress
          color="primary"
          className="absolute mx-auto"
          aria-label="Loading..."
        />
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Suspense>
  );
}
