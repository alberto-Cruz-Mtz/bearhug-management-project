import { Button } from "@nextui-org/button";
import { Wave } from "./Wave";
import { Link } from "react-router";

interface Props {
  image: string;
}

export default function HeroImage({ image }: Props) {
  return (
    <main className="h-[90svh] flex justify-center items-center px-10 md:pt-8 gap-12">
      <Wave />
      <article className="w-[500px] text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">
          Bienvenido a BEARHUG el mejor gestor de almacenes en la nube
        </h1>
        <p className="text-lg">
          ¿Estás cansado de perder información importante debido a fallos en tus
          dispositivos o sistemas locales? ¡No te preocupes más! Nuestra
          aplicación de Gestión de Almacenes en la Nube está aquí para ayudarte.
        </p>
        <div className="flex justify-center gap-10">
          <Link to="/auth/signup">
            <Button variant="shadow" color="primary" className="w-[150px]">
              Registrate ahora
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="shadow" className="w-[150px] ">
              Inicia sesión
            </Button>
          </Link>
        </div>
      </article>
      <figure className="w-[500px] hidden lg:block z-10">
        <img className="object-cover object-center" src={image} alt="hero" />
      </figure>
    </main>
  );
}
