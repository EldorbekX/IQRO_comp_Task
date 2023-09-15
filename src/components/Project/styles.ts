import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15rem;

    h2 {
        padding: 0rem 2rem;
        font-size: 4rem;
        text-align: center;
        margin-bottom: 3rem;
    }
    .work {
        padding-top: 10px;
        padding-bottom: 50px;

        &__title {
            @extend %sub-title;
            text-align: center;
            @media (max-width: 500px) {
                font-size: 25.649px;
                font-style: normal;
                font-weight: 800;
                line-height: 47.473px;
            }
        }
        .work__wrapper {
            display: grid;
            grid-template-columns: 50% 50%;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.13);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.1px);
            -webkit-backdrop-filter: blur(4.1px);
            border: 1px solid rgba(255, 255, 255, 0.137);
            border-width: 2px;
            padding: 75px 65px;
            border-radius: 20px;
            gap: 45px;
            @media (max-width: 900px) {
                grid-template-columns: 100%;
                align-items: center;
            }
            @media (max-width: 807px) {
                padding: 50px 25px;
            }
            .content {
                display: flex;
                align-items: center;
                gap: 45px;
                @media (max-width: 807px) {
                    gap: 25px;
                }
                .img__wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100px;
                    height: 100px;
                    img {
                        border: 2px solid #fff;
                        border-radius: 50%;
                        width: 80px;
                        height: 80px;
                        padding: 10px;
                    }
                    @media (max-width: 800px) {
                        width: 50px;
                        height: 50px;
                    }
                }
                h4 {
                    color: #fff;
                    font-size: 20px;
                    @media (max-width: 900px) {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 40px;
                    }
                    @media (max-width: 807px) {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 40px;
                    }
                }
            }
        }
    }
    @media (max-width: 900px) {
        .work .work__wrapper {
            display: grid;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            grid-template-columns: 100%;
        }
        .content {
            width: 100%;
        }
    }
`;
