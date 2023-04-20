import { Form } from '../Form';
import { linguage, smartphones, states, yesOrNot } from './data';
import S from './styles';

export const  SecondPageContent = ({backStep}: any) => {
  return (
    <S.Container>
        <S.TitleContainer>
            <S.MainTitle>{'CONTRATANDO'}</S.MainTitle>
            <S.Title>{'Asistente Virtual'}</S.Title>
            <S.Subtitle>{'Gana dinero por trabajar como Asistente Virtual'}</S.Subtitle>
        </S.TitleContainer>
        <S.ModalContainer>
            <S.LeftContent>
                <S.Text>{'Actualmente estamos reclutando nuevas personas para trabajar como Asistente Virtual. Estas vacantes son remotas.'}</S.Text>
            </S.LeftContent>
            <S.RightContent>
                <S.Button onClick={() => backStep()}>{'Quiero aplicar para el puesto'}</S.Button>
            </S.RightContent>
            <S.FormContainer>
              <Form />
            </S.FormContainer>
        </S.ModalContainer>
    </S.Container>
  )
}   

export default SecondPageContent;