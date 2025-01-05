import FacebookIcon from "../icon/FacebookIcon.tsx";
import TwitterIcon from "../icon/TwitterIcon.tsx";
import InstagramIcon from "../icon/InstagramIcon.tsx";

type ProfileProps = {
    photo: string
    name: string
    rol: string
    biography: string
    socialMediaUrl: string[]
}

export default function ProfileCard({ rol, biography, socialMediaUrl, name, photo}: ProfileProps){
    return(
        <article className="px-4 md:flex md:w-4/5 mx-auto">
            <figure className="grid justify-items-center">
                <img className="w-48 h-48 object-cover rounded-md" src={photo} alt="profile photo" />
            </figure>
            <div className="md:w-2/3 md:px-8">
                <blockquote className="text-center md:text-left">
                    <h6 className="font-[Poppins] text-xl">{name}</h6>
                    <h6 className="font-[Poppins] text-lg text-gray-500 dark:text-gray-400">{rol}</h6>
                    <p className="font-[Poppins] mt-3">{biography}</p>
                </blockquote>
                <ul className="flex gap-6 pt-5 justify-center md:justify-start">
                    <li><a href={socialMediaUrl[0]}><FacebookIcon/></a></li>
                    <li><a href={socialMediaUrl[1]}><TwitterIcon/></a></li>
                    <li><a href={socialMediaUrl[2]}><InstagramIcon/></a></li>
                </ul>
            </div>
        </article>
    )
}