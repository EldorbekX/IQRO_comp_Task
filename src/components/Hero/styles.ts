import styled from "styled-components";

export const Container = styled.section`
    #hero-bg {
        background-color: red;
    }

    padding-top: 15%;
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    .hero-text {
        & > p {
            font-size: 1.8rem;
        }
        h1 {
            font-size: 5rem;
        }

        h3 {
            margin-top: 30px;
        }

        p.small-resume {
            margin-bottom: 5rem;
        }
    }
    // New added
    .social-media {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding-top: 5rem;
        padding-left: 1rem;

        img,
        span {
            font-size: 3rem;
            width: 3.5rem;
        }
    }

    .button {
        background-color: white;
        text-align: center;
        border-radius: 25px;
        color: #2e2e2e;
        padding: 1.9rem 8rem;
    }
    .button2 {
        display: none;
        padding: 1.9rem 8rem;
    }

    .hero-image {
        img {
            max-width: 600px;
        }
    }

    @media (max-width: 960px) {
        display: block;
        margin-top: 15%;
        .hero-text {
            h1 {
                font-size: 5rem;
            }
        }

        .hero-image {
            margin-top: 15%;
        }
        .hero-image img {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        margin-top: 35%;
        .button {
            display: none;
        }
        .button2 {
            display: block;
            background-color: white;
            text-align: center;
            border-radius: 25px;
            color: #2e2e2e;
            font-weight: bold;
            padding: 1.9rem 8rem;
            margin-top: 30%;
            margin-bottom: 20%;
        }
    }
    @media (max-width: 480px) {
        margin-top: 45%;
        .button {
            width: 100%;
        }
    }
`;
