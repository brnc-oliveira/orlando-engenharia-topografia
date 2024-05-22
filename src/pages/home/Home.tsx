import { Fragment } from "react/jsx-runtime";

import Slider from "./components/Slider";
import Pictures from "./components/Pictures";
import Technology from "./components/Technology";
import Services from "./components/Services";
import About from "./components/About";
import Localization from "./components/Localization";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <Fragment>
            <section className="mt-[90px]" id="initial-section">
                <Slider />
            </section>

            <section className="my-4">
                <Pictures />
            </section>

            <section className="my-4">
                <Technology />
            </section>

            <section className="my-4" id="services-section">
                <Services />
            </section>

            <section className="my-4" id="about-section">
                <About />
            </section>

            <section className="my-4" id="localization-section">
                <Localization />
            </section>

            <section className="my-4" id="contact-section">
                <Contact />
            </section>
        </Fragment>
    );
}