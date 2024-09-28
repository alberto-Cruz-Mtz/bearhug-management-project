import {ReactNode} from "react";

export default function SectionContent({title, textContent, children, layout}: {title: string; textContent: string, children?: ReactNode, layout: 'grid' | 'flex' }) {
    const classname = layout === 'grid'? 'grid gap-2 md:grid-cols-2 lg:grid-cols-4' : 'flex justify-center flex-wrap';
    return (
        <section className="text-center px-2.5 flex flex-col gap-5 pt-10">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{textContent}</p>
            <article className={classname}>
                {children}
            </article>
        </section>
    )
}
