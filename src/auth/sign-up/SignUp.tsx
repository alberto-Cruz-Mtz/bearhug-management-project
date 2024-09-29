import Form from "../component/Form.tsx";
import FormLayout from "../component/FormLayout.tsx";
import image from '../Authentication.png';

export default function SignUp() {
    return (
        <>
            <FormLayout image={image}>
                <Form/>
            </FormLayout>
        </>
    )
}