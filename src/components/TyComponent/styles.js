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
  ModalContainer: styled.div`
    padding: 60px 80px 60px 80px;

    display: flex;
    flex-direction: row;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      flex-direction: column;
    }

  `,
  LeftContent: styled.div`
    width: 50%;

    @media only screen and (max-width: 990px) {
      width: 100%;
    }

    #vid_6446b61ba0c004000943866b {
        width: 100%;
        position: relative;
        padding: 125% 0 0;
    }

    img {
        border-radius: 16px;
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        -webkit-backdrop-filter:blur(5px);
        backdrop-filter:blur(5px);
    }
  `,
  RightContent: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      width: 100%;
    }

    img {
        width: 37%;
    }
  `,

  Text: styled.p`
    margin: 48px 0;
    text-align: center;
    color: #FFFFFF;
    font-family: "Roboto", Sans-serif;
    font-weight: 600;
    font-size: 38px;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.3);

    small {
        color: #D670F9;
    }
  `,
  
};  