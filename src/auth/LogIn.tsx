import Header from "../core/components/Header.tsx";
import logo from './../../public/logo.png';
import Footer from "../page/landing-page/component/Footer.tsx";
import AuthForm from "./component/AuthForm.tsx";
import image from './image/LogInImage.png';
import LayoutForm from "./component/LayoutForm.tsx";

export default function LogIn(){

    return(
        <>
            <Header logo={logo} />
            <LayoutForm form={<AuthForm typeAuthenticate="/log-in"/>} urlImage={image} />
            <Footer logo={logo} nameCompany="Bearhug Management" />
        </>
    );
}