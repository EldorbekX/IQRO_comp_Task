import { Hero } from "../Hero/Hero";
import { Result } from "../Result/Result";
import { OurWork } from "../Project/OurWork";
import "./stayle.css";
import Services from "../Services/Services";
import { Contact } from "../Contact/Contact";

export function Main() {
    return (
        <>
            <div id="hero-bg">
                <div className="container">
                    <Hero />
                </div>
            </div>
            <div id="services-bg">
                <div className="container">
                    <Services />
                    <OurWork />
                    <Result />
                    <Contact />
                </div>
            </div>
        </>
    );
}
