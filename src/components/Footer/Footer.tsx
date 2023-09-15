import { Container } from "./styles";
// import discordIcon from '../../assets/discord.png'

export function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__list">
                    <div>
                        <a href="#services">Услуги</a>
                    </div>
                    <div>
                        <a href="#ourwork">Как мы работаем</a>
                    </div>
                    <div>
                        <a href="#result">Результат</a>
                    </div>
                    <div>
                        <a href="#contact">Заказать</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
