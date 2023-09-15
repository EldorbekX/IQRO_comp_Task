import { workData } from "../../data";
import "./style.css";

export function OurWork() {
    return (
        <div id="ourwork">
            <section id="work" className="work">
                <h2 className="work__title" data-aos="zoom-in">
                    Как мы работаем
                </h2>
                <div
                    className="work__wrapper"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    id="works"
                >
                    {workData.map((res, id) => (
                        <div
                            className="content"
                            id="content"
                            key={id}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="img__wrapper">
                                <img src={res.img} alt="icon" />
                            </div>
                            <h4 className="titleid">{res.desc}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
