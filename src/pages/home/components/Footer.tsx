import FacebookIcon from "../icon/FacebookIcon.tsx";
import TwitterIcon from "../icon/TwitterIcon.tsx";
import InstagramIcon from "../icon/InstagramIcon.tsx";
import {JSX} from "react";

type FooterProps = {
    logo: JSX.Element,
    company: string;
    socialMediaUrl: string[]
}

export default function Footer({ socialMediaUrl, company, logo }: FooterProps) {
    const year = new Date().getFullYear();
    return (
        <footer className="grid justify-items-center pt-5 pb-8">
            <figure className="flex gap-2 items-center">
                {logo}
                <h5 className="font-[Poppins] text-xl">{company}</h5>
            </figure>
            <h6>©{year} {company}</h6>
            <ul className="flex gap-4 pt-4 justify-center">
                <li><a href={socialMediaUrl[0]}><FacebookIcon/></a></li>
                <li><a href={socialMediaUrl[1]}><TwitterIcon/></a></li>
                <li><a href={socialMediaUrl[2]}><InstagramIcon/></a></li>
            </ul>
        </footer>
    )
}