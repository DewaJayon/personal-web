import { Fragment } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
    return (
        <Fragment>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </Fragment>
    );
}
