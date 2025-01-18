import { CheckIcon } from "./../icon/CheckIcon.tsx";

interface Props {
  username: string;
}

export const CardVerifiedEmail = ({ username }: Props) => {
  const domain = username.substring(username.indexOf("@") + 1);

  return (
    <article className="w-[300px] shadow-xl px-6 py-8 text-center">
      <header>
        <h6 className="font-bold text-2xl">Verificación de Correo</h6>
      </header>
      <div className="flex flex-col justify-center mt-3">
        <CheckIcon />
        <p className="font-bold text-lg mt-5">¡Correo enviado!</p>
      </div>
      <p className="text-sm text-gray-500 mt-3">
        Hemos enviado un correo de verificación a:{" "}
        <a
          href={`https://www.${domain}`}
          target="blank"
          className="text-blue-700 font-bold"
        >
          {username}
        </a>
      </p>
      <p className="text-sm text-gray-500 mt-3">
        Por favor, revisa tu bandeja de entrada y sigue las instrucciones para
        completar el proceso de verificación.
      </p>
    </article>
  );
};
