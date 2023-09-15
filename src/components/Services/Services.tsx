import { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "./styles";
import { serviceData } from "../../data";

function Services() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [isActive, setActive] = useState(false);

    useEffect(() => {
        function handleResize() {
            setActive(window.innerWidth <= 703);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <Container id="services">
                <h2>Услуги </h2>
                <div className="projects">
                    {!isActive ? (
                        serviceData.map((res, id) => (
                            <div key={id} className="project">
                                <h3 className="title">{res.name}</h3>
                                <button className="main__button">
                                    Подробнее
                                </button>
                            </div>
                        ))
                    ) : (
                        <Slider {...settings}>
                            {serviceData.map((res, id) => (
                                <div key={id} className="project">
                                    <h4>{res.name}</h4>
                                    <button className="main__button">
                                        Подробнее
                                    </button>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </Container>
        </div>
    );
}
export default Services;
