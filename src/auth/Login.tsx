import logo from "./../../public/logo.png";
import { Button } from "@nextui-org/button";
import AuthLayout from "./layout/AuthLayout";
import image from "./images/Authentication.png";
import { Bar, DarkModeButton } from "../components";

export default function Login() {
  return (
    <>
      <Bar image={logo}>
        <Button size="sm" color="primary" variant="ghost">
          inicia sesión
        </Button>
        <DarkModeButton />
      </Bar>
      <AuthLayout title="Inicia Sesión" image={image} />
    </>
  );
}
