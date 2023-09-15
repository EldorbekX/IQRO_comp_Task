import styled from "styled-components";

export const Container = styled.section`
    margin-top: 10rem;

    .digital_card {
        position: relative;
        background: rgba(255, 255, 255, 0.13);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.1px);
        -webkit-backdrop-filter: blur(4.1px);
        border: 1px solid rgba(255, 255, 255, 0.137);
        border-width: 2px;
        max-width: 296px;
        height: 163px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 54px 20px;
        transition: 0.3s ease-out;
        cursor: pointer;
        &_title {
            font-size: 25px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            color: var(--white-white-100, #fff);
            padding-left: 25px;
        }
        .tick {
            position: absolute;
            top: -1px;
            left: -1px;
        }
        &:hover {
            transform: scale(1.1);
        }
    }

    .digital {
        padding-top: 50px;
        padding-bottom: 108px;
        &__title {
            @extend %sub-title;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            font-size: 35px;
            font-style: normal;
            font-weight: 900;
            line-height: 80.473px;
            position: relative;
            z-index: 1;
            @media (max-width: 500px) {
                font-size: 20.649px;
                font-style: normal;
                font-weight: 300;
                line-height: 47.473px;
            }

            span {
                border-radius: 20px;
                background: #000;
                padding: 15px;
            }
        }

        &__card__row {
            margin-top: 68px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 50px;
            place-items: center;
            @media (max-width: 865px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 566px) {
                grid-template-columns: 1fr;
            }
        }
    }
`;
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
