import AuthForm from "./auth/component/AuthForm.tsx";
import AuthLayout from "./auth/layout/AuthLayout";

export default function Demo() {
    return (
        <AuthLayout>
            <AuthForm text_action="inicia sesión" title="Iniciar Sesion" text_button="Registrar" />
        </AuthLayout>
    )
}
