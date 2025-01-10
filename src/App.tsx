import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "./home/Home.tsx";

const Login = lazy(() => import("./auth/Login.tsx"));
const SignUp = lazy(() => import("./auth/SignUp.tsx"));
const ResetPassword = lazy(
  () => import("./auth/resetPassword/ResetPassword.tsx")
);

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
