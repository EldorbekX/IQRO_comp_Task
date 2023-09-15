import { Container } from "./styles";
import { useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import "./style.css";
export function Contact() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // Modalni yopish va ma'lumotlarni chiqarish kerak
        console.log("Email:", email);
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Container>
            <section id="contact" className="result">
                <div className="contact__wrapper">
                    <div className="contact__info">
                        <h1 className="title" data-aos="zoom-in">
                            Сколько стоят услуги
                        </h1>
                        <p id="title-center" data-aos="zoom-in">
                            Цена рассчитывается индивидуально в зависимости
                            отсложности, объема и сроков работы.
                        </p>
                        <p data-aos="zoom-in">
                            Разработчик оценивает временные затраты по проекту,
                            а аналитики устанавливают стоимость продукта.
                        </p>
                    </div>
                    <div className="contact__message" data-aos="zoom-in">
                        <h1 data-aos="zoom-in">
                            Получить бесплатную консультацию
                        </h1>
                        <p data-aos="zoom-in">
                            В рамках консультации уточним необходимую информацию
                            для анализа вашего проекта
                        </p>
                        <button
                            onClick={showModal}
                            data-aos="zoom-in"
                            className="contact__message__btn"
                        >
                            Получить
                        </button>
                        <Modal
                            open={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button
                                    key="submit"
                                    type="primary"
                                    onClick={handleOk}
                                    style={{ fontSize: "20px" }}
                                >
                                    отправить
                                </Button>,
                            ]}
                        >
                            <h1 className="modal-title">
                                Получить бесплатную консультацию
                            </h1>
                            <p className="modal-subtitle">
                                В рамках консультации уточним необходимую
                                информацию для анализа вашего проекта
                            </p>
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Last Name ni kiriting!",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Ваше имя"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Item>

                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Last Name ni kiriting!",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="номер телефона"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Last Name ni kiriting!",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="какая из услуг вас заинтересовала ?"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Modal>
                    </div>
                </div>
            </section>
        </Container>
    );
}
