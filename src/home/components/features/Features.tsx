import SectionContainer from "../../layout/SectionContainer";
import CardFeature from "./components/CardFeature";
import { FEATURES } from "./feature";
import { Icons } from "./icons";

export const Features = () => {
  return (
    <SectionContainer
      bg="bg-gradient-pallet"
      textColor="text-white"
      title="¿Por qué elegir nuestro Gestor de Almacenes en la Nube?"
      description="Si aun no estas convencido, te mostramos los beneficios que obtendria
          tu negocio si te decides por nosotros"
    >
      <div className="flex flex-wrap justify-center gap-10">
        {FEATURES.map((feature, index) => (
          <CardFeature
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={Icons[index]()}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
