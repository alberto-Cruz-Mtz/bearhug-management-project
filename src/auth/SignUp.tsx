import Header from "../core/components/Header.tsx";
import logo from './../../public/logo.png';
import Footer from "../page/landing-page/component/Footer.tsx";
import AuthForm from "./component/AuthForm.tsx";

export default function SignUp(){
    return(
        <>
            <Header logo={logo} />
            <AuthForm typeAuthenticate="/sign-up"/>
            <Footer logo={logo} nameCompany="Bearhug Management" />
        </>
    );
}