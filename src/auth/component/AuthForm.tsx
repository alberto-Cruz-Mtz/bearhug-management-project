import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import GithubIcon from "./../icon/GitHubIcon.tsx";
import GoogleIcon from "./../icon/GoogleIcoin.tsx";
import ButtonPopover from "./ButtonPopover";
import {FormEvent, useState} from "react";
import AlertModal from "./AlertModal.tsx";
import {logInMessage, signUpMessage} from "../constant/messageAuth.ts";

const typeMessage = {
    "login": logInMessage,
    "signup": signUpMessage
}

export default function AuthForm({ text_button, title: title, text_action, message }: { text_button: string, title: string, text_action: 'registrate' | 'inicia sesión', message: "login" | "signup"}) {
    const [status, setStatus] = useState<boolean>(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setStatus(!status);
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            <form className="grid gap-4 px-5 mt-8" onSubmit={handleSubmit}>
                <Input variant="bordered" label="Email" type="email" required />
                <Input variant="bordered" label="Password" type="password" required />
                <p className="text-center text-gray-500 dark:text-white text-xl">O {text_action} con:</p>
                <div className="grid grid-cols-2 gap-4 row-auto">
                    <ButtonPopover Icon={<GoogleIcon />} typeAuth="Google" />
                    <ButtonPopover Icon={<GithubIcon />} typeAuth="Github" />
                </div>
                <Button type="submit" color="primary" variant="shadow">{text_button}</Button>
                <AlertModal text_content={typeMessage[message]} isOpen={status} />
            </form>
        </>
    )
}
