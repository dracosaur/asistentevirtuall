import styled from "styled-components";

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    background: url("/retrato-de-mulher-trabalhadora-de-atendimento-ao-cliente.webp");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color:rgba(0, 0, 0, 0.68);

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
`,
AboutContainer: styled.div`
    background: #FFFFFF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    padding: 80px 10%;
`,
AboutTitle: styled.p`
    color: #4D1A76;
    font-family: "Roboto", Sans-serif;
    font-size: 37px;
    font-weight: 700;
`,
AboutSubtitle: styled.p`
    color: #D670F9;
    font-family: "Roboto", Sans-serif;
    font-size: 37px;
    font-weight: 700;
`,
AboutText: styled.p`
    text-align: center;
    color: #4D1A76;
    font-family: "Roboto", Sans-serif;
    font-size: 23px;
    line-height: 46px;
`,
AboutImages: styled.div``,
Footer: styled.div`
    width: 100%;
`,
LastStepsContainer: styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(at center center, #8657AB 0%, #4D1A76 100%);
    padding: 40px 0;
`,
Modal: styled.div`
    height: fit-content;
    border-radius: 16px;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    width: calc(100% - 20%);
    background: #FFF;
`,
ModalContent: styled.div`
    display: flex;

    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`,
LeftContent: styled.div`
    width: 50%;

    img {
      width: 88%;
    }
`,
ModalTitle: styled.p`
    color: #4D1A76;
    font-family: "Roboto", Sans-serif;
    font-size: 42px;
    font-weight: 700;
`,
RightContent: styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 32px;

`,
QuestionContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,
Question: styled.p`
    color: #D670F9;
    font-family: "Roboto", Sans-serif;
    font-size: 29px;
    font-weight: 700;

`,
Response: styled.div`
    color: #4B006D;
    font-family: "Roboto", Sans-serif;
    font-weight: 600;
`,
FeedBack: styled.div<any>`
    height: 100vh;
    width: ${({width}) => width};
    background: radial-gradient(at center center, #F5F5F5 0%, #EBEBEB 100%);radial-gradient(at center center, #F5F5F5 0%, #EBEBEB 100%);
    display: flex;
    padding: ${({padding}) => padding};

    gap: 32px;
`,
Image: styled.div`
    background: #1d1e1c;
    height: 500px;
    width: 40%;
    border-radius: 16px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
`,
FeedBackImage: styled.div`
    width: 22%;
    height: auto;

    img {
     width: 100%;
     border-radius: 20px 20px 20px 20px;
     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    }
`,
FeedBackTitle: styled.div<any>`
      color: #4B006D;
      font-family: "Roboto", Sans-serif;
      font-size: ${({font}) => font};
      font-weight: 700;
      margin-bottom: 42px;
`,
FeedBackText: styled.div<any>`
    width: ${({width}) => width};
    display: flex;
    flex-direction: column;
    align-items: ${({alignItems}) => alignItems};
    gap: ${({gap}) => gap};

    p {
      color: #4B006D;
      font-family: "Roboto", Sans-serif;
      font-size: ${({font}) => font};
      font-weight: 500;
    }

    small {
      color: #D670F9;
      font-family: "Roboto", Sans-serif;
      font-size: ${({font}) => font};
      font-weight: 500;
    }
`,
DobleImageContainer: styled.div`
    width: 100%;
    display: flex;
`,
FirstContent: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    img {
        width: 65%;
        border-radius: 20px 20px 20px 20px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    }
`,
SecondContent: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    

`,
TextBox: styled.div`
   width: calc(70% - 80px); 
   border-radius: 16px;
   margin: 24px 0 0 -60px;
   padding: 40px;
   background-color: transparent;
   background-image: radial-gradient(at center center, #9400D7 0%, #55007C 100%);

   p {
    color: #FFFFFF;
    font-family: "Roboto", Sans-serif;
    font-size: 23px;
   }
`,
}
