import Header from "./component/Header.tsx";
import { Hero } from "./component/Hero.tsx";
import Computer from './assets/image/computer.png';
import { TEXT_CONTENT, TITLE } from "./constant/landing-page-info.ts";
import Content from "./component/Content.tsx";
import Pricing from "./component/Pricing.tsx";


export default function App() {
    return (
        <>
            <Header />
            <Hero title={TITLE} textContent={TEXT_CONTENT} textButtons={["Registrate ahora", "inicia sesión"]} urlImage={Computer} />
            <Content />
            <Pricing />
        </>
    )
}