import { Button } from "@nextui-org/button";

export default function Content() {
    return (
        <section className="text-gray-500 dark:text-gray-200 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                    <h1 className="sm:text-3xl text-slate-800 text-2xl font-medium title-font mb-4 dark:text-white">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 dark:border-white">
                        <h2 className="text-lg sm:text-xl text-slate-800 dark:text-white font-medium title-font mb-2">Shooting Stars</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>

                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 dark:border-white">
                        <h2 className="text-lg sm:text-xl text-slate-800 dark:text-white font-medium title-font mb-2">The Catalyzer</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>

                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 dark:border-white">
                        <h2 className="text-lg sm:text-xl text-slate-800 dark:text-white font-medium title-font mb-2">Neptune</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>

                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 dark:border-white">
                        <h2 className="text-lg sm:text-xl text-slate-800 dark:text-white font-medium title-font mb-2">Melanchole</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>

                    </div>
                </div>
                <Button className="block mx-auto mt-16" size="md" color="primary" variant="shadow">
                    Comienza ahora
                </Button>
            </div>
        </section>
    )
}
