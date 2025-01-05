import {Button} from "@nextui-org/button";
import {FormEvent} from "react";
import {Input} from "@nextui-org/input";
import {REGULAR_EXPRESION} from "../constants/regular_expresion.ts";

interface FormAuthProps {
    title: string;
    isValid: boolean;
    setIsValid: (value: boolean) => void;
}

export default function FormAuth({title, isValid, setIsValid}: FormAuthProps) {

    const validateDate = (username: string, password: string) => {
        if(!username && !password) return false;
        if(!validateUsername(username)) return false;
        return password.length >= 8;
    }

    const validateUsername = (username: string) => !!username.match(REGULAR_EXPRESION);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        const validate = validateDate(username, password);
        if(!validate) {
            console.log("operacion cancelada");
            setIsValid(false);
            return;
        }
        setIsValid(true);
        console.log("realizando operacion....")
    }
    return (
        <form onSubmit={handleSubmit} className="px-6 py-4 grid gap-4">
            <h1 className="text-center text-2xl font-bold font-[Poppins]">{title}</h1>
            <Input color={isValid ? 'primary' : 'danger'} type="email" name="username" label="Username" variant="faded" required/>
            <Input color={isValid ? 'primary' : 'danger'} type="password" name="password" label="Password" variant="faded" min={8} required/>
            <Button color="primary" variant="solid" type="submit">Registrate</Button>
        </form>
    )
}