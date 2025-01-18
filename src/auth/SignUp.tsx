import { Button } from "@nextui-org/button";
import { VerifiedEmail } from "./components/verified_email/VerifiedEmail.tsx"
import { Link } from "react-router"
import AuthLayout from "./layout/AuthLayout";
import logo from "./../../public/logo.png";
import image from "./images/Data Cloud.png";
import { signUpNewUser } from "./services/auth.service";
import { FormValues } from "./components/form/model/form_schema";
import { Bar, DarkModeButton } from "../core/components";
import { useState } from 'react'
import { CardVerifiedEmail } from "./components/verified_email/VerifiedEmail.tsx"

export default function SignUp() {
  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState("");

  const signUp = (data: FormValues) => {
    signUpNewUser(data.email, data.password)
      .then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          console.log(response.data);
          setEmail(response.data.user.email);
          setSendEmail(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
    <>
      <Bar image={logo}>
        <Link to="/auth/login">
          <Button size="sm" color="primary" variant="ghost">
             inicia sesión
          </Button>
        </Link>      
        <DarkModeButton />
      </Bar>
      <AuthLayout title="Registrate" image={image} service={signUp} />
      {sendEmail && <VerifiedEmail username={email} isVerifiedEmail={sendEmail}/>}
    </>
  );
}
