import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {GithubIcon} from "../icon/GithubIcon.tsx";
import {GoogleIcon} from "../icon/GoogleIcon.tsx";
import ButtonPopover from "./ButtonPopover.tsx";
import {useForm} from "react-hook-form";
import {messageGithub, messageGoogle} from "../constant/messageAuthOther.ts";
import useAuth from "../hook/useAuth.ts";
import {useState} from "react";
import AlertModal from "./AlertModal.tsx";
import {LOG_IN_MESSAGE, SIGN_UP_MESSAGE} from "../constant/messageAuth.ts";

type Inputs = {
    username: string
    password: string
}

type Errors = {
    message: string
    error: string
}

export default function AuthForm({action}: {action: "log-in"|"sign-up"}) {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [errorAuth, setErrorAuth] = useState<Errors | null>(null);
    const {authenticate} = useAuth(action)

    const onSubmit = handleSubmit( async (data) => {
        authenticate(data).then(response => {
            if(response.error) {
                setErrorAuth(response)
                return
            }
            setIsAuthenticated(response.isAuthenticated);
        });
    })

    const authenticationSuccessfulMessage = action === 'sign-up' ? SIGN_UP_MESSAGE: LOG_IN_MESSAGE;

    return (
        <form id="form1" className="py-5 px-8 grid gap-1.5 min-h-96 md:w-2/3 md:mx-auto lg:w-1/3 lg:mx-0" onSubmit={onSubmit}>
            <h1 className="text-center font-bold text-2xl">Bienvenido</h1>
            <Input variant="bordered" color={errors.username ? "danger" : "primary"} label="email" type="email" {...register("username",  {
                required:true
            })}/>
            <Input variant="bordered" color={errors.password ? "danger" : "primary"} label="password" type="password" {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 16
            })}/>
            <fieldset className="grid grid-cols-2 gap-1.5">
                <ButtonPopover icon={<GithubIcon/>} message={messageGithub} />
                <ButtonPopover icon={<GoogleIcon/>} message={messageGoogle} />
            </fieldset>
            <Button type="submit" color="primary" form="form1">enviar</Button>
            <AlertModal title={errorAuth?.error} message={errorAuth?.message} isOpen={!!errorAuth} />
            <AlertModal title={authenticationSuccessfulMessage.title} message={authenticationSuccessfulMessage.message} isOpen={isAuthenticated} />
        </form>
    )
}