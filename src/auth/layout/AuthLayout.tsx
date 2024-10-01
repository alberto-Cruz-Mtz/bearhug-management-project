import { ReactNode } from "react";
import Header from "../../core/components/Header";
import logo from './../../../public/logo.png';
import Footer from "../../page/landing-page/component/Footer";

export default function AuthLayout({ children, urlImage }: { children: ReactNode, urlImage: string}) {
    return (
        <section aria-label="section of authentication" className="min-h-svh">
            <Header logo={logo} />
            <main className="h-[57svh] md:h-[76svh] py-4 lg:flex lg:h-[65svh] lg:items-center lg:justify-center">
                <article aria-label="form of authentication" className="h-full md:h-auto lg:w-1/3">
                    {children}
                </article>
                <figure className="hidden md:flex">
                    <img className="mx-auto" src={urlImage} alt="Logo de Bearhug Management" />
                </figure>
            </main>
            <Footer logo={logo} nameCompany="Bearhug Management" />
        </section>
    )
}
