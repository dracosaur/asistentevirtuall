import FirstPageContent from "@/components/FirstPageContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import S from './styles'
import ContentControll from "@/components/ContentControll";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <ContentControll />
      <Footer />
    </S.Container>
  )
}
