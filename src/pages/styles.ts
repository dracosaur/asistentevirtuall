import styled from "styled-components";

export default {
  Container: styled.div`
    height: 100%;
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
};
