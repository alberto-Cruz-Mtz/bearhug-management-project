import React, {JSX} from "react";
import logo from "../../../public/logo.png";
import Header from "../../core/components/Header.tsx";

export default function FormLayout({children, image}: { children: React.ReactNode, image?: string | JSX.Element }) {
    const isString = typeof image === 'string';
    return (
        <div className="flex flex-col">
            <Header logo={logo}/>
            <div className="flex flex-col h-[90svh] lg:flex-row lg:items-center">
                <section className="w-full h-svh md:h-auto lg:w-2/5">
                    {children}
                </section>
                <figure className="hidden md:inline-block lg:w-3/5">
                    {isString ? <img src={image} className="w-3/5 mx-auto" alt="image"/> : image}
                </figure>
            </div>
        </div>
    )
}