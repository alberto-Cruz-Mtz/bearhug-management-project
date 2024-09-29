import React, {JSX} from "react";

export default function FormLayout({children, image}: { children: React.ReactNode, image?: string | JSX.Element }) {
    const isString = typeof image === 'string';
    return (
        <>
            <figure className="hidden">
                {isString ? <img src={image} alt="image"/> : image}
            </figure>
            <section className="w-full h-svh">
                {children}
            </section>
        </>
    )
}