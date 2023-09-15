import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15rem;

    h2 {
        padding: 0rem 2rem;
        font-size: 4rem;
        text-align: center;
        margin-bottom: 3rem;
    }
    h3 {
        padding: 0rem 2rem;
        font-size: 3.5rem;
        margin-bottom: 3rem;
    }
    h4 {
        padding: 0rem 0rem;
        font-size: 3.5rem;
        margin-bottom: 3rem;
    }

    .projects {
        padding: 2rem;
        overflow: hidden;

        .project {
            padding: 6rem 1.8rem;
            background: rgba(255, 255, 255, 0.13);
            transition: 0.25s;
            display: flex;
            clip-path: polygon(0% 0%, 180% 0%, 0% 170%);
            border-bottom-right-radius: 50px;
            flex-direction: column;
            max-width: 390px;
            height: 100%;
            color: #fff;
            &:hover {
                transform: translateY(-5px);
            }
            .main__button {
                background-color: white;
                text-align: center;
                border-radius: 30px;
                color: #2e2e2e;
                font-weight: bold;
                font-size: 18px;
                margin-left: 2rem;
                width: 240px;
                padding: 2rem 8rem;
            }
        }
    }
    @media (min-width: 703px) {
        .projects {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 2rem;
        }
        .main__button {
            margin-left: 0rem;
        }
    }
    @media (min-width: 999px) {
        .projects {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            gap: 2rem;
        }
    }
    @media (max-width: 399px) {
        .projects .project .main__button {
            margin-left: 0rem;
            width: 200px;
            padding: 2rem 0rem;
        }
    }
`;
