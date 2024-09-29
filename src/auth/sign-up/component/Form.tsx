import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {useMemo, useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import GitHubIcon from "../../icon/GitHubIcon.tsx";
import GoogleIcon from "../../icon/GoogleIcon.tsx";

export default function Form() {

    const [value, setValue] = useState("");

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);

    return (
        <form onSubmit={(e) => e.preventDefault()} className="py-3 px-2.5 w-full grid gap-4 mt-6 md:w-2/3 mx-auto">
            <h1 className="text-3xl text-center font-bold">Crea tu cuenta</h1>
            <Input type="email"
                   value={value}
                   variant="bordered"
                   label="Email"
                   isInvalid={isInvalid}
                   color={isInvalid ? "danger" : "default"}
                   onValueChange={setValue}
                   errorMessage="Please enter a valid email"
            />
            <Input type="password" variant="bordered" label="Password"/>
            <div className="flex gap-4">
                <Popover placement="top" offset={15} backdrop="blur">
                    <PopoverTrigger>
                        <Button className="w-1/2 bg-slate-900" variant="bordered"><GitHubIcon/></Button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-slate-950 dark:border-gray-400 dark:border-2">
                        <div className="px-1 py-2 grid gap-4 text-white">
                            <GitHubIcon size={30} className="mx-auto"/>
                            <p className="w-60 text-center">Estimado usuario,
                                Lamentamos informarle que el registro mediante GitHub aún no está disponible.</p>
                            <p className="font-bold">Atentamente, Bearhug Management</p>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="top" offset={15} backdrop="blur">
                    <PopoverTrigger>
                        <Button className="w-1/2" variant="bordered"><GoogleIcon /></Button>
                    </PopoverTrigger>
                    <PopoverContent className="dark:border-gray-400 dark:border-2">
                        <div className="px-1 py-2 grid gap-4">
                            <GoogleIcon size={30} className="mx-auto"/>
                            <p className="w-60">Estimado usuario, Lamentamos informarle que el registro mediante Google
                                aún no está disponible.</p>
                            <p className="font-bold">Atentamente, Bearhug Management</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            <Button color="primary" variant="shadow" type="submit">Registrar</Button>
        </form>
    )
}