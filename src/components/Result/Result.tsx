import { Container } from "./styles";
import { digitalData } from "../../data";
import tick from "../../assets/icons/tick.svg";

export function Result() {
    return (
        <Container id="result">
            <section id="digital" className="digital">
                <h1 className="digital__title" data-aos="zoom-in">
                    <span>Что даст вашему бизнесу </span> <br />
                    внедрение Digital-инструментов
                </h1>
                <div className="digital__card__row">
                    {digitalData.map((res, index) => (
                        <div
                            key={index}
                            className="digital_card"
                            data-aos="zoom-out"
                        >
                            <h3 className="digital_card_title">{res.text}</h3>
                            <img className="tick" src={tick} alt="tick icon" />
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    );
}
