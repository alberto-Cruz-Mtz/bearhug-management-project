import { Switch } from "@nextui-org/switch";
import SunIcon from "../../../core/icons/SunIcon";
import MoonIcon from "../../../core/icons/MoonIcon";
import { useEffect, useState } from "react";
import Logo from "../../../core/components/Logo";
import Icon from './../../../../public/logo.png'

export default function Header() {

    const [toogle, setToogle] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", toogle);
    }, [toogle]);

    return (
        <header className="flex w-full justify-between gap-1 py-2 px-3.5">
            <Logo urlImage={Icon} title="Bearhug Management"/>
            <Switch
                isSelected={toogle}
                onValueChange={setToogle}
                size="md"
                color="primary"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <SunIcon className={className} />
                    ) : (
                        <MoonIcon className={className} />
                    )
                }
            >
            </Switch>
        </header>
    )
}