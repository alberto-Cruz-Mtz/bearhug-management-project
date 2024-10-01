import Header from "../../core/components/Header.tsx";
import { Hero } from "./component/Hero.tsx";
import Computer from './assets/image/computer.png';
import { TEXT_CONTENT, TITLE } from "./constant/landing-page-info.ts";
import SectionContent from "./component/SectionContent.tsx";
import ContentCard from "./component/ContentCard.tsx";
import lock from './assets/svg/lock.svg';
import PricingCard from "./component/PricingCard.tsx";
import * as PricingInfo from './constant/price.ts';
import TeamCard from "./component/TeamCard.tsx";
import Footer from "./component/Footer.tsx";
import Icon from './../../../public/logo.png';

const feature = {
    security: {
        title: "seguridad",
        description: "Utilizamos el más alto nivel de seguridad en línea, cifrando toda tu para garantizar que tus datos estén protegidos.",
    },
    delete: {
        title: "sin pérdidas",
        description: "Nunca más perderás información importante debido a fallos locales. Nuestro servicio de almacenamiento en la nube te respalda."
    },
    access: {
        title: "acceso",
        description: " Desde tu computadora de escritorio hasta tu teléfono móvil, podrás acceder a tus archivos en cualquier momento y lugar."
    },
    escalable: {
        title: "escalable",
        description: "No te preocupes por quedarte sin espacio. Amplía tu almacenamiento según tus necesidades sin comprar más discos duros físicos."
    }
}

const info = {
    title: "¿Por qué elegir nuestro Gestor de Almacenes en la Nube?",
    subtitle: "Si aun no estas convencido, te mostramos los beneficios que obtendria tu negocio si te decides por nosotros"
}

const text = "En Bearhug Management, creemos que el éxito de nuestro producto se debe al talento y la dedicación de nuestro equipo. Cada miembro aporta una combinación única de habilidades, experiencia y pasión que nos permite innovar y ofrecer soluciones excepcionales a nuestros usuarios. Conoce a las personas que hacen posible todo esto";
const text2 = "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware";

export default function LandingPage() {
    return (
        <>
            <Header logo={Icon} />
            <Hero title={TITLE} textContent={TEXT_CONTENT} textButtons={["Registrate ahora", "inicia sesión"]}
                urlImage={Computer} />
            <SectionContent title={info.title} textContent={info.subtitle} layout="grid">
                <ContentCard urlImage={lock} title={feature.security.title} description={feature.security.description} />
                <ContentCard urlImage={lock} title={feature.access.title} description={feature.access.description} />
                <ContentCard urlImage={lock} title={feature.delete.title} description={feature.delete.description} />
                <ContentCard urlImage={lock} title={feature.escalable.title} description={feature.escalable.description} />
            </SectionContent>
            <SectionContent title="Conoce los planes que tenemos para ti" textContent="Empieza ya y decide el plan que mejor le convenga a tu negocio" layout="flex">
                <PricingCard price={PricingInfo.BASIC_PLAN.price} plan={PricingInfo.BASIC_PLAN.title} features={PricingInfo.BASIC_PLAN.features} isPopular={false} />
                <PricingCard price={PricingInfo.PROFESIONAL_PLAN.price} plan={PricingInfo.PROFESIONAL_PLAN.title} features={PricingInfo.PROFESIONAL_PLAN.features} isPopular={true} />
                <PricingCard price={PricingInfo.ULTIMATE_PLAN.price} plan={PricingInfo.ULTIMATE_PLAN.title} features={PricingInfo.ULTIMATE_PLAN.features} isPopular={false} />
            </SectionContent>
            <SectionContent title="Nuestro equipo" textContent={text} layout="flex">
                <TeamCard urlImage="https://images3.alphacoders.com/132/1322715.png" name="Alexis Garcia" rol="Project Manager" description={text2} />
                <TeamCard urlImage="https://i.pinimg.com/564x/29/60/7b/29607bf1879a361905dfa20f7e1a4be8.jpg" name="Dariana Nahomi" rol="Designer" description={text2} />
                <TeamCard urlImage="https://vignette1.wikia.nocookie.net/peaky-blinders/images/f/f5/Peaky_Tommy_Shelby.jpg/revision/latest?cb=20141013005757" name="Jassiel Mauricio" rol="Database Administrator" description={text2} />
                <TeamCard urlImage="https://unavatar.io/github/unknow" name="José Alberto" rol="Full-Stack Developer" description={text2} />
            </SectionContent>
            <Footer logo={Icon} nameCompany="Bearhug Management" />
        </>
    )
}