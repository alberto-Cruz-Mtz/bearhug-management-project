import Form from "./component/Form.tsx";
import FormLayout from "./component/FormLayout.tsx";
import Header from "../../core/components/Header.tsx";
import logo from './../../../public/logo.png';

export default function SignUp() {
    return(
        <FormLayout>
            <Header logo={logo} />
            <Form/>
        </FormLayout>
    )
}