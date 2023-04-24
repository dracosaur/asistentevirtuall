
import { BackIcon } from '../Basics/Icons/BackIcon';
import { Form } from '../Form';
import S from './styles';

export default function SecondPageContent({backStep}: any)  {
  return (
    <S.Container>
        <S.TitleContainer>
            <S.MainTitle>{'CONTRATANDO'}</S.MainTitle>
            <S.Title>{'Asistente Virtual'}</S.Title>
            <S.Subtitle>{'Gana dinero por trabajar como Asistente Virtual'}</S.Subtitle>
        </S.TitleContainer>
        <S.ModalContainer>
            <S.LeftContent>
              <S.LeftContentText>
                <S.FormMainTitle>{'Estás postulándote para el puesto de'}</S.FormMainTitle>
                <S.FormTitle>{'Asistente Virtual'}</S.FormTitle>
                <S.FormSubtitle>{'Para aplicar a esta posición, por favor completa el siguiente formulario.'}</S.FormSubtitle>
              </S.LeftContentText>
            </S.LeftContent>
            <S.RightContent>
              <S.FormContainer>
                <Form {...{backStep}}/>
              </S.FormContainer>
            </S.RightContent>
        </S.ModalContainer>
    </S.Container>
  )
}   