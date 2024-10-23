import { useEffect, useState } from "react"
import SunIcon from "../../../core/icons/SunIcon";
import MoonIcon from "../../../core/icons/MoonIcon";
import { Switch } from "@nextui-org/switch";
import useDarkTheme from "../../../core/hook/useDarkTheme";

export default function Header({ logo }: { logo: string }) {

    const [time, setTime] = useState('00:00')
    const [date, setDate] = useState('00/00/00')
    const { toogle, changeTheme } = useDarkTheme()

    const changeTime = () => {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        setTime(`${horas}:${minutos}`);
    }

    useEffect(() => {
        const changeDate = () => {
            const now = new Date();
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan en 0
            const year = now.getFullYear();
            setDate(`${day}/${month}/${year}`);
        }
        changeDate();
    }, [])

    setInterval(changeTime, 1000);

    return (
        <header className="p-2 flex justify-between">
            <figure className="flex gap-3 items-center">
                <img src={logo} alt="logo" className="w-16" />
                <h1 className="font-bold text-lg">Dashboard</h1>
            </figure>
            <div className="flex gap-3 pr-5 items-center">
                <Switch
                    isSelected={toogle}
                    onValueChange={changeTheme}
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
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </header>
    )
}
