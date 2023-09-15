import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";
import phone from "../../assets/icons/phone-outgoing.svg";
import logo from "../../assets/icons/logo.svg";
export function Header() {
    const [isActive, setActive] = useState(false);

    function toggleTheme() {
        let html = document.getElementsByTagName("html")[0];
        html.classList.toggle("light");
    }

    function closeMenu() {
        setActive(false);
    }

    return (
        <Container className="header-fixed">
            <Router>
                <HashLink smooth to="#home" className="logo">
                    <img className="logo" src={logo} alt="logo" />
                </HashLink>

                <input
                    onChange={toggleTheme}
                    className="container_toggle"
                    type="checkbox"
                    id="switch"
                    name="mode"
                />

                <nav className={isActive ? "active" : ""}>
                    <NavHashLink smooth to="#services" onClick={closeMenu}>
                        Услуги
                    </NavHashLink>
                    <NavHashLink smooth to="#ourwork" onClick={closeMenu}>
                        Как мы работаем
                    </NavHashLink>
                    <NavHashLink smooth to="#result" onClick={closeMenu}>
                        Результат
                    </NavHashLink>
                    <NavHashLink smooth to="#contact" onClick={closeMenu}>
                        Заказать
                    </NavHashLink>
                    <NavHashLink smooth to="#contact">
                        <div className="menu__contact">
                            <button>
                                <img src={phone} alt="call" />
                            </button>
                            <span>Позвонить</span>
                        </div>
                    </NavHashLink>
                </nav>

                <div
                    aria-expanded={isActive ? "true" : "false"}
                    aria-haspopup="true"
                    style={{
                        width: "30px",
                        marginTop: "10px",
                        backgroundColor: "white",
                    }}
                    aria-label={isActive ? "Fechar menu" : "Abrir menu"}
                    className={isActive ? "menu active" : "menu"}
                    onClick={() => {
                        setActive(!isActive);
                    }}
                ></div>
            </Router>
        </Container>
    );
}
