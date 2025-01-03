import Icon from "./../../../public/logo.png";
import Header from "../../core/components/Header.tsx";

import Hero from "./component/Hero.tsx";
import SectionContent from "./component/SectionContent.tsx";
import ContentCard from "./component/ContentCard.tsx";
import Footer from "./component/Footer.tsx";
import TeamCard from "./component/TeamCard.tsx";
import PricingCard from "./component/PricingCard.tsx";

import Computer from "./assets/image/computer.png";
import lock from "./assets/svg/lock.svg";

import {
  feature,
  team,
  PricingInfo,
  text_feature,
  INFO_CONTENT,
  TITLE,
  TEXT_CONTENT,
} from "./constant/index.ts";

const text =
  "En Bearhug Management, creemos que el éxito de nuestro producto se debe al talento y la dedicación de nuestro equipo. Cada miembro aporta una combinación única de habilidades, experiencia y pasión que nos permite innovar y ofrecer soluciones excepcionales a nuestros usuarios. Conoce a las personas que hacen posible todo esto";

export default function LandingPage() {
  return (
    <>
      <Header logo={Icon} />
      <Hero
        title={TITLE}
        textContent={TEXT_CONTENT}
        textButtons={["Registrate ahora", "inicia sesión"]}
        urlImage={Computer}
      />
      <SectionContent
        title={INFO_CONTENT.title}
        textContent={INFO_CONTENT.subtitle}
        layout="grid"
      >
        {feature.map((element) => (
          <ContentCard
            key={element.title}
            urlImage={lock}
            title={element.title}
            description={element.description}
          />
        ))}
      </SectionContent>
      <SectionContent
        title="Conoce los planes que tenemos para ti"
        textContent="Empieza ya y decide el plan que mejor le convenga a tu negocio"
        layout="flex"
      >
        {PricingInfo.map((price) => (
          <PricingCard
            key={price.title}
            price={price.price}
            plan={price.title}
            features={price.features}
            isPopular={price.isPopular ?? false}
          />
        ))}
      </SectionContent>
      <SectionContent title="Nuestro equipo" textContent={text} layout="flex">
        {team.map((member) => (
          <TeamCard
            key={member.name}
            urlImage={member.urlImage}
            name={member.name}
            rol={member.rol}
            description={text_feature}
          />
        ))}
      </SectionContent>
      <Footer logo={Icon} nameCompany="Bearhug Management" />
    </>
  );
}
