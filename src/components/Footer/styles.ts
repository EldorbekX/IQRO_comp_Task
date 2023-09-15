import styled from "styled-components";

export const Container = styled.footer`
    background: var(
        --secondary-gradient-blue,
        linear-gradient(270deg, #1d2820 0%, #0b0d3f 100%)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    .footer__list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
        a {
            font-size: 18px;
            color: white;
        }
    }

    @media (max-width: 560px) {
        height: 300px;
        .footer__list {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 40px;
            a {
                font-size: 18px;
                color: white;
            }
        }
    }
`;
