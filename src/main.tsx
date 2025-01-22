import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { HeroUIProvider } from "@heroui/system";
import ModalProvider from "./core/context/modal/ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
