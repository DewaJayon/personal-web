import { Fragment } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
    return (
        <Fragment>
            <HeroSection />
            <AboutSection />
        </Fragment>
    );
}
