import { Button } from "@nextui-org/button";
import AuthLayout from "./layout/AuthLayout";
import logo from "./../../public/logo.png";
import image from "./images/Data Cloud.png";
import { signUpNewUser } from "./services/auth.service";
import { FormValues } from "./components/form/model/form_schema";
import { Bar, DarkModeButton } from "../core/components";

export default function SignUp() {
  const signUp = (data: FormValues) => {
    signUpNewUser(data.email, data.password)
      .then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Bar image={logo}>
        <Button size="sm" color="primary" variant="ghost">
          registrate
        </Button>
        <DarkModeButton />
      </Bar>
      <AuthLayout title="Registrate" image={image} service={signUp} />
    </>
  );
}
