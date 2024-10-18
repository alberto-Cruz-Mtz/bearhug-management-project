import Header from "../core/components/Header.tsx";
import logo from './../../public/logo.png';
import Footer from "../page/landing-page/component/Footer.tsx";
import AuthForm from "./component/AuthForm.tsx";
import LayoutForm from "./component/LayoutForm.tsx";
import image from './image/SignUpImage.png';

export default function SignUp(){
    return(
        <>
            <Header logo={logo} />
            <LayoutForm form={<AuthForm typeAuthenticate="/sign-up"/>} urlImage={image} />
            <Footer logo={logo} nameCompany="Bearhug Management" />
        </>
    );
}