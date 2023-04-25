import FirstPageContent from "@/components/FirstPageContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentControll from "@/components/ContentControll";
import styled from "styled-components";

const Container = styled.div`
    height: auto;
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
`
const FooterContainer = styled.div`
    width: 100%;
`

export default function Home() {
  return (
    <Container>
      <Header />
      <ContentControll />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  )
}
