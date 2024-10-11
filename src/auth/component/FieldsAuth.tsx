import {Input} from "@nextui-org/input";
import {UseFormRegister} from "react-hook-form";

export default function FieldsAuth({register}: {register: UseFormRegister<Record<string, unknown>>}) {
    return(
        <>
            <Input variant="bordered" label="Email" type="email" required {...register('username')}/>
            <Input variant="bordered" label="Password" type="password" required {...register('password')}/>
        </>
    )
}