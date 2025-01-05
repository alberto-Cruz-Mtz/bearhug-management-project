import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

interface HeroProps {
  title: string,
  description: string,
  image: string,
}

export default function Hero({ title, description, image }: HeroProps) {
  return (
    <main className="h-[90svh] px-6 py-4 md:py-12 text-center flex flex-col gap-6 md:gap-12 items-center lg:flex-row">
        <article className="space-y-4 flex flex-col items-center lg:w-1/2">
            <h2 className="font-bold font-[Poppins] md:w-2/3 lg:w-full text-2xl md:text-3xl lg:text-2xl">{title}</h2>
            <p className="md:w-2/3 lg:w-full md:text-lg font-[Poppins]">{description}</p>
            <span className="flex gap-5">
                <Button as={Link} href="/sign-up" variant="shadow" color="primary">Registrate ahora</Button>
                <Button as={Link} href="/sign-up" variant="ghost" color="primary">Inicia sesión</Button>
            </span>
        </article>
        <figure className="w-full grid place-items-center lg:w-1/2">
            <img className="w-[calc(100%-15%)] md:w-5/6 md:h-full mb-auto rounded-lg" src={image} alt={title}/>
        </figure>
    </main>
  )
}
