import {JSX} from "react";

export default function LayoutForm({form, urlImage}: {form: JSX.Element, urlImage: string}) {
    return (
        <section className="lg:flex lg:justify-evenly lg:items-center lg:h-[70svh]">
            {form}
            <figure className="hidden lg:block">
                <img className="w-96 h-96" src={urlImage} alt="image"/>
            </figure>
        </section>
    )
}