import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {GithubIcon} from "../icon/GithubIcon.tsx";
import {GoogleIcon} from "../icon/GoogleIcon.tsx";
import ButtonPopover from "./ButtonPopover.tsx";
import {useForm} from "react-hook-form";
import AlertModal from "./AlertModal.tsx";
import {logInMessage, signUpMessage} from "../constant/messageAuth.ts";
import {useState} from "react";
import {messageGithub, messageGoogle} from "../constant/messageAuthOther.ts";
import {errorLogIn, errorSignUp} from "../constant/messageErrorAuth.ts";
import useAuth from "../hook/useAuth.ts";

type Inputs = {
    username: string
    password: string
}

export default function AuthForm({typeAuthenticate}: {typeAuthenticate: "/log-in"|"/sign-up"}) {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const {authenticate, error} = useAuth(typeAuthenticate);

    const onSubmit = handleSubmit((data) => {
        authenticate(data).then(response => {
            setIsAuthenticated(!!response);
        }).catch(error => {
            console.error("Error during authentication", error);
        });
    })

    const errorMessage = typeAuthenticate === '/sign-up' ? errorSignUp : errorLogIn;
    const authenticationSuccessfulMessage = typeAuthenticate === '/sign-up' ? signUpMessage : logInMessage;

    return (
        <form id="form1" className="py-5 px-8 grid gap-1.5 min-h-96" onSubmit={onSubmit}>
            <h1 className="text-center font-bold text-2xl">Bienvenido</h1>
            <Input variant="bordered" color={errors.username ? "danger" : "primary"} label="email" type="email" {...register("username",  {
                required:true
            })}/>
            <Input variant="bordered" color={errors.password ? "danger" : "primary"} label="password" type="password" {...register("password", {
                    required: true,
            })}/>
            <fieldset className="grid grid-cols-2 gap-1.5">
                <ButtonPopover icon={<GithubIcon/>} message={messageGithub} />
                <ButtonPopover icon={<GoogleIcon/>} message={messageGoogle} />
            </fieldset>
            <Button type="submit" color="primary" form="form1">enviar</Button>
            <AlertModal title={authenticationSuccessfulMessage.title} message={authenticationSuccessfulMessage.message} isOpen={isAuthenticated} />
            <AlertModal title="Algo Salio Mal" message={errorMessage} isOpen={error} />
        </form>
    )
}