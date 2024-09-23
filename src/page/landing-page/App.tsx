import Header from "./component/Header.tsx";
import {Hero} from "./component/Hero.tsx";
import Computer from './assets/image/computer.png';
import HeaderLayout from "./layout/HeaderLayout.tsx";

export function App() {
    return (
        <>
            <HeaderLayout>
                <Header/>
                <Hero title="Bienvenido a BEARHUG el mejor gestor de almacenes en la nube"
                      textContent="¿Estás cansado de perder información importante debido a fallos en tus dispositivos o sistemas locales? ¡No te preocupes más! Nuestra aplicación de Gestión de Almacenes en la Nube está aquí para ayudarte."
                      textButtons={["Registrate", "Inicia sesión"]}
                      urlImage={Computer}
                />
            </HeaderLayout>
        </>
    )
}