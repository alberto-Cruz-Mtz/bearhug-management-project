import Header from "../../core/components/Header.tsx";
import Hero from "./components/Hero";
import heroImage from '../../../public/hero-image.jpg';
import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard.tsx";
import {FEATURES} from "./constants/features.tsx";
import PricingCard from "./components/PricingCard.tsx";
import {plans} from "./constants/pricing.ts";
import ProfileCard from "./components/ProfileCard.tsx";
import {profiles} from "./constants/profiles.ts";
import Footer from "./components/Footer.tsx";
import {sectionFour, sectionOne, sectionThree, sectionTwo} from "./constants/section_information.ts";
import Logo from "../../core/components/Logo.tsx";

const company = "Bearhug Management";
const links = ["#","#","#"];

export default function Home() {
    return (
        <>
            <Header company={company} image={<Logo/>}/>
            <Hero image={heroImage} title={sectionOne.title} description={sectionOne.description}/>
            <Section wrap title={sectionTwo.title} description={sectionTwo.description}>
                {
                    FEATURES.map((item, index) => (
                        <FeatureCard key={index} color={item.color} title={item.title} description={item.description}
                                     icon={item.icon}/>
                    ))
                }
            </Section>
            <Section wrap title={sectionThree.title} description={sectionThree.description}>
                {
                    plans.map((item, index) => (
                        <PricingCard key={index} title={item.title} price={item.price} features={item.features}
                                     isPopular={!!item.isPopular}/>
                    ))
                }
            </Section>
            <Section title={sectionFour.title} description={sectionFour.description}>
                {profiles.map((item, index) => (
                    <ProfileCard key={index} photo={item.photo} name={item.name} rol={item.rol} biography={item.biography} socialMediaUrl={item.socialMediaUrl}/>
                ))}
            </Section>
            <Footer logo={<Logo />} company={company} socialMediaUrl={links}/>
        </>
    )
}
