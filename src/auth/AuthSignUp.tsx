import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import './../index.css';
import SignUp from "./sign-up/SignUp.tsx";
import {NextUIProvider} from "@nextui-org/system";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <NextUIProvider>
            <SignUp/>
        </NextUIProvider>
    </StrictMode>
);