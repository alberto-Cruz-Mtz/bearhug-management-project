import {Button} from "@nextui-org/button";

export function Hero({title, textContent, textButtons, urlImage}: {
    title: string;
    textContent: string,
    textButtons: string[],
    urlImage: string
}) {
    return (
        <section className="px-5 md:py-11 lg:flex lg:px-10">
            <article className="text-center flex flex-col gap-4 md:gap-6 lg:text-left lg:w-3/6 lg:my-auto">
                <h1 className="text-xl font-bold md:text-4xl lg:text-3xl">{title}</h1>
                <p className="md:text-2xl md:w-4/5 md:mx-auto lg:mx-0 lg:text-base lg:w-full">{textContent}</p>
                <div className="flex justify-center gap-5 lg:justify-normal">
                    <Button color="primary" variant="shadow">
                        {textButtons[0]}
                    </Button>
                    <Button variant="ghost">
                        {textButtons[1]}
                    </Button>
                </div>
            </article>
            <figure className="lg:max-w-lg lg:w-full lg:mx-auto md:w-4/5 md:mx-auto">
                <img className="object-cover object-center rounded" src={urlImage} alt="image-content"/>
            </figure>
        </section>
    )
}