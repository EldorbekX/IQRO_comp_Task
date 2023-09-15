import styled from "styled-components";

export const Container = styled.section`
    margin-bottom: 15rem;
    .contact {
      h
        padding-bottom: 100px;
        background: var(
            --secondary-gradient-blue,
            linear-gradient(270deg, #131a15 0%, #090b3a 100%)
        );
        &__wrapper {
            background: rgba(255, 255, 255, 0.13);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.1px);
            -webkit-backdrop-filter: blur(4.1px);
            border: 1px solid rgba(255, 255, 255, 0.137);
            border-width: 2px;
            border-radius: 20px;
            display: flex;
            justify-content: space-between;
            .contact__info {
                padding-top: 121px;
                padding-left: 40px;
                padding-bottom: 101px;
                max-width: 643px;
                @media (max-width: 856px) {
                    max-width: 1000px;
                }
                @media (max-width: 500px) {
                    padding-left: 15px;
                }
                #title-center{
                  padding: 30px 0px 30px 0px ;
                }
                .title {
                    color: var(--text-white, #fff);
                    font-weight: 800;
                    line-height: 55px;
                    font-size: 50px;
                    @media (max-width: 1200px) {
                        font-size: calc(
                            34px + 16 * ((100vw - 320px) / (1290 - 320))
                        );
                    }
                   
                }
                p {
                    padding-top: 15px;
                    color: var(--white-white-100, #fff);
                    font-weight: 600;
                    line-height: 35px;
                    font-size: 31px;
                    @media (max-width: 1200px) {
                        font-size: calc(
                            15px + 16 * ((100vw - 320px) / (1290 - 320))
                        );
                    }
                }
            }
            .contact__message {
                background: #000;
                max-width: 446px;
                padding: 0 30px;
                border-radius: 20px;
                @media (max-width: 856px) {
                    max-width: 1000px;
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                h1 {
                    padding-top: 51px;
                    font-weight: 800;
                    line-height: 50px;
                    color: var(--text-white, #fff);
                    font-size: 40px;
                    @media (max-width: 1200px) {
                        font-size: calc(
                            24px + 16 * ((100vw - 320px) / (1290 - 320))
                        );
                    }
                }
                p {
                    font-weight: 600;
                    line-height: 27px;
                    margin-top: 15px;
                    color: var(--white-white-100, #fff);
                    font-size: 24px;
                    @media (max-width: 1200px) {
                        font-size:18px ;
                    }
                }
                &__btn {
                    color: var(--text-title, #2e2e2e);
                    font-variant-numeric: lining-nums proportional-nums;
                    font-size: 16px;
                    font-weight: 800;
                    line-height: 24px;
                    text-transform: uppercase;
                    background: transparent;
                    border: none;
                    outline: none;
                    border-radius: 80px;
                    background: #fff;
                    padding: 24px 40px;
                    width: 100%;
                    margin-top: 105px;
                    cursor: pointer;
                    transition: 0.3s ease-out;
                    &:hover {
                        background: #dad8d8;
                    }
                    @media (max-width: 856px) {
                          margin-top: 0px;
                    }
                }
            }
            @media (max-width: 856px) {
                flex-direction: column;
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
