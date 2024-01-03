import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../testimonials";
import Footer from "../Footer";

export default function Home(){
    return(
        <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <Testimonial />
        <ContactMe />
        <Footer />
        </>
    )
}