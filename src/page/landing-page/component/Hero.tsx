import {Button} from "@nextui-org/button";

export function Hero({title, textContent, textButtons, urlImage}: {
    title: string;
    textContent: string,
    textButtons: string[],
    urlImage: string
}) {
    return (
        <section className="h-[90svh] flex flex-col lg:flex-row items-center lg:px-8">
            <article className="text-center flex flex-col gap-5 md:gap-7 py-4 px-3">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl">{title}</h1>
                <h2 className="text-lg md:text-xl lg:text-sm xl:text-lg">{textContent}</h2>
                <div className="flex gap-5 justify-center">
                    <Button size="sm" color="primary" variant="shadow" onPress={() => window.location.href="/public/sign-up.html"}>
                        {textButtons[0]}
                    </Button>
                    <Button size="sm" variant="ghost">
                        {textButtons[1]}
                    </Button>
                </div>
            </article>
            <figure className="h-2/5 md:h-3/6 lg:h-full grid place-items-center">
                <img className="w-2/3 md:w-3/5" src={urlImage} alt="image-content"/>
            </figure>
        </section>
    )
}