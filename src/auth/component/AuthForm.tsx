import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import GithubIcon from "../icon/GithubIcon";
import GoogleIcon from "../icon/GoogleIcoin";
import ButtonPopover from "./ButtonPopover";

export default function AuthForm({ text_button, title: title, text_action }: { text_button: string, title: string, text_action: 'registrate' | 'inicia sesión' }) {
    return (
        <>
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            <form className="grid gap-4 px-5 mt-8">
                <Input variant="bordered" label="Email" type="email" required />
                <Input variant="bordered" label="Password" type="password" required />
                <p className="text-center text-gray-500 dark:text-white text-xl">O {text_action} con:</p>
                <div className="grid grid-cols-2 gap-4 row-auto">
                    <ButtonPopover Icon={<GoogleIcon />} typeAuth="Google" />
                    <ButtonPopover Icon={<GithubIcon />} typeAuth="Github" />
                </div>
                <Button type="submit" color="primary" variant="shadow">{text_button}</Button>
            </form>
        </>
    )
}
