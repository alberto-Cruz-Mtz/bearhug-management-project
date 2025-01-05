import { ReactNode } from "react"


interface SectionProps {
    title: string,
    description: string,
    children?: ReactNode,
    wrap?: boolean,
}

export default function Section({ title, description, children, wrap }: SectionProps) {
    return (
        <section className="px-5 py-8 space-y-12">
            <article className="text-center md:w-2/3 md:mx-auto">
                <h4 className="font-bold font-[Poppins] text-2xl md:text-3xl">{title}</h4>
                <p className="mt-6 text-lg font-sans">{description}</p>
            </article>
            {
                wrap ? (
                    <article className="space-y-6 md:space-y-0 md:flex gap-6 lg:gap-4 justify-center flex-wrap">
                        {children}
                    </article>
                ) : children
            }
        </section>
    )
}
