import styled from "styled-components";

export default {
  Container: styled.div`
    padding: 60px;
    margin-bottom: 200px;


    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;

    }
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    gap: 16px;

    @media only screen and (max-width: 990px) {
      text-align: center;
    }
  `,
  MainTitle: styled.p`
    color: #FFFFFF;
    font-family: "Spartan", Sans-serif;
    font-size: 24px;
    font-weight: 700;
  `,
  Title: styled.h1`
    color: #FFFFFF;
    font-family: "Spartan", Sans-serif;
    font-size: 50px;
    font-weight: 600;
  `,
  Subtitle: styled.h2`
    color: #FFFFFF;
    font-size: 19px;
    font-weight: 700;
  `,
  ModalContainer: styled.div`
    max-width: 1000px;
    padding: 60px 80px 60px 80px;

    background: rgba(0, 0, 0, 0.55);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);  

    display: flex;
    flex-direction: row;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      flex-direction: column;
    }

  `,
  LeftContent: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    
    gap: 30px;

    @media only screen and (max-width: 990px) {
      width: 100%;
    }
  `,
  LeftContentText: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  `,
  RightContent: styled.div`
    width: 50%;

    @media only screen and (max-width: 990px) {
      width: 100%;
    }
  `,
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  `,
  FormContent: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `,
  Label: styled.label`
    font-size: 14px;
    font-weight: 700;
    
    color: black;
  `,
  FooterContainer: styled.div`
    width: 100%;
    display: flex;
    margin-top: 16px;
    flex-direction: column;
    gap: 8px
  `,
  Select: styled.select`
    width: 100%;
    height: 30px;
    background-color: white;
    border: 1px solid black;
    color: black;
  `,
  ButtonText: styled.small`
    font-size: 12px;
    font-weight: 500;
    
    color: black;
  `,
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  List: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  `,
  TitleList: styled.p`
    font-family: "Roboto", Sans-serif;
    font-size: 21px;
    color: #FFFFFF;
    font-weight: 700;
  `,
  Text: styled.p`
    margin-top: 60px;
    color: #FFFFFF;
    font-family: "Spartan", Sans-serif;
    font-size: 22px;
    font-weight: 700;
  `,
  About: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  `,
  AboutTitle: styled.p`
    color: #B000FF;
    font-family: "Spartan", Sans-serif;
    font-size: 23px;
    font-weight: 700;
  `,
  BackButton: styled.div`
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;

    font-family: "Spartan", Sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
  `,
  AboutContent: styled.p`
    color: #FFFFFF;
    font-family: "Spartan", Sans-serif;
    font-size: 18px;
    font-weight: 700;
  `,
  FormMainTitle: styled.p`
    text-align: center;
    color: #FFFFFF;
    font-family: "Roboto", Sans-serif;
    font-size: 19px;
  `,
  FormTitle: styled.p`
    text-align: center;
    color: #B000FF;
    font-family: "Spartan", Sans-serif;
    font-size: 32px;
    font-weight: 800;
  `,
  FormSubtitle: styled.p`
    text-align: center;
    color: #FFFFFF;
    font-family: "Roboto", Sans-serif;
    font-size: 17px;
  `,
};  