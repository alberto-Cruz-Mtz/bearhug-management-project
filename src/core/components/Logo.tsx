import {JSX} from "react";

export default function Logo({urlImage, svgIcon, title}: { urlImage?: string, svgIcon?: JSX.Element, title?: string }) {
    const logo = urlImage ? <img className="w-16" src={urlImage} alt=""/> : svgIcon;
    return (
        <figure className="flex items-center">
            {logo}
            <p className="font-bold text-lg">{title}</p>
        </figure>
    )
}
