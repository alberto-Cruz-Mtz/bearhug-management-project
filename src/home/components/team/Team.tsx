import SectionContainer from "../../layout/SectionContainer";
import { Member } from "./components/Member";
import { profiles } from "./profiles";

export const Team = () => {
  return (
    <SectionContainer
      title="Nuestro equipo"
      description="En Bearhug Management, nuestro éxito depende del talento y la pasión de nuestro equipo, quienes con su experiencia e innovación ofrecen soluciones excepcionales. Conoce a quienes lo hacen posible."
    >
      <div className="flex flex-wrap justify-around">
        {profiles.map((profile) => (
          <Member
            key={profile.name}
            name={profile.name}
            description={profile.biography}
            rol={profile.rol}
            photo={profile.photo}
            socialMediaUrl="#"
          />
        ))}
      </div>
    </SectionContainer>
  );
};
