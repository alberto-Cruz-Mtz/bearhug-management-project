import Header from "../core/components/Header.tsx";
import logo from './../../public/logo.png';
import Footer from "../page/landing-page/component/Footer.tsx";
import AuthForm from "./component/AuthForm.tsx";

export default function LogIn(){

    return(
        <>
            <Header logo={logo} />
            <AuthForm typeAuthenticate="/log-in"/>
            <Footer logo={logo} nameCompany="Bearhug Management" />
        </>
    );
}