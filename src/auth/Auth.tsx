import FormAuth from "./components/FormAuth.tsx";
import Header from "../core/components/Header.tsx";
import {useState} from "react";
import AlertMessage from "./components/AlertMessage.tsx";
import {ERROR_MESSAGE} from "./constants/messages.ts";
import Logo from "../core/components/Logo.tsx";

const company = "Bearhug Management";
export default function Auth(){
    const [isValid, setIsValid] = useState(true);
    return (
        <section className="grid">
            <Header image={<Logo/>} company={company} />
            <FormAuth isValid={isValid} setIsValid={setIsValid} title="Registrate ahora"/>
            <AlertMessage message={ERROR_MESSAGE} isOpen={!isValid} setIsOpen={setIsValid} />
        </section>
    )
}