import { Switch } from "@nextui-org/switch"
import SunIcon from "../../pages/home/icon/SunIcon.tsx"
import MoonIcon from "../../pages/home/icon/MoonIcon.tsx"
import useDarkMode from "../hook/useDarkMode.ts";
import {JSX} from "react";

interface HeaderProps {
    image: JSX.Element,
    company: string
}

export default function Header({ image, company }: HeaderProps) {
    const {darkMode, toggleDarkMode} = useDarkMode()
    return (
        <header className="sticky top-0 z-50 bg-gray-100 dark:bg-zinc-700 h-[10-svh] flex justify-between px-4 py-3 shadow-[3px_14px_14px_3px_rgba(59,_130,_246,_0.15)] dark:shadow-[3px_14px_14px_3px_rgba(149,_157,_165,_0.2)]">
            <figure className="flex items-center gap-2">
                {/*<img className="w-10" src={image} alt="logo" />*/}
                {image}
                <h1 className="text-xl font-[Poppins]">{company}</h1>
            </figure>

            <Switch
                isSelected={darkMode}
                onValueChange={toggleDarkMode}
                thumbIcon={({ isSelected }) =>
                    isSelected ? (
                        <SunIcon />
                    ) : (
                        <MoonIcon />
                    )
                }
            />
        </header>
    )
}
