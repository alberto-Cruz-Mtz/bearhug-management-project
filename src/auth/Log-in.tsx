import AuthForm from "./component/AuthForm.tsx";
import AuthLayout from "./layout/AuthLayout";
import image from './images/Authentication.png';

export default function LogIn() {
    return (
        <AuthLayout urlImage={image}>
            <AuthForm text_action="inicia sesión" title="Iniciar Sesion" text_button="iniciar sesión" />
        </AuthLayout>
    )
}
