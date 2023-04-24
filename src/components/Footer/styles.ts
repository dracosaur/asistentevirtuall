import styled from "styled-components";

export default {
  Container: styled.div`
    position: absolute;
    bottom: 0;
    width: -webkit-fill-available;
    padding: 24px;
    padding: 20px;

    display: flex;
    flex-direction: row;

    background: #7a00b1;


  `,
  Content: styled.div`
    max-width: 1118px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 990px) {
      flex-direction: column;
    }
  `,
  Image: styled.img`
    width: 15%;
    display: block;
    margin: 0 auto;

    @media only screen and (max-width: 990px) {
      width: 40%;

    }
  `,
  TermsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media only screen and (max-width: 990px) {
      align-items: center;
    }
  `,
  Termsline: styled.div`
    color: #FFFFFF;
    font-size: 15px;
    text-decoration: underline;

    cursor: pointer;
  `,
  EmptyContent: styled.div`
    width: 15%;
  `,
};  