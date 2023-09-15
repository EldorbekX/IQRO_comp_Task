import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/phone.png";
import { NavHashLink } from "react-router-hash-link";
export function Hero() {
    return (
        <Container id="home">
            <div className="hero-text">
                <h1>Разаработка сайтов и мобильных приложений</h1>

                <h3>
                    Помогаем бизнесу увеличить прибыль с помощью
                    digital-инструментов
                </h3>

                <div style={{ marginTop: "100px" }}>
                    <BrowserRouter>
                        <NavHashLink smooth to="#contact" className="button">
                            Обсудить проект
                        </NavHashLink>
                    </BrowserRouter>
                </div>
            </div>

            <div className="hero-image">
                <img src={Illustration} alt="Ilustração" />
            </div>

            <BrowserRouter>
                <NavHashLink smooth to="#contact" className="button2">
                    Обсудить проект
                </NavHashLink>
            </BrowserRouter>
        </Container>
    );
}
