import { createRoot } from "react-dom/client";
import './index.css'
import { NextUIProvider } from "@nextui-org/system";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")!).render(
    <NextUIProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </NextUIProvider>
);