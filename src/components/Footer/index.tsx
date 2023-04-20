import S from './styles';

export default function FirstPageContent() {
  return (
    <S.Container>
        <S.Content>
            <S.Image src='/logos e fundos para paginas (41).png' />
            <S.TermsContainer>
              <S.Termsline>{"Política de privacidad"}</S.Termsline>
              <S.Termsline>{"Términos de uso"}</S.Termsline>
            </S.TermsContainer>
            <S.EmptyContent />
        </S.Content>
    </S.Container>
  )
}   