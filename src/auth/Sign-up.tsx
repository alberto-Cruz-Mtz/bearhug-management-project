import AuthForm from "./component/AuthForm.tsx";
import AuthLayout from "./layout/AuthLayout";
import image from './images/Coding.png';

export default function SignUp() {
    return (
        <AuthLayout urlImage={image}>
            <AuthForm message="signup" text_action="registrate" title="Iniciar Sesion" text_button="Registrar" />
        </AuthLayout>
    )
}
