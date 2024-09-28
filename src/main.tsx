import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./page/landing-page/App.tsx";
import './index.css'
import { NextUIProvider } from "@nextui-org/system";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <NextUIProvider>
            <App />
        </NextUIProvider>
    </StrictMode>
);