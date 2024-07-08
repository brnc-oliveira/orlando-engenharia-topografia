import { Fragment } from "react/jsx-runtime";

import Slider from "./components/Slider";
import Pictures from "./components/Pictures";
import Technology from "./components/Technology";
import About from "./components/About";
import Localization from "./components/Localization";
import Contact from "./components/Contact";
import CoreServices from "./components/CoreServices";
import OthersServices from "./components/OthersServices";

export default function Home() {
    return (
        <Fragment>
            <section className="mt-[90px]" id="initial-section">
                <Slider />
            </section>

            <section>
                <Pictures />
            </section>

            <section id="services-section">
                <CoreServices />
            </section>

            <section>
                <Technology />
            </section>

            <section id="about-section">
                <About />
            </section>

            <section id="services-section">
                <OthersServices />
            </section>

            <section id="contact-section">
                <Contact />
            </section>

            <section id="localization-section">
                <Localization />
            </section>
        </Fragment>
    );
}