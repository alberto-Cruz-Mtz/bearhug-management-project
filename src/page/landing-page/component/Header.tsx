import {Switch} from "@nextui-org/switch";
import SunIcon from "../../../core/icons/SunIcon";
import MoonIcon from "../../../core/icons/MoonIcon";
import Logo from "../../../core/components/Logo";
import useDarkTheme from "../../../core/hook/useDarkTheme.ts";

export default function Header({logo}: { logo: string }) {

    const {toogle, changeTheme} = useDarkTheme()

    return (
        <header
            className="flex w-full justify-between gap-1 py-2 px-3.5 h-10s shadow-md dark:shadow-gray-800 sticky top-0 bg-cyan-50 dark:bg-neutral-800 z-10">
            <Logo urlImage={logo} title="Bearhug Management"/>
            <Switch
                isSelected={toogle}
                onValueChange={changeTheme}
                size="md"
                color="primary"
                thumbIcon={({isSelected, className}) =>
                    isSelected ? (
                        <SunIcon className={className}/>
                    ) : (
                        <MoonIcon className={className}/>
                    )
                }
            >
            </Switch>
        </header>
    )
}