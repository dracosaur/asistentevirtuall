import { CheckIcon } from '../Basics/Icons/CheckIcon';
import { list, about } from './data';
import S from './styles';

const FirstPageContent = ({ nextStep }: any) => {
  return (
    <S.Container>
        <S.TitleContainer>
            <S.MainTitle>{'CONTRATANDO'}</S.MainTitle>
            <S.Title>{'Asistente Virtual'}</S.Title>
            <S.Subtitle>{'Gana dinero por trabajar como Asistente Virtual'}</S.Subtitle>
        </S.TitleContainer>
        <S.ModalContainer>
            <S.LeftContent>
                { list.map(({id, title}) => (
                <S.List key={id}>
                    <CheckIcon />
                    <S.TitleList>{title}</S.TitleList>
                </S.List>
                ))}
                <S.Text>{'Actualmente estamos reclutando nuevas personas para trabajar como Asistente Virtual. Estas vacantes son remotas.'}</S.Text>
            </S.LeftContent>
            <S.RightContent>
                { about.map(({id, title, description}) => (
                    <S.About key={id}>
                        <S.AboutTitle>{title}</S.AboutTitle>
                        <S.AboutContent>{description}</S.AboutContent>
                    </S.About>
                ))}
                <S.ButtonText>{'Si puedes comenzar de inmediato, haz tu registro completando el siguiente formulario.'}</S.ButtonText>
                <S.Button onClick={() => nextStep()}>{'Quiero aplicar para el puesto'}</S.Button>
            </S.RightContent>
        </S.ModalContainer>
    </S.Container>
  )
}  

export default FirstPageContent;