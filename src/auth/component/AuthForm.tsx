import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import GithubIcon from "./../icon/GitHubIcon.tsx";
import GoogleIcon from "./../icon/GoogleIcoin.tsx";
import ButtonPopover from "./ButtonPopover";
import AlertModal from "./AlertModal.tsx";
import {logInMessage, signUpMessage} from "../constant/messageAuth.ts";
import {useForm} from "react-hook-form";
import {useState} from "react";
import useAuth from "../hook/useAuth.ts";

const typeMessage = {
    "login": logInMessage,
    "signup": signUpMessage
}

interface AuthFormProps {
    text_button: string;
    title: string;
    text_action: 'registrate' | 'inicia sesión';
    message: 'login' | 'signup';
}

export default function AuthForm({ text_button, title: title, text_action, message}: AuthFormProps) {
    const [isAuthenticated , setIsAuthenticated ] = useState<boolean>(false);
    const {register, handleSubmit} = useForm();
    const { authResponse, submitCredentials, loading, error } = useAuth();

    const authenticate = ({data}: {data: unknown}) => {
        console.log(data)
        setIsAuthenticated(!isAuthenticated)
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            <form className="grid gap-4 px-5 mt-8" onSubmit={handleSubmit(data => authenticate({data}))}>
                <Input variant="bordered" label="Email" type="email" required {...register('username')}/>
                <Input variant="bordered" label="Password" type="password" required {...register('password')}/>
                <p className="text-center text-gray-500 dark:text-white text-xl">O {text_action} con:</p>
                <div className="grid grid-cols-2 gap-4 row-auto">
                    <ButtonPopover Icon={<GoogleIcon />} typeAuth="Google" />
                    <ButtonPopover Icon={<GithubIcon />} typeAuth="Github" />
                </div>
                <Button type="submit" color="primary" variant="shadow">{text_button}</Button>
                <AlertModal text_content={typeMessage[message]} isOpen={isAuthenticated } />
            </form>
        </>
    )
}
